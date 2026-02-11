
import { type NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { signupSchema } from '@/lib/validations/auth'
import { errorResponse, successResponse } from '@/lib/api-response'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = signupSchema.parse(body)
    
    const supabase = await createServerSupabaseClient()

    // 1. Sign up with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    })

    if (error) {
      return errorResponse(error.message, 400)
    }

    if (data.user) {
      // 2. Create User profile in our database if it doesn't exist
      // Note: This could also be done via Supabase Database Trigger to ensure consistency
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (!existingUser) {
        await prisma.user.create({
          data: {
            id: data.user.id, // syncing ID with Supabase Auth
            email: email,
            name: name,
            role: 'STUDENT', // Default role
          }
        })
      }
    }

    return successResponse({ user: data.user, session: data.session }, 201)
  } catch (error: any) {
    return errorResponse(error)
  }
}

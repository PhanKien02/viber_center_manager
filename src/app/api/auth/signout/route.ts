
import { type NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { successResponse, errorResponse } from '@/lib/api-response'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()

    // Check if user is logged in
    const { data: { session } } = await supabase.auth.getSession()

    if (session) {
      const { error } = await supabase.auth.signOut()
      if (error) {
        return errorResponse(error.message, 500)
      }
    }

    return successResponse({ message: 'Signed out successfully' })
  } catch (error: any) {
    return errorResponse(error)
  }
}

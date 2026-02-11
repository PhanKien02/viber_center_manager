import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { createUserSchema } from "@/lib/validations/schemas";
import { errorResponse, successResponse } from "@/lib/api-response";
import { createServerSupabaseClient } from "@/utils/supabase/server";

// To be secure, this route should be role protected (e.g. only ADMIN can create other Users)
export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    // Example: Verify token
    // const authHeader = request.headers.get('authorization');
    // const { data: { user }, error } = await supabase.auth.getUser(authHeader?.split(' ')[1]);

    // For now, returning all users
    const users = await prisma.user.findMany({
      include: {
        center: true,
      },
    });
    return successResponse(users);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createUserSchema.parse(body);

    // Check if email exists
    const existing = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });
    if (existing) {
      return errorResponse("User with this email already exists", 409);
    }

    // Usually create Supabase Auth User here first?
    // If using Supabase strict, user might need to sign up first.
    // Or we create profile directly. Here we create Metadata profile.

    const newUser = await prisma.user.create({
      data: {
        email: validatedData.email,
        name: validatedData.name,
        phone: validatedData.phone,
        role: validatedData.role,
        centerId: validatedData.centerId,
      },
    });

    return successResponse(newUser, 201);
  } catch (error) {
    return errorResponse(error);
  }
}

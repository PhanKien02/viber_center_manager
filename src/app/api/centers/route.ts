import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { centerSchema } from "@/lib/validations/schemas";
import { errorResponse, successResponse } from "@/lib/api-response";
// import { cookies } from "next/headers"; // Future usage for admin check

export async function GET(request: NextRequest) {
  try {
    const centers = await prisma.center.findMany({
      include: {
        branches: true,
      },
    });
    return successResponse(centers);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = centerSchema.parse(body);

    // Auto-generate slug if not present
    if (!validatedData.slug) {
      validatedData.slug = validatedData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    // Check slug uniqueness
    const existing = await prisma.center.findUnique({
      where: { slug: validatedData.slug },
    });
    if (existing) {
      return errorResponse("Center with this slug already exists", 409);
    }

    const newCenter = await prisma.center.create({
      data: {
        name: validatedData.name,
        slug: validatedData.slug!,
        logo: validatedData.logo,
        website: validatedData.website,
        address: validatedData.address,
        phone: validatedData.phone,
        email: validatedData.email,
      },
    });

    return successResponse(newCenter, 201);
  } catch (error) {
    return errorResponse(error);
  }
}

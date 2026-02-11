import { NextResponse } from "next/server";
import { ZodError } from "zod";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string | unknown;
  meta?: unknown;
};

export function successResponse<T>(
  data: T,
  status: number = 200,
  meta?: unknown,
): NextResponse {
  return NextResponse.json(
    {
      success: true,
      data,
      meta,
    } as ApiResponse<T>,
    { status },
  );
}

export function errorResponse(
  error: unknown,
  status: number = 500,
): NextResponse {
  let message = "Internal Server Error";
  let details: unknown = null;

  if (error instanceof ZodError) {
    message = "Validation Error";
    details = error.issues;
    status = 400;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }

  return NextResponse.json(
    {
      success: false,
      error: message,
      details,
    } as ApiResponse,
    { status },
  );
}

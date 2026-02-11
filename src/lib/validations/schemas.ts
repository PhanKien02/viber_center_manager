
import { z } from 'zod';

export const userRoleEnum = z.enum(['ADMIN', 'MANAGER', 'TEACHER', 'STUDENT', 'PARENT']);

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
  role: userRoleEnum.optional(),
  centerId: z.string().uuid().optional(),
});

export const updateUserSchema = createUserSchema.partial();

export const centerSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).optional(), // Can verify backend or use name
  logo: z.string().url().optional(),
  website: z.string().url().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
});

export const updateCenterSchema = centerSchema.partial();

export const courseSchema = z.object({
  name: z.string().min(2),
  code: z.string().min(2),
  description: z.string().optional(),
  centerId: z.string().uuid(),
});

export const updateCourseSchema = courseSchema.partial();

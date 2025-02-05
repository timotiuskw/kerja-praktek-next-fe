import { LoginFormSchema, FormState } from '@/app/lib/definitions';

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to authenticate user (login)...
  // Here you would add the logic to verify the credentials (e.g., compare email and password)

  // Example: mock authentication success
  const user = { email: formData.get('email'), name: 'John Doe' }; // Example user object

  // Return user data on successful login
  return {
    user,
  };
}

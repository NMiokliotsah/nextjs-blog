import { hash } from 'bcryptjs';

export async function getHashPassword(password: string) {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
}

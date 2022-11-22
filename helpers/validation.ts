export const checkEmail = (email: string) => !email || !email.includes('@');
export const checkPassword = (password: string) => !password || password.trim() === '' || password.trim().length < 7;

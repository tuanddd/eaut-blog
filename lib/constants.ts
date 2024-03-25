const PROTOCOL = process.env.VERCEL_ENV === 'production' ? 'https://' : 'http://';
export const BASE_API_URL = PROTOCOL + process.env.NEXT_PUBLIC_VERCEL_URL
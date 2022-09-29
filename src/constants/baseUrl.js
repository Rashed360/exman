const vercel = process.env.PUBLIC_URL

export const baseUrl = vercel ? `https://${vercel}` : 'http://localhost:3000'

export const url = `${baseUrl}/api/trpc`

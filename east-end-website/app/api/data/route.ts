import { NextResponse } from 'next/server';

export async function GET() {
  // This would typically fetch from your Express.js API
  const data = {
    message: 'Data loaded successfully from Next.js API',
    data: [
      { id: 1, name: 'East End Feature 1', description: 'Modern Next.js architecture' },
      { id: 2, name: 'East End Feature 2', description: 'TypeScript integration' },
      { id: 3, name: 'East End Feature 3', description: 'Framer Motion animations' },
      { id: 4, name: 'East End Feature 4', description: 'Express.js API connectivity' },
    ]
  };

  return NextResponse.json(data);
}
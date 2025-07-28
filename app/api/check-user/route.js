import { NextResponse } from 'next/server';
import connectDb from "@/app/db/connectDb";
import User from '@/models/User';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username')?.trim(); // trim to remove hidden spaces

  if (!username) {
    return NextResponse.json({ exists: false });
  }

  try {
    await connectDb();

    const user = await User.findOne({ username: username });

    console.log('Searching for username:', username);
    console.log('User found:', user);

    return NextResponse.json({ exists: !!user });
  } catch (error) {
    console.error('Error during DB query:', error);
    return NextResponse.json({ exists: false });
  }
}

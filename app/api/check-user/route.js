import { NextResponse } from 'next/server';
import connectDb from '@/app/db/connectDb';
import User from '@/models/User';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username required' }, { status: 400 });
  }

  try {
    await connectDb();
    const user = await User.findOne({ username });

    return NextResponse.json({ exists: !!user });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

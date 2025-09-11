import NextAuth from 'next-auth'
import { NextRequest } from 'next/server';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NEXT_AUTH } from '@/app/lib/auth';

const handler = NextAuth(NEXT_AUTH)

export const GET = handler;
export const POST = handler; 
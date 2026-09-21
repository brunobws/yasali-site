import type { APIRoute } from 'astro';
import { getRobotsTxt } from '../lib/site-metadata';

export const GET = (() => new Response(getRobotsTxt(), {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
})) satisfies APIRoute;

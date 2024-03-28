import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchAllUsers } from "./lib/api";

export async function middleware(request: NextRequest) {
  let token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

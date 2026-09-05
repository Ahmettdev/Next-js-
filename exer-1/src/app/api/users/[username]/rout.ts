import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  // Waxaad helaysaa username-ka laga soo meeleeyay URL-ka
  const { username } = await params;

  // Soo celi data-da qaab JSON ah
  return NextResponse.json({
    username: username,
  });
}
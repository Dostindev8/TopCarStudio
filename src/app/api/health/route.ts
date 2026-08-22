import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Top Car Studio",
    status: "ok",
    channel: "whatsapp",
  });
}

import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode");
  try {
    const infos = await axios.get(
      `http://localhost:8765/bot-info?mode=${mode}`,
    );
    return NextResponse.json(infos.data);
  } catch (error) {
    const err = error as AxiosError;
    return NextResponse.json(
      {
        error: "Failed to fetch info from Bot",
        details: err?.response?.data || err?.message || error,
      },
      { status: 500 },
    );
  }
}

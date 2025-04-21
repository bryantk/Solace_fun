import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

// Should be DEV only protected via rewrite or such

export async function POST() {
  const records = await db.insert(advocates).values(advocateData).returning();

  return Response.json({ advocates: records });
}

// for debugging 'random' specialties
export async function GET() {
  return Response.json({ advocates: advocateData });
}
import { asc, gt, ilike } from "drizzle-orm";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const cursor = params.get("cursor");
  const pageSize = params.get("pageSize") || 200;

  console.log(pageSize);

  const data = await db
    .select()
    .from(advocates)
    .where(cursor ? gt(advocates.id, cursor) : undefined)
    .limit(parseInt(pageSize))
    .orderBy(asc(advocates.id)
  );

  return Response.json({ data });
}

export async function POST(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const query = params.get("search")
  const cursor = params.get("cursor");
  const pageSize = params.get("pageSize") || 200;

  console.log(pageSize);

  const data = await db
    .select()
    .from(advocates)
    .where(
      and(
        (cursor ? gt(advocates.id, cursor) : undefined),
        or(
          ilike(advocates.firstName, "%${query}%"),
          ilike(advocates.lastName, "%${query}%")
        )
      )
    )
    .limit(parseInt(pageSize))
    .orderBy(asc(advocates.id)
  );

  return Response.json({ data });
}

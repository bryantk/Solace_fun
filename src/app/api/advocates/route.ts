import { asc, gt, ilike, and, or, inArray } from "drizzle-orm";
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
  const postData = await request.json();
  console.log(postData);
  const query = postData.query.trim();
  const cursor = postData.cursor || 0;
  const pageSize = 200;

  if (!query) {
    return GET(request)
  }

  // if query is numbers, custom where for years experience and/or phone number
  // probably split on spaces for "john doe 1800helpsme"
  // Likely a library/3rd party solution for this to not re-invent the wheel

  const q = "%"+query+"%";
  const data = await db
    .select()
    .from(advocates)
    .where(
      //and(cursor ? gt(advocates.id, cursor) : undefined),
      or(
        ilike(advocates.firstName, q),
        ilike(advocates.lastName, q),
        ilike(advocates.city, q),
        ilike(advocates.degree, q)
      )
    )
    .limit(parseInt(pageSize))
    .orderBy(asc(advocates.id)
  );
  console.log(data.length);
  return Response.json({ data });
}

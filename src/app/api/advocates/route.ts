import db from '../../../db';

// has a default set of 10 to limit the number of results returned
// and an offset of 0 to start from the beginning
// naturally this can be extended to support pagination
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const query = searchParams.get('q') || '';

  const data = await db.query.advocates.findMany({
    where: (advocates, { ilike, or, sql }) =>
      query
        ? or(
            ilike(advocates.firstName, `%${query}%`),
            ilike(advocates.lastName, `%${query}%`),
            ilike(advocates.city, `%${query}%`),
            ilike(advocates.degree, `%${query}%`),
            // Search in specialties JSON array as text
            sql`${advocates.specialties}::text ILIKE ${`%${query}%`}`,
            // Search in yearsOfExperience as text
            sql`${advocates.yearsOfExperience}::text ILIKE ${`%${query}%`}`,
            // Search in phoneNumber as text
            sql`${advocates.phoneNumber}::text ILIKE ${`%${query}%`}`,
          )
        : undefined,
    limit,
    offset,
  });
  return Response.json({ data, limit, offset, query });
}

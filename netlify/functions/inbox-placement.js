import { imFetch, respond, handleOptions } from "./utils/api.js";

// GET /inbox-placement
// Query params:
//   ?limit=25        - number of results (default 25)
//   ?page=1          - page number
//   ?id=<test_id>    - get a specific placement test

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();

  try {
    const { id, limit = 25, page = 1 } = event.queryStringParameters || {};

    let path;
    if (id) {
      path = `/inbox-placement/${id}`;
    } else {
      path = `/inbox-placement?limit=${limit}&page=${page}`;
    }

    const result = await imFetch(path);
    return respond(result.status, result.data);
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

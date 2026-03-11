import { imFetch, respond, handleOptions } from "./utils/api.js";

// GET /reputation
// Query params:
//   ?type=ip|domain  - filter by type
//   ?id=<id>         - get specific reputation record

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();

  try {
    const { id, type, limit = 25, page = 1 } = event.queryStringParameters || {};

    let path;
    if (id) {
      path = `/reputation/${id}`;
    } else {
      path = `/reputation?limit=${limit}&page=${page}${type ? `&type=${type}` : ""}`;
    }

    const result = await imFetch(path);
    return respond(result.status, result.data);
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

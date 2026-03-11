import { imFetch, respond, handleOptions } from "./utils/api.js";

// GET /blocklist
// Query params:
//   ?id=<id>         - get specific blocklist record
//   ?limit=25
//   ?page=1

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();

  try {
    const { id, limit = 25, page = 1 } = event.queryStringParameters || {};

    const path = id ? `/blocklist/${id}` : `/blocklist?limit=${limit}&page=${page}`;
    const result = await imFetch(path);
    return respond(result.status, result.data);
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

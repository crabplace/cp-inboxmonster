import { imFetch, respond, handleOptions } from "./utils/api.js";

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();
  try {
    const { id, limit = 25, page = 1 } = event.queryStringParameters || {};
    const path = id ? `/campaigns/${id}` : `/campaigns?limit=${limit}&page=${page}`;
    const result = await imFetch(path);
    return respond(result.status, result.data);
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

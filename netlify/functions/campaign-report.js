import { imFetch, respond, handleOptions } from "./utils/api.js";

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();
  try {
    const { id } = event.queryStringParameters || {};
    if (!id) return respond(400, { success: false, message: "Missing required param: id" });
    const result = await imFetch(`/campaigns/${id}/report`);
    return respond(result.status, result.data);
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

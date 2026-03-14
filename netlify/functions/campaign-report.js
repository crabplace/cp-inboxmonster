import { imFetch, respond, handleOptions } from "./utils/api.js";

const CLIENT_UUID = process.env.INBOXMONSTER_CLIENT_UUID || "9f037388-4efc-4903-bd7a-b26cccd5d35e";

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();
  try {
    const { id } = event.queryStringParameters || {};
    if (!id) return respond(400, { success: false, message: "Missing required param: id" });
    const result = await imFetch(`/clients/${CLIENT_UUID}/campaigns/${id}/report`);
    return respond(result.status, result.data);
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

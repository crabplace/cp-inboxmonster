import { imFetch, respond, handleOptions } from "./utils/api.js";

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return handleOptions();

  try {
    const result = await imFetch("/clients");
    if (result.ok) {
      return respond(200, { success: true, message: "Connected to Inbox Monster API", data: result.data });
    } else {
      return respond(result.status, { success: false, message: "API error", data: result.data });
    }
  } catch (err) {
    return respond(500, { success: false, message: err.message });
  }
};

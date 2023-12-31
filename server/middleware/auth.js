import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { sendError } from "h3";
import { getUserById } from "../db/users";
export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/user/posts", "/api/posts","/api/posts/:id"];
  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    return pattern.match(event.node.req.url);
  });
  if (!isHandledByThisMiddleware) {
    return;
  }
  const token = event.node.req.headers["authorization"]?.split(" ")[1];
  const decoded = decodeAccessToken(token);
  if (!decoded) {
    return sendError(
      event,
      createError({
        statusMessage: "Unauthorized",
        statusCode: 401,
      })
    );
  }

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (error) {}
});

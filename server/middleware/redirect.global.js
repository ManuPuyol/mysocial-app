// middleware/redirect.js
export default defineEventHandler((event) => {
  const urlObj = getRequestURL(event);
  console.log(urlObj);
  //TODO: Remake this
  if (urlObj.hostname !== "localhost") {
    if (urlObj.protocol === "http:") {
      urlObj.protocol = "https:";
      sendRedirect(event, urlObj.href);
    }
  }
});

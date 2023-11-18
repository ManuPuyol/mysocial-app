// middleware/redirect.js
export default defineEventHandler((event) => {

  //TODO: Remake this
  if (urlObj.hostname !== "localhost") {
   
    if (urlObj.protocol === "http:") {
      urlObj.protocol = "https:";
      sendRedirect(event, urlObj.href);
    }
   
  } 
});

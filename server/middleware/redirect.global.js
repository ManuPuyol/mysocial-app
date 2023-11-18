// middleware/redirect.js
export default defineEventHandler((event) => {
  /* const urlObj = getRequestURL(event);
  console.log(urlObj);
  urlObj.host = 'www.' + urlObj.host;
  console.log(urlObj.host);
  //TODO: Remake this
  if (urlObj.hostname !== "localhost") {
   
    if (urlObj.protocol === "http:") {
      urlObj.protocol = "https:";
      sendRedirect(event, urlObj.href);
    }
    if(!urlObj.host.startsWith('www.')){
        console.log("holaa")
        urlObj.host = 'www.' + urlObj.host;
        sendRedirect(event, urlObj.href);
    }
  } */
});

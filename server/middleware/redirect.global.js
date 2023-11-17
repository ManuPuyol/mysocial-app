// middleware/redirect.js
export default defineEventHandler (async (event) =>{  
    const urlObj = getRequestURL(event)
    console.log(urlObj)
    if (urlObj.protocol === 'http') {
        urlObj.protocol = 'https'
        await sendRedirect(event, urlObj.href)
      }
  })
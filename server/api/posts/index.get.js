import { getPosts } from "~/server/db/posts"
import { postTransformer } from "~/server/transformers/post"
export default defineEventHandler(async(event)=> {

    const posts = await getPosts({
        include:{
            author:true,
            mediaFiles:true,
            replies:true
        }
    })

    return{
        posts: posts.map(postTransformer)
    }
})
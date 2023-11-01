import { getPosts } from "~/server/db/posts";
import { postTransformer } from "~/server/transformers/post";
export default defineEventHandler(async (event) => {
  const { query} = getQuery(event)

  let prismaQuery = {
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include:{
            author:true
        }
      },
      replyTo: {
        include:{
            author:true
        }
      },
    },
    orderBy:[
        {
            createdAt: 'desc'
        }
    ]
  }
  if(!!query){
    prismaQuery = {
      ...prismaQuery,
      where:{
        text: {
          contains: query
        }
      }
    }
  }
  const posts = await getPosts(prismaQuery);

  return {
    posts: posts.map(postTransformer),
  };
});

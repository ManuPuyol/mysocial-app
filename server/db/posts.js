import { prisma } from ".";

export const createPost = (postData) => {
   return prisma.post.create({
        data: postData
    })
}
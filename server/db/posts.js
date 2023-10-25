import { prisma } from ".";

export const createPost = (postData) => {
   return prisma.post.create({
        data: postData
    })
}
export const getPosts = (params = {}) => {
    return prisma.post.findMany({
        ...params
    })
}
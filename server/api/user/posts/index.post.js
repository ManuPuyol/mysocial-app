import formidable from "formidable";
import { createPost } from "~/server/db/posts";
import { postTransformer } from "~/server/transformers/post";
import { createMediaFile } from "~/server/db/mediaFiles";
export default defineEventHandler(async (event) => {
  const form = formidable({});
  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      console.log(event.node.req);
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
  const { fields, files } = response;
  console.log(fields);
  const userId = event.context?.auth?.user?.id;
  const postData = {
    text: fields.text[0],
    authorId: userId,
  };
  const post = await createPost(postData);
  const filePromises = Object.keys(files).map(async (key) => {
    return createMediaFile({
      url: "",
      providerPublicId: "random_id",
      userId: userId,
      postId: post.id,
    });
  });
  await Promise.all(filePromises);
  return {
    //post: postTransformer(post) ,
    files,
  };
});

import formidable from "formidable";
import { createPost } from "~/server/db/posts";
import { postTransformer } from "~/server/transformers/post";
import { createMediaFile } from "~/server/db/mediaFiles";
import { uploadCloudinary } from "~/server/utils/cloudinary";
export default defineEventHandler(async (event) => {
  const form = formidable({});
  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
  const { fields, files } = response;
  const userId = event.context?.auth?.user?.id;
  const postData = {
    text: fields.text[0],
    authorId: userId,
  };
  const post = await createPost(postData);
  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key][0];
    const cloudinaryResource = await uploadCloudinary(file.filepath)

    return createMediaFile({
      url: cloudinaryResource.secure_url,
      providerPublicId: cloudinaryResource.public_id,
      userId: userId,
      postId: post.id,
    });
  });
  await Promise.all(filePromises);
  return {
    post: postTransformer(post) ,
    //files,
  };
});

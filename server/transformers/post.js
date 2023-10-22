export const postTransformer = (post) => {
  return {
    id: post.id,
    text: post.text,
  };
};

export default () => {
  const usePostPostModal = () => useState("post_post_modal", () => false);

  const useReplyPost = () => useState("reply_post", () => null);

  const closePostPostModal = () => {
    const postPostModal = usePostPostModal();
    postPostModal.value = false;
  };

  const setReplyTo = (post) => {
    const replyPost = useReplyPost();
    replyPost.value = post;
  };

  const openPostPostModal = (post = null) => {
    const postPostModal = usePostPostModal();
    postPostModal.value = true;

    setReplyTo(post);
  };

  const postPost = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);
    form.append("replyTo", formData.replyTo);

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_file_" + index, mediaFile);
    });
    return useFetchApi("/api/user/posts", {
      method: "POST",
      body: form,
    });
  };

  const getHomePosts = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/posts", {
          method: "GET",
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
  const getPostById = (postId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi(`/api/posts/${postId}`);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
  return {
    postPost,
    getHomePosts,
    getPostById,
    closePostPostModal,
    usePostPostModal,
    openPostPostModal,
    useReplyPost
  };
};

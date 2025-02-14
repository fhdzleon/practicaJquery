export const buildArticle = (data) => {
  const { title, content, image } = data;

  const postTitle = $(`<h3 class='article-title'>${title}</h3>`);
  const postContent = $(`<p class='article-content'>${content}</p>`);

  const imageName = image.split("/").pop().split(".")[0];
  const postImage = $(
    `<img class='article-image' src='${image}' alt=' imagen de ${imageName}' />`
  );

  const newArticle = $("<article class='article'>");

  newArticle.append(postTitle, postContent, postImage);

  return newArticle;
};

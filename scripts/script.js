import { buildArticle } from "./helpers/buildArticle.js";
import { mockData } from "./data/mockData.js";

$(document).ready(function () {
  const buildArticles = () => {
    const containerArticles = $("#articles");
    containerArticles.empty();
    mockData.forEach((article) => {
      const renderArticle = buildArticle(article);
      containerArticles.append(renderArticle);
    });
  };

  buildArticles();

  $("#site-title").click(() => {
    alert("Estoy vivo");
  });

  const loadPosts = () => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      success: (data) => {
        console.log("Datos recibidos", data);
        $("#post").empty();
        data.forEach((post) => {
          $("#posts").append(`
            <article class="post">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </article>
            `);
        });
      },
      error: function (error) {
        console.error("Error en la peticion", error);
      },
    });
  };

  $("#triggerPosts").click(() => {
    loadPosts();
  });
});

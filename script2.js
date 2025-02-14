$(document).ready(function () {
  const loadUsers = () => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      success: (data) => {
        data.forEach((user) => {
          $("#fetchData").append(`
              <div class="user-card">
                <h3 class="userName">${user.name}</h3>
                <p class="userUsername">${user.username}</p>
                <p class="userWebsite">${user.website}</p>
              </div>
            `);
        });
      },
      error: (error) => {
        console.log("Error en la petición", error);
      },
    });
  };

  loadUsers();

  const filterUser = function () {
    const searchValue = $("#search").val().toLowerCase();

    $(".user-card").each(function () {
      const userName = $(this).find(".userName").text().toLowerCase();

      if (userName.indexOf(searchValue) !== -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  };

  $("#search").on("input", filterUser);
});

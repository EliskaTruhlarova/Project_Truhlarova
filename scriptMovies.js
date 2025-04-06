// MOVIES.HTML
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("movies");
  const wrapper = document.querySelector(".wrapper");

  select.addEventListener("change", function () {
    const selectedCategory = this.value;

    // Smazání předchozího obsahu
    wrapper.innerHTML = "";

    // Nový kontejner pro ikony
    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons");

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${selectedCategory}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const show = item.show;

          const movieDiv = document.createElement("div");
          movieDiv.classList.add("icon");

          const img = document.createElement("img");
          img.src = show.image
            ? show.image.medium
            : "https://via.placeholder.com/210x295?text=No+Image";
          img.alt = show.name;

          movieDiv.appendChild(img);
          iconsContainer.appendChild(movieDiv);
        });

        wrapper.appendChild(iconsContainer);
      });
  });
});

console.log('favorite');

const createFavoriteCocktail = (cocktailName) => {
  const sectionFavorite = document.querySelector(".js_favoriteSection");
  const favoriteUL = document.querySelectort(".js_ulFavorite");

  const favoriteLi = document.createElement("li");
  sectionFavorite.appendChild(favoriteUL);
  favoriteUL.appendChild(favoriteLi);

  const favoriteArticle = document.createElement("article");
  const favoriteImg = document.createElement("img");
  const favoriteName = document.createElement("h2");
  favoriteName.textContent = cocktailName;
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add('fa fa-times-circle');

  favoriteLi.appendChild(favoriteArticle);
  favoriteLi.appendChild(favoriteImg);
  favoriteLi.appendChild(favoriteName);
  favoriteLi.appendChild(deleteIcon);
};



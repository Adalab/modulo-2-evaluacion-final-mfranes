console.log('favorite');

const createFavoriteCocktail = (cocktailName, imageUrl) => {
  const sectionFavorite = document.querySelector(".js_favoriteSection");
  const favoriteUL = document.querySelector(".js_ulFavorite");

  const favoriteLi = document.createElement("li");
  sectionFavorite.appendChild(favoriteUL);
  favoriteUL.appendChild(favoriteLi);

  const favoriteArticle = document.createElement("article");
  favoriteArticle.classList.add('favoriteSection__ul__article');
  const favoriteImg = document.createElement("img");
  favoriteImg.src = imageUrl;
  favoriteImg.classList.add('favoriteSection__ul__cocktailThumbnail');
  const favoriteName = document.createElement("h2");
  favoriteName.textContent = cocktailName;
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add('fa');
  deleteIcon.classList.add('fa-times-circle');

  favoriteLi.appendChild(favoriteArticle);
  favoriteLi.appendChild(favoriteImg);
  favoriteLi.appendChild(favoriteName);
  favoriteLi.appendChild(deleteIcon);
};



console.log('favorite');

const createFavoriteCocktail = (cocktailId, cocktailName, imageUrl) => {
  const sectionFavorite = document.querySelector(".js_favoriteSection");
  const favoriteUL = document.querySelector(".js_ulFavorite");

  const favoriteLi = document.createElement("li");
  favoriteLi.id = 'favorite_' + cocktailId;
  favoriteLi.addEventListener('click', handleClickDeleteFavorite);  
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


const handleClickDeleteFavorite = (event) => {
  const domCocktailId = event.currentTarget.id;
  deleteFavoriteCocktail(domCocktailId);
};


const deleteFavoriteCocktail = (domCocktailId) => {
  // console.log('deleteFavoriteCocktail: ' + domCocktailId);
  const separatedDomCocktailId = domCocktailId.split('_'); // [favorite, 123123]
  const cocktailId = separatedDomCocktailId[1];

  deleteFavoriteCocktailFromArray(cocktailId);

  deleteFavoriteCocktaillFromLocalStorage(cocktailId);

  deleteFavoriteCocktailFromDom(domCocktailId);
  unPaintCocktailFromDom(cocktailId);
}


const deleteFavoriteCocktailFromArray = (cocktailId) => {
  const resultFavoriteCocktails = favoriteCocktails.filter(cocktail => cocktail.id !== cocktailId);
  favoriteCocktails = resultFavoriteCocktails;
}


const deleteFavoriteCocktaillFromLocalStorage = (cocktailId) => {
  const favoriteCocktailsFromStorage = JSON.parse(localStorage.getItem("dataFavorite"));
  const resultFavoriteCocktailsFromStorage = favoriteCocktailsFromStorage.filter(cocktail => cocktail.id !== cocktailId);
  localStorage.setItem('dataFavorite', JSON.stringify(resultFavoriteCocktailsFromStorage));
}


const deleteFavoriteCocktailFromDom = (cocktailId) => {
  const favoriteUL = document.querySelector(".js_ulFavorite");
  const favoriteCocktailToBeRemoved = document.querySelector(`#${cocktailId}`);
  favoriteUL.removeChild(favoriteCocktailToBeRemoved);
}


const cocktailIsNotAlreadyFavorite = (cocktailId) => {
  let cocktailFound = favoriteCocktails.find(cocktail => cocktail.id === cocktailId);

  if (cocktailFound === undefined) {
    return true;
  } else {
    return false;
  }
}


const addCocktailToFavoriteArray = (cocktailId) => {
  const cocktailFound = cocktails.find((cocktail) => cocktail.id === cocktailId);

  favoriteCocktails.push({
    id: cocktailFound.id,
    name: cocktailFound.name,
    imageUrl: cocktailFound.imageUrl,
  });
};


const createFavoriteCocktailsFromArray = () => {
  for (const favoriteCocktail of favoriteCocktails) {
    createFavoriteCocktailFromArray(favoriteCocktail.id);
  }
}


const createFavoriteCocktailFromArray = (cocktailId) => {
  const cocktailFound = favoriteCocktails.find(cocktail => cocktail.id === cocktailId);
  createFavoriteCocktail(cocktailFound.id, cocktailFound.name, cocktailFound.imageUrl);
}


const storeFavoriteCocktailsArray = ()=> {
  localStorage.setItem('dataFavorite', JSON.stringify(favoriteCocktails));
}


const loadFavoriteCocktailsFromStorage = () => {
  const favoriteCocktailsFromStorage = JSON.parse(localStorage.getItem("dataFavorite"));
  //console.log(favoriteCocktailsFromStorage);

  if (favoriteCocktailsFromStorage !== null) {
    favoriteCocktails = favoriteCocktailsFromStorage;
    //console.log(favoriteCocktails);
    createFavoriteCocktailsFromArray();
  }
};



loadFavoriteCocktailsFromStorage();


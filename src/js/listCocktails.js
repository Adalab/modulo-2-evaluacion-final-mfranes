console.log('list');

const createArticle = (imageUrl, cocktaillName) => {
    const listSection = document.querySelector(".js_listSection");
    listSection.classList.add('s_listSection');
    const ulListCocktail = document.querySelector(".jsCocktailUl");

    ulListCocktail.classList.add('s_listSection__ul');
    const listElement = document.createElement("li");
    listSection.appendChild(ulListCocktail);
    ulListCocktail.appendChild(listElement);
  
    const anArticle = document.createElement("article");
    const cocktailImage = document.createElement("img");
    cocktailImage.src = imageUrl;
    cocktailImage.classList.add('s_listSection__cocktailThumbnail');
    anArticle.appendChild(cocktailImage);
    const cocktailTitle = document.createElement("h2");
    cocktailTitle.textContent = cocktaillName;
    anArticle.appendChild(cocktailTitle);
    listElement.appendChild(anArticle);
  };
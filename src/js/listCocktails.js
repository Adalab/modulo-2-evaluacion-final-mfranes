console.log('list');

const createArticle = (imageUrl, cocktaillName) => {
    const listSection = document.querySelector(".js_listSection");
  
    const ulListCocktail = document.createElement("ul");
    ulListCocktail.classList.add('js_listSection__ul');
    const listElement = document.createElement("li");
    listSection.appendChild(ulListCocktail);
    ulListCocktail.appendChild(listElement);
  
    const anArticle = document.createElement("article");
    const cocktailImage = document.createElement("img");
    cocktailImage.src = imageUrl;
    cocktailImage.classList.add('js_listSection__cocktailThumbnail');
    anArticle.appendChild(cocktailImage);
    const cocktailTitle = document.createElement("h2");
    cocktailTitle.textContent = cocktaillName;
    anArticle.appendChild(cocktailTitle);
    listElement.appendChild(anArticle);
  };
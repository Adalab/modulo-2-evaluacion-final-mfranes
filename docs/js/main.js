let m=[],l=[];console.log("search");const p=document.querySelector(".js_btnSearch"),S=document.querySelector(".js_inputSearch"),F=document.querySelector(".js_resetBtn"),g=t=>{console.log("handleClickSearch"),t.preventDefault();const e=S.value;h(),k(e)};p.addEventListener("click",g);const _=()=>{h()};F.addEventListener("click",_);const k=t=>{const e=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`;fetch(e,{method:"GET"}).then(o=>o.json()).then(o=>{for(const c of o.drinks){const r=c.strDrinkThumb,a=c.strDrink,n=c.idDrink;B(r,a,n)}w(),f(),v()})},y=()=>{k("margarita")};console.log("favorite");const I=(t,e,o)=>{const c=document.querySelector(".js_favoriteSection"),r=document.querySelector(".js_ulFavorite"),a=document.createElement("li");a.id="favorite_"+t,a.addEventListener("click",L),c.appendChild(r),r.appendChild(a);const n=document.createElement("article");n.classList.add("favoriteSection__ul__article");const i=document.createElement("img");i.src=o,i.classList.add("favoriteSection__ul__cocktailThumbnail");const s=document.createElement("h2");s.textContent=e;const d=document.createElement("i");d.classList.add("fa"),d.classList.add("fa-times-circle"),a.appendChild(n),a.appendChild(i),a.appendChild(s),a.appendChild(d)},L=t=>{const e=t.currentTarget.id;D(e)},D=t=>{const o=t.split("_")[1];A(o),E(o),q(t),$(o)},A=t=>{l=l.filter(o=>o.id!==t)},E=t=>{const o=JSON.parse(localStorage.getItem("dataFavorite")).filter(c=>c.id!==t);localStorage.setItem("dataFavorite",JSON.stringify(o))},q=t=>{const e=document.querySelector(".js_ulFavorite"),o=document.querySelector(`#${t}`);e.removeChild(o)},N=t=>l.find(o=>o.id===t)===void 0,T=t=>{const e=m.find(o=>o.id===t);l.push({id:e.id,name:e.name,imageUrl:e.imageUrl})},j=()=>{for(const t of l)u(t.id)},u=t=>{const e=l.find(o=>o.id===t);I(e.id,e.name,e.imageUrl)},U=()=>{localStorage.setItem("dataFavorite",JSON.stringify(l))},b=()=>{const t=JSON.parse(localStorage.getItem("dataFavorite"));t!==null&&(l=t,j())};console.log("list");const J=(t,e,o)=>{let c=t;t===null&&(c="https://via.placeholder.com/150x150/ffffff/666666/?text=no%20image");const r=document.querySelector(".js_listSection");r.classList.add("s_listSection");const a=document.querySelector(".jsCocktailUl");a.classList.add("s_listSection__ul");const n=document.createElement("li");r.appendChild(a),a.appendChild(n);const i=document.createElement("article");i.id=`cocktail_${o}`,i.addEventListener("click",O);const s=document.createElement("img");s.src=c,s.classList.add("s_listSection__cocktailThumbnail"),i.appendChild(s);const d=document.createElement("h2");d.textContent=e,i.appendChild(d),n.appendChild(i)},O=t=>{t.preventDefault();const e=t.currentTarget.id,c=e.split("_")[1];N(c)&&(T(c),U(),u(c),C(`#${e}`))},C=t=>{const e=document.querySelector(t);console.log("paintCocktailFromDom - cocktail: "+e),e!==null&&e.classList.add("selectedCocktail")},$=t=>{const e=`#cocktail_${t}`,o=document.querySelector(e);o!==null&&o.classList.remove("selectedCocktail")},w=()=>{localStorage.setItem("dataNormal",JSON.stringify(m))},f=()=>{for(const t of m)J(t.imageUrl,t.name,t.id)},v=()=>{for(const t of l){const e=`#cocktail_${t.id}`;console.log("paintCocktailsThatAreFavorites - cocktailIdDom: "+e),C(e)}},x=()=>{const t=JSON.parse(localStorage.getItem("dataNormal"));t!==null&&(m=t,f(),v())},B=(t,e,o)=>{m.push({id:o,name:e,imageUrl:t})},h=()=>{const t=document.querySelector(".jsCocktailUl");for(;t.firstChild;)t.removeChild(t.firstChild);m=[],localStorage.removeItem("dataNormal")};b();x();y();
//# sourceMappingURL=main.js.map

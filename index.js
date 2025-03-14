import{a as u,i as a,S as d}from"./assets/vendor-CsZapx_M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const F=o=>u.get("https://pixabay.com/api/",{params:{key:"49241808-b19f3ed80577ae196aabc5d53",image_type:"photo",orientation:"horizontal",safesearch:"true",q:o}}).then(t=>t.data.hits),p=document.querySelector(".gallery"),n=[],f=o=>{o.forEach(t=>{const{webformatURL:l,largeImageURL:i,tags:e,likes:r,views:s,comments:m,downloads:A}=t;return n.push(`<li class="gallery-item">
         <a class="gallery-link" href="${i}">
           <img
             class="gallery-image"
             src="${l}"
             alt="${e}"
           />
           <ul class="desc">
               <li class="descel">likes: ${r}</li>
               <li class="descel">views: ${s}</li>
               <li class="descel">comments: ${m}</li>
               <li class="descel">downloads: ${A}</li>
             </ul>
         </a>
       </li>`)}),p.insertAdjacentHTML("beforeend",n.join(""))},c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",h=document.querySelector(".form"),g=document.querySelector("[name=search-text]"),y=document.querySelector(".gallery");h.addEventListener("submit",o=>{if(o.preventDefault(),y.innerHTML="",g.value.trim().length===0){a.show({title:"Error",message:"Please enter your request",color:"#EF4040",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"24px",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"24px",iconUrl:c,iconColor:"#FFFFFF",theme:"dark",position:"topRight"});return}F(g.value).then(t=>{if(t.length===0){a.show({title:"😢",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"24px",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"24px",iconUrl:c,iconColor:"#FFFFFF",theme:"dark",position:"topRight"});return}console.log(t),f(t),w.refresh()}).catch(t=>{console.log(t)})});let w=new d(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map

const gallery = document.querySelector('.gallery');
const imgCollection = [];

 const render = hits =>{
    hits.forEach(image => {
        const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = image;
        return  imgCollection.push( `<li class="gallery-item">
         <a class="gallery-link" href="${largeImageURL}">
           <img
             class="gallery-image"
             src="${webformatURL}"
             alt="${tags}"
           />
           <ul class="desc">
               <li class="descel">likes: ${likes}</li>
               <li class="descel">views: ${views}</li>
               <li class="descel">comments: ${comments}</li>
               <li class="descel">downloads: ${downloads}</li>
             </ul>
         </a>
       </li>`);
       });
       gallery.insertAdjacentHTML("beforeend", imgCollection.join(""));
}
export default render
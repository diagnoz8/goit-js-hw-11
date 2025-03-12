import axios from 'axios';
// const errorMsg = 'Sorry, there are no images matching your search query. Please try again!';
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.

const getImgs = userRequest =>{
 return axios.get('https://pixabay.com/api/',{params:{
    key: '49241808-b19f3ed80577ae196aabc5d53',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    q: userRequest,
}} )


.then(res => console.log(res));
}
 
 export default getImgs;

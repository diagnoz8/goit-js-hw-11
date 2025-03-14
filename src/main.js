import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import getImgs from'./js/pixabay-api'
import render from './js/render-functions'
import axios from 'axios';
import errorIcon from '../src/img/error.png'; 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.form');
const searchText = document.querySelector('[name=search-text]');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


searchForm.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    gallery.innerHTML =""; 

 
 //                 -- por si no han teclado request --
 if (searchText.value.trim().length === 0) {
    loader.remove();
    iziToast.show({
        title: 'Error',
        message: 'Please enter your request',
        color: '#EF4040',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        messageColor: '#FFFFFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: errorIcon,
        iconColor: '#FFFFFF',
        theme: 'dark',
        position: 'topRight', 
    });
return
 }
//
//                       -- buscamos --
getImgs(searchText.value)
// 

.then(hits => { 
    loader.remove();
//               --revisamos si hemos encontrado por lo menos 1 con el request que ha echo user --
    if (hits.length === 0) {
        iziToast.show({
        title: '😢',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: '#EF4040',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        messageColor: '#FFFFFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: errorIcon,
        iconColor: '#FFFFFF',
        theme: 'dark',
        position: 'topRight', 
        })
        return
    }
// 
    render(hits);
    lightbox.refresh();
})

.catch(error => { 
        iziToast.show({
        title: '😢',
        message: error,
        color: '#EF4040',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        titleLineHeight: '24px',
        messageColor: '#FFFFFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: errorIcon,
        iconColor: '#FFFFFF',
        theme: 'dark',
        position: 'topRight',  
        }); 
    loader.remove();

});



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

})
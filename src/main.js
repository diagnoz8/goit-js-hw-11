import iziToast from 'izitoast';
import getImgs from'./js/pixabay-api'
// // import from './js/render-functions'
import axios from 'axios';
import errorIcon from '../src/img/error.png'; 
const searchForm = document.querySelector('.form');
const searchText = document.querySelector('[name=search-text]');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', (evt)=>{
 evt.preventDefault();
 //                 -- por si no han teclado request --
 if (searchText.value.trim().length === 0) {
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

 }
//
getImgs(searchText.value);



})

const markup = () => {
`
`
}
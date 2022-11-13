require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill'; //это файл установился в node modules
import tabs from './modules/tabs';
import timer from './modules/timer';
import slides from './modules/slides';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import calculator from './modules/calculator';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-12-31');
    slides({
        container: '.offer__slider',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    cards();
    calculator();
});

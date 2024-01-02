"use strict";

const ads = document.querySelector('.ads');
ads.remove();

const cart = document.querySelectorAll('.item');
console.log(cart);

console.log(cart[0]);
console.log(cart[1]);
console.log(cart[2]);
console.log(cart[3]);
console.log(cart[4]);
console.log(cart[5]);

const propsLists = document.querySelectorAll('.props__list');
console.log(propsLists);

cart[1].after(cart[0]);
cart[1].after(cart[2]);
cart[2].after(cart[3]);

const itemTitles = document.querySelectorAll('.item__title');
console.log(itemTitles);

const propsItems = document.querySelectorAll('.props__item');
console.log(propsItems);

const cloneElem = propsItems[4].cloneNode(true);

const newElem = propsLists[3].cloneNode(true);
console.log(newElem);

const newElem2 = propsLists[4].cloneNode(true);
console.log(newElem2);

propsLists[3].replaceWith(newElem2);
propsLists[4].replaceWith(newElem);

propsItems[25].after(propsItems[9]);

propsLists[2].append(propsItems[43]);
propsLists[2].append(propsItems[44]);

const newHeader1 = itemTitles[0].cloneNode(true);
console.log(newHeader1);

const newHeader2 = itemTitles[3].cloneNode(true);
console.log(newHeader1);

const newHeader3 = itemTitles[4].cloneNode(true);
console.log(newHeader1);

itemTitles[0].replaceWith(newHeader2);

itemTitles[3].replaceWith(newHeader3);

itemTitles[4].replaceWith(newHeader1);
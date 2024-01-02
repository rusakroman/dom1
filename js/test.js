"use strict";

const items = document.querySelector('.items');
console.log(items);

const item = document.querySelectorAll('.item');
console.log(item);

const propsItems = document.querySelectorAll('.props__item');
console.log(propsItems);

const itemFour = document.querySelector('.item_four');
console.log(itemFour);

const propsItemsFour = itemFour.querySelectorAll('.props__item');
console.log(propsItemsFour);

const itemOne = document.querySelector('.item_one');
console.log(itemOne);

const propsItemsOne = itemOne.querySelectorAll('.props__item');
console.log(propsItemsOne);

const itemTwo = document.querySelector('.item_two');
console.log(itemTwo);

const propsItemsTwo = itemTwo.querySelectorAll('.props__item');
console.log(propsItemsTwo);

const itemTitleTwo = itemTwo.querySelector('.item__title');
console.log(itemTitleTwo);

const itemThree = document.querySelector('.item_three');
console.log(itemThree);

const propsItemsThree = itemThree.querySelectorAll('.props__item');
console.log(propsItemsThree);

const itemFive = document.querySelector('.item_five');
console.log(itemFive);

const propsItemsFive = itemFive.querySelectorAll('.props__item');
console.log(propsItemsFive);

const itemTitleFive = itemFive.querySelector('.item__title');
console.log(itemTitleFive);

const itemSix = document.querySelector('.item_six');
console.log(itemSix);

const propsItemsSix = itemSix.querySelectorAll('.props__item');
console.log(propsItemsSix);

const itemTitleSix = itemSix.querySelectorAll('.item__title');
console.log(itemTitleSix);


const propsList = document.querySelectorAll('.props__list');
console.log(propsList);

items.prepend(itemOne);
itemOne.after(itemTwo);
itemTwo.after(itemThree);

const cloneElem = propsItemsOne[4].cloneNode(true);
console.log(cloneElem);

const cloneElem2 = propsItemsOne[5].cloneNode(true);
console.log(cloneElem2);

// propsList[2].before(cloneElem)


itemTitleTwo.textContent = 'Область видимости и замыкание';

itemTitleFive.textContent = 'Асинхронная обработка и оптимизация';

itemTitleSix.textContent = 'ES6 и не только';
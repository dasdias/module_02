const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const ads = document.querySelector('.ads');
const propsList = document.querySelector('.item_two .props__list');
const propsItem = document.querySelectorAll('.item_two .props__item');
const itemFour = document.querySelectorAll('.item_four .props__item');
const itemSix = document.querySelectorAll('.item_six .props__item');
const itemThreeContent = document.querySelector('.item_three .content');
const itemThreeList = document.querySelector('.item_three .props__list');
const itemFiveContent = document.querySelector('.item_five .content');
const itemFiveList = document.querySelector('.item_five .props__list');

ads.remove();

items.prepend(item[1]);
item[1].after(item[2]);
item[2].after(item[3]);

itemFour[2].after(propsItem[3]);

propsList.append(itemSix[8]);
propsList.append(itemSix[9]);

itemThreeContent.append(itemFiveList)
itemFiveContent.append(itemThreeList)
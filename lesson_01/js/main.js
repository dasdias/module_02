const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');

items.prepend(item[1]);
items.append(item[2]);

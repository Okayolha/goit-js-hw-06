const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
const items = document.querySelectorAll('.item');
items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${count}`);
});

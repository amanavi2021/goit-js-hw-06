const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach((category)=> {
    const categoryName = category.querySelector('h2').textContent;
    const categoryNumberOfElements = category.querySelectorAll('li').length;
    console.log('Category:', categoryName);
    console.log('Elements:', categoryNumberOfElements);
});


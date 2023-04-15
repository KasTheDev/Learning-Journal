const viewMoreBtn = document.getElementById('view-more-btn')
const hiddenArticlesOne = document.getElementById('hidden-articles-1')
const hiddenArticlesTwo = document.getElementById('hidden-articles-2')
const hiddenArticlesThree = document.getElementById('hidden-articles-3')
const viewLessBtn = document.getElementById('view-less-btn')

viewMoreBtn.addEventListener('click', function(){
    viewMoreBtn.style.display = 'none'
    hiddenArticlesOne.style.display = 'grid'
    hiddenArticlesTwo.style.display = 'grid'
    hiddenArticlesThree.style.display = 'grid'
    viewLessBtn.style.display = 'block'
})

viewLessBtn.addEventListener('click', function(){
    viewMoreBtn.style.display = 'block'
    hiddenArticlesOne.style.display = 'none'
    hiddenArticlesTwo.style.display = 'none'
    hiddenArticlesThree.style.display = 'none'
    viewLessBtn.style.display = 'none'
})
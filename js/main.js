document.querySelector('.next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(lists[0]);
}
document.querySelector('.prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(lists[lists.length - 1]);
}

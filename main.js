const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove',mouseMovendo);

function mouseMovendo(e){
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}
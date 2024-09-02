let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
}

function attachHeaderScrollEvent(domElement) {
    var domElement = "navBar"
    window.onscroll = function () { attachEvent(domElement) };
}
function attachEvent(domElement) {

    var header = document.getElementById(domElement);
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

exports.setHeaderScrollEvent = attachHeaderScrollEvent;
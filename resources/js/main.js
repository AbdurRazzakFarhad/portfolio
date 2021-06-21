$(function () {
    $('.selector').animatedHeadline({
        animationType: 'clip'
    });
})

function openMenu() {
    document.getElementById('full-width-navbar').style.width = "100%"
}

function closeMenu() {
    document.getElementById('full-width-navbar').style.width = "0%"
}
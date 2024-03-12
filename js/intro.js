//resource link: https://www.w3schools.com/jquery/default.asp


$("#info").hide();
$("#infobackground").hide();

$("#infobutton").click(function(){
    $("#info").toggle();
    $("#infobackground").toggle();
})

var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() { 

    divs.eq(i).fadeIn(400)
              .delay(1500)
              .fadeOut(400, cycle);

    i = ++i % divs.length;

})();


$(".bodytypeoption").click(function (e) {
    e.preventDefault();
    $(".manequin").removeClass("active");
    var manequin_id = $(this).attr("href");
    $(manequin_id).addClass("active");
});

$(".category").click(function (e) {
    e.preventDefault();
    $(".clothing").removeClass("active");
    var clothing_id = $(this).attr("href");
    $(clothing_id).addClass("active");
});

$(".shirt").click(function (e) {
    e.preventDefault();
    $(".manequinshirt").removeClass("active");
    $(".manequindress").removeClass("active");
    var manequinshirt_id = $(this).attr("href");
    $(manequinshirt_id).addClass("active");
});

$(".dress").click(function (e) {
    e.preventDefault();
    $(".manequindress").removeClass("active");
    $(".manequinshirt").removeClass("active");
    $(".manequinpants").removeClass("active");
    var manequindress_id = $(this).attr("href");
    $(manequindress_id).addClass("active");
});

$(".jacket").click(function (e) {
    e.preventDefault();
    $(".manequinjacket").removeClass("active");
    var manequinjacket_id = $(this).attr("href");
    $(manequinjacket_id).addClass("active");
});

$(".pants").click(function (e) {
    e.preventDefault();
    $(".manequinpants").removeClass("active");
    $(".manequindress").removeClass("active");
    var manequinpants_id = $(this).attr("href");
    $(manequinpants_id).addClass("active");
});

$(".shirtnone").click(function (e) {
    e.preventDefault();
    $(".manequinshirt").removeClass("active");
});

$(".dressnone").click(function (e) {
    e.preventDefault();
    $(".manequindress").removeClass("active");
});

$(".jacketnone").click(function (e) {
    e.preventDefault();
    $(".manequinjacket").removeClass("active");
});

$(".pantsnone").click(function (e) {
    e.preventDefault();
    $(".manequinpants").removeClass("active");
});
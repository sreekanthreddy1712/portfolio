$(document).ready(function () {
    $(".product-title").click(function () {
        $(".product-issues").slideUp(500);
        $(this).next().slideDown(500);
        $(".product-title >.outer-circle-green").addClass("outer-circle-orange");
        $(this).children().eq(0).removeClass('outer-circle-orange');
    });
});
//sample comment .....
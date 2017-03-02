function goToByScroll(id){
      // Reove "link" from the ID
    id = id.replace("-link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top -220},
        'slow');
}
$("#mobile-menu > ul > li > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));
    $("#mobile-menu").removeClass("active");
});
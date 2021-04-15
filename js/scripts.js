var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*$(".cpc-table--body-rating span").click(function() {
  if ($(this).css("opacity") == 1) {
    $(this).css("opacity", "0.5");
    $(this)
      .nextAll()
      .css("opacity", "0.5");
  } else {
    $(this).css("opacity", "1");
    $(this)
      .prevAll()
      .css("opacity", "1");
  }
});

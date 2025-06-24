$('.side-nav').click(function(){
  if ($('.side-nav.active').length > 0) {
    $('.side-nav.active').removeClass('active')
  }
  $(this).addClass('active');
});

// collapse by default if page has multiple entries
if($('.show').length !== 1 ) {
  $('.show').collapse();
} else{
  expandbtn = document.querySelector('#expand-btn')
  expandbtn.classList.remove("btn-expand-text");
  expandbtn.classList.add("btn-collapse-text");
}

// Coming from search result page click
if(window.location.hash !== "") {
  // Somehow collapse is not working sync and calling show directly after
  // yields no effect and there is no callback when it is ready
  setTimeout(() => {
    // Folds out the answer manually
    $(window.location.hash).collapse('show')
    // Avoids the answer being hidden by the floating header
    window.scrollTo(0, $(window.location.hash).parent().offset().top)
  }, 500)
}

// expand all/collapse all button
document.querySelector('#expand-btn').addEventListener("click", function () {
  expandable = document.querySelectorAll(".expand");
  if (this.classList.contains("btn-expand-text")) {
    expandable.forEach(function (item) {
        $(item).collapse('show');
    });
    this.classList.remove("btn-expand-text");
    this.classList.add("btn-collapse-text");
  } else {
    expandable.forEach(function (item) {
        $(item).collapse('hide');
    });
    this.classList.remove("btn-collapse-text");
    this.classList.add("btn-expand-text");
  }
});

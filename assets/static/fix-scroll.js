// Coming from search result page click
if(window.location.hash !== "") {
  // Somehow collapse is not working sync and calling show directly after
  // yields no effect and there is no callback when it is ready
  setTimeout(() => {
    // Folds out the answer manually
    $(window.location.hash).collapse('show')
    // Avoids the answer being hidden by the floating header
    window.scrollTo(0, $(window.location.hash).position().top)
  }, 500)
}

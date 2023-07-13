var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").classList.add("visible");
  } else {
    document.getElementById("header").classList.remove("visible");
  }

  prevScrollPos = currentScrollPos;
};

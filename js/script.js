/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);

  window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
  });
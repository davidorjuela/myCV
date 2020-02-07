document.querySelectorAll('.nav').forEach(function(navIcon) {
    navIcon.addEventListener("click", function(e){
        document.querySelectorAll('nav>div').forEach(function(navItem) {
            navItem.style.display=="inline-flex"?navItem.style.display="none":navItem.style.display="inline-flex";
        });
    });
  });
  
  

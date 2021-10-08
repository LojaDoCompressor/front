import '../scss/desktop-content.scss';


var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#filtro");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});

var btn = document.querySelector("#btnselecionar");
btn.addEventListener("click", function() {
    var div = document.querySelector("#selecao");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});
import '../scss/desktop-content.scss';
import '../scss/vendas.scss';

var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#info-caract-id");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});
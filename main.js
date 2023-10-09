
  
  let tieneBorde = false;

  function agregarBorde() {
    tieneBorde = true;
    const imagen = document.querySelector("img.lajumnet1");
    imagen.style.border = "2px solid red";
  }
  
  function quitarBorde() {
    tieneBorde = false;
    const imagen = document.querySelector("img.lajumnet1");
    imagen.style.border = "";
  }
  
  document.querySelector("img.lajumnet1").addEventListener("click", function() {
    if (tieneBorde) {
      quitarBorde();
    } else {
      agregarBorde();
    }
  });
  
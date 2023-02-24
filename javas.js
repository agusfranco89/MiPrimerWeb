//efecto maquina de escribir portada//

let text = document.getElementById("javas");
let str = text.innerHTML;

text.innerHTML = "";

let velocidad = 100;
let i = 0;

function maqEscribir() {
    if(i < str.length) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(maqEscribir, velocidad);
    }
}
setTimeout(maqEscribir, velocidad);

//efecto a los titulos de cambio de color//

window.addEventListener('mouseover', function(evt) {
    if (evt.target.classList.contains('tit')) {
      evt.target.style.color = '#95CDEF';
     }
  });
  
 
  window.addEventListener('mouseout', function(evt) { 
    if (evt.target.classList.contains('tit')) {
      evt.target.style.color = 'rgb(46, 65, 121)';
    }
  });

 

//efecto modo oscuro//

document.getElementById('id-sun').onclick = function(){
  document.getElementById('page').classList.remove('dark-mode')
  document.getElementById('id-moon').classList.remove('active')
  this.classList.add('active')
}

document.getElementById('id-moon').onclick = function(){
  document.getElementById('page').classList.add('dark-mode')
  document.getElementById('id-sun').classList.remove('active')
  this.classList.add('active')
}




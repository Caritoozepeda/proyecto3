
/*.....................*validacion*.....................*/


function validarEmail() {


     /* var mail=document.formulario.mail.value;*/
      var mail= document.getElementById('mail').value;
      
          var exReg=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
          var esValido=exReg.test(mail);

         if (!esValido){
           alert("La dirección de email es incorrecta");
           return false;
           document.formulario.mail.focus();
           
         } return esValido;
        }



function validar(){   



var b=false;
//paaso 1
    if (document.formulario.nombre.value.trim()=="" || (!isNaN(document.formulario.nombre.value.trim()))) 
    {
        alert("Ingrese un nombre valido");
        return false;
        document.formulario.nombre.focus();
        b=true;

    }else{ //paso 2
           if (document.getElementById('mail').value=="") {
                alert('Por favor, ingrese un email');
                return false;
                b=true;

            }else{
              //paso 3
                    if(document.getElementById('mail').value!=""){

                     validarEmail();

                          //paso 4

                          if(validarEmail()){
                            //paso 5
                              if (document.formulario.menssage.value.trim()=="") {
                              alert('Por favor, ingrese un comentario');
                              return false ; document.formulario.menssage.focus();  
                              b=true;
                              }else{
                                var boton =document.formulario.enviar.value;
                              boton.disabled = false;

                                      if(confirm("Desea enviar los datos"))

                                      {
                                      alert("Gracias por enviar el formulario");

                                      }
                                      else
                              {return false;
                                document.formulario.reset();

                              } 
                          }document.formulario.reset();
                           }
                         }   
                      }
                    }
                }


 
 


//Imagenes 
//   var indice = 1;
// mostrarFoto(indice);

// // Next/previous controls
// function navegarFoto(n) {
//   mostrarFoto(indice += n);
// }

// // Thumbnail image controls
// function fotoActual(n) {
//   mostrarFoto(indice = n);
// }

// function mostrarFoto(n) {
//   var i;
//   var fotos = document.getElementsByClassName("foto");
//   var circulos = document.getElementsByClassName("circulo");
//   if (n > fotos.length) {indice = 1}
//   if (n < 1) {indice = fotos.length}
//   for (i = 0; i < fotos.length; i++) {
//       fotos[i].style.display = "none";
//   }
//   for (i = 0; i < circulos.length; i++) {
//       circulos[i].className = circulos[i].className.replace(" active", "");
//   }
//   fotos[indice-1].style.display = "block";
//   circulos[indice-1].className += " active";
// }
/* menu*/

/*let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});*/

// Add class "active"

/*let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});*/


//Scroll Efect

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.ir-arriba');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});
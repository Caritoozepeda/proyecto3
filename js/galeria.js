 window.onload = function () {
            // Variables
            const IMAGENES = [
                '../proyecto3/img/amsterdam-paises-bajos.jpg',
                '../proyecto3/img/suiza.jpg',
                '../proyecto3/img/islas-griegas.jpg',
                '../proyecto3/img/roma-italia.jpg',
                '../proyecto3/img/tahiti-francia.jpg',
                '../proyecto3/img/bora-bora.jpg',
                '../proyecto3/img/tai.jpg',
                '../proyecto3/img/lugares-para-visitar-en-Canada.jpg',
                '../proyecto3/img/slider1.jpg',
                '../proyecto3/img/slider2.jpg',
                '../proyecto3/img/slider3.jpg',
                '../proyecto3/img/japon.jpg',
                '../proyecto3/img/italia.jpg',
                '../proyecto3/img/pascuas.jpg',
                '../proyecto3/img/roma.jpg',
                '../proyecto3/img/solas/portada1.jpg',
                '../proyecto3/img/solas/fondo3.jpg',
                '../proyecto3/img/fort.jpg'
               

            ];
            const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
            let posicionActual = 0;
            let $botonRetroceder = document.querySelector('#retroceder');
            let $botonAvanzar = document.querySelector('#avanzar');
            let $imagen = document.querySelector('#imagen');
            let $botonPlay = document.querySelector('#play');
            let $botonStop = document.querySelector('#stop');
            let intervalo;

            // Funciones

            /**
             * Funcion que cambia la foto en la siguiente posicion
             */
            function pasarFoto() {
                if(posicionActual >= IMAGENES.length - 1) {
                    posicionActual = 0;
                } else {
                    posicionActual++;
                }
                renderizarImagen();
            }

            /**
             * Funcion que cambia la foto en la anterior posicion
             */
            function retrocederFoto() {
                if(posicionActual <= 0) {
                    posicionActual = IMAGENES.length - 1;
                } else {
                    posicionActual--;
                }
                renderizarImagen();
            }

            /**
             * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
             */
            function renderizarImagen () {
                $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
            }

            /**
             * Activa el autoplay de la imagen
             */
            function playIntervalo() {
                intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
                // Desactivamos los botones de control
                $botonAvanzar.setAttribute('disabled', true);
                $botonRetroceder.setAttribute('disabled', true);
                $botonPlay.setAttribute('disabled', true);
                $botonStop.removeAttribute('disabled');

            }

            /**
             * Para el autoplay de la imagen
             */
            function stopIntervalo() {
                clearInterval(intervalo);
                // Activamos los botones de control
                $botonAvanzar.removeAttribute('disabled');
                $botonRetroceder.removeAttribute('disabled');
                $botonPlay.removeAttribute('disabled');
                $botonStop.setAttribute('disabled', true);
            }

            // Eventos
            $botonAvanzar.addEventListener('click', pasarFoto);
            $botonRetroceder.addEventListener('click', retrocederFoto);
            $botonPlay.addEventListener('click', playIntervalo);
            $botonStop.addEventListener('click', stopIntervalo);
            // Iniciar
            renderizarImagen();
        } 



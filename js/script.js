'used strict'
// <    >  =>

/* Library scroll reveal - javascript */
    window.addEventListener('load', () => {

        /* llamamos la librería */
        window.sr = ScrollReveal();

        /* header */
        sr.reveal('.contenedor', {
            origin: 'left',
            interval: 106,
            duration: 3000,
            distance: '1%'
        }); 

        /* contenedor de informacion */
        sr.reveal('.acerca-de', {
            origin: 'left',
            interval: 150, 
            duration: 3000,
            distance: '150%',
        });

        /* contenedor de proyectos */
        sr.reveal('.sec2', {
            origin: 'top',
            interval: 10, 
            duration: 2000,
            distance: '20%',
        });

        /* contenedor de proceso de trabajos */
        sr.reveal('.sec3', {
            origin: 'top',
            interval: 10, 
            duration: 2000,
            distance: '20%',
        });

        /* contenedor de cliente */
        sr.reveal('.contenedor-cliente', {
            origin: 'top',
            interval: 10, 
            duration: 2000,
            distance: '20%',
        });

        /* contenedor de ofertas */
        sr.reveal('.planes', {
            origin: 'top',
            interval: 10, 
            duration: 2000,
            distance: '20%',
        });

        /* contenedor de ofertas */
        sr.reveal('.contador', {
            origin: 'top',
            interval: 10, 
            duration: 2000,
            distance: '20%',
        });

        /* contenedor de blog */
        sr.reveal('.contenedor-blog', {
            origin: 'top',
            interval: 10, 
            duration: 2000,
            distance: '20%',
        });

    });
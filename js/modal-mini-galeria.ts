const imagenModal = document.querySelectorAll('.galeria-2f-2c__imagen');

const elementoPadre = document.getElementById('js-modal-padre');

const modalReferencia = document.getElementById('js-modal-referencia');


imagenModal[0].addEventListener('click', function(){
	const contenedorModal = document.createElement('div');
	contenedorModal.setAttribute('class', 'js-contenedor-modal');
	contenedorModal.setAttribute('id', 'js-contenedor-modal-id');
	contenedorModal.innerHTML = '<div class="js-icono-cerrar" id="cerrar"></div> <div class="js-contenedor-imagen"> <img src="recursos/imagenes/integrantes-clap.jpg" class="js-modal-imagen"></div>'
	elementoPadre.insertBefore(contenedorModal, modalReferencia);
});

imagenModal[1].addEventListener('click', function(){
	const contenedorModal = document.createElement('div');
	contenedorModal.setAttribute('class', 'js-contenedor-modal');
	contenedorModal.innerHTML = '<div class="js-icono-cerrar" id="cerrar"></div> <div class="js-contenedor-imagen"> <img src="recursos/imagenes/seguridad-en-clap.jpg" class="js-modal-imagen"></div>'
	elementoPadre.insertBefore(contenedorModal, modalReferencia);
});

imagenModal[2].addEventListener('click', function(){
	const contenedorModal = document.createElement('div');
	contenedorModal.setAttribute('class', 'js-contenedor-modal');
	contenedorModal.innerHTML = '<div class="js-icono-cerrar" id="cerrar"></div> <div class="js-contenedor-imagen"> <img src="recursos/imagenes/equipo-humano.jpg" class="js-modal-imagen"></div>'
	elementoPadre.insertBefore(contenedorModal, modalReferencia);
});


window.addEventListener('keyup', function (e){
	if(e.key === 'Escape') {
		contenedorModalCreado = document.querySelector(".js-contenedor-modal").remove();
	}
})
window.addEventListener('click', function (e){
	if(e.target === cerrar) {
		contenedorModalCreado = document.querySelector(".js-contenedor-modal").remove();
	}
})
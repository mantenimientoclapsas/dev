const icono = document.getElementById('js-icono'), menu = document.getElementById('js-menu');

icono.addEventListener('click',function(){
	menu.classList.toggle('js-menu--mostrar');
});
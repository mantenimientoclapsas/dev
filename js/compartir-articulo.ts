const compartirFacebook = document.getElementById('js-compartir-fb');

compartirFacebook.addEventListener('click', function (e){
	e.preventDefault();
	FB.ui({
		method: 'share',
		href: 'www.nombredelapagina.com',
	}, function (response){
		if(response && !response.error_message){
			alert("Se ha compartido satisfactoriamente el artículo");
		}
		else{
			alert("Ha ocurrido un error, inténtalo nuevamente por favor.");
		}
});
})
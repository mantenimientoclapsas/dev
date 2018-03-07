let contador = 0;
const opcionEmpresarial = document.getElementById("empresarial"),
 		opcionPersona = document.getElementById("persona");

	opcionEmpresarial.addEventListener('click', function(){
		contador = contador+1;
			//recupero el elemento padre para poder insertar el nuevo elemento en el DOM
			const formulario = document.getElementById('js-formulario-contacto');

			//creo el nuevo elemento (un input)
			let inputNuevo = document.createElement('input');

			//recupero el input de referencia sobre el cual se va a insertar el nuevo elemento
			let inputReferencia = document.getElementById('js-input-referencia');

			//le añado la misma clase al input creado 
			inputNuevo.classList.add('formulario__input');

			//le agrego atributos correspondientes
			inputNuevo.setAttribute('placeholder', 'Nombre de la empresa');
			inputNuevo.setAttribute('id', 'nombre-empresa'); 
			//le asigno un id 
			//para luego poder eliminarlo en la condicional

			//inserto el elemento antes del input de referencia
			formulario.insertBefore(inputNuevo, inputReferencia);

		//si es mayor a 1 click debo eliminar el input que cree para que no se creen más en el DOM
		if(contador>1){
			const inputNombreEmpresa = document.getElementById('nombre-empresa');
			inputNombreEmpresa.remove();
		}

	});

opcionPersona.addEventListener('click', function(){
	const inputNombreEmpresa = document.getElementById('nombre-empresa');
	inputNombreEmpresa.remove();
	contador = 0; //reseteo el contador al hacer click en la opcion de "persona"
	//para que se repita el proceso de crear el nuevo input
});
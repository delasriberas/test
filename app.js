const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');
formulario.addEventListener('submit', async(e) => {
	e.preventDefault();

// Escribir Filas
try {
	const respuesta = await fetch('https://sheet.best/api/sheets/3c90e486-31dd-4f44-bb29-2251df1a2c41',{
		method:'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"Patente": formulario.patente.value,
			"Asesor": formulario.asesor.value,
			"Cliente": formulario.cliente.value,
			"Wip": formulario.wip.value,
			"Fecha": formulario.fecha.value
		})
	});

	const contenido = await respuesta.json();
	console.log(contenido);
} catch(error){
	console.log(error);
}

	registro.classList.remove('activo');
	exito.classList.add('activo');

});
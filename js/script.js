let espacios = [{
	nombre:"Teatro", src:"imagenes/teatro.jpg",
	descripcion:`Este espacio educativo se propone desarrollar la capacidad ex-
presiva y creativa, así como favorecer las habilidades socioemo-
cionales fundamentales de los niños, niñas y adolescentes de las

escuelas públicas de la Ciudad de Buenos Aires a través de expe-
riencias en las que representen situaciones con el propio cuerpo,

expresándose a través del gesto, el movimiento y la voz.

Asimismo, propicia el desarrollo de la alfabetización estético-
expresiva (en este caso, teatral) a través del ejercicio de la ob-
servación, la exploración y la consecuente apropiación de las

posibilidades de comunicación personal y grupal.`
},{
	nombre:"Lúdico Expresivo", src:"imagenes/ludico.jpg",
	descripcion:`
	En este espacio educativo se procura construir con los niños,
niñas y adolescentes, proyectos lúdico-expresivos variados, en
los que pongan en juego y desarrollen sus potencialidades y
competencias tanto motrices y emocionales como comunicativas y 
sociales.
Se intenta promover en los participantes la construcción de saberes 
para disfrutar y disponer de su cuerpo, jugar, expresarse y compartir
 con otros.`
},{
	nombre:"Actividades Acuáticas",src:"imagenes/ludico2.jpg",
	descripcion:`En este espacio se desarrolla la supervivencia en el agua
	de un modo constructivo y lúdico. También cuenta con una parte 
	recreativa en donde los alumnos logran desarrollar y mejorar sus habilidades motrices dentro del agua.`
},{
	nombre:"Investigación en Acción",src:"imagenes/iea2.jpg",
	descripcion:`La propuesta de este espacio en particular implica 
	abordar los significados de “ser estudiante”, con el objetivo de 
	que los niños, niñas y adolescentes puedan pensarse a sí mismos como
tales. Se promueven instancias para que sean capaces de conocerse e 
identificar sus fortalezas y dificultades, con el fin de que puedan 
construir herramientas de estudio para resolver las diferentes demandas 
de las asignaturas y futuras.`
},{
	nombre:"Ajedrez",src:"imagenes/ajedrez.jpg",
	descripcion:`Este espacio educativo se propone ofrecer a 
	los estudiantes la posibilidad de aproximarse al ajedrez 
	como espacio lúdico propicio para el desarrollo de las 
	capacidades de análisis, selección y elaboración de estrategias.`
},{
	nombre:"Programación",src:"imagenes/programacion.jpg",
	descripcion:`Este espacio es para realizar los primeros contactos 
	de los alumnos con la programación con el pensamiento computacional, innovación, creatividad y el trabajo colaborativo.`
}];
const inicio=()=>{
	for(let a=0; a < espacios.length; a++){
		document.getElementById('principal').innerHTML+=`
			<div class="card col-5 p-5 mx-auto">
			    <img src="${espacios[a].src}" class="card-img-top" alt="">
			    <div class="card-body">
			      	<h5 class="card-title text-center">${espacios[a].nombre}</h5>
			      	<p class="card-text">${espacios[a].descripcion}</p>
			      	<button type="button" onclick="mostrar(${a})" class="btn btn-secondary">Ver Más!</button>
			    </div>
		  	</div>
		`;
	}
};
inicio();

const mostrarMas=()=>{
	document.getElementById('principal').innerHTML=`
		<div class="col-12">
			
		</div>
	`;
}
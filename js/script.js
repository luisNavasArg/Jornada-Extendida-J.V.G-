let espacios = [{
	nombre:"Teatro", src:"imagenes/teatro.jpg" 
},{
	nombre:"Lúdico Expresivo", src:"imagenes/ludico.jpg"
},{
	nombre:"Actividades Acuáticas",src:"imagenes/ludico2.jpg"
},{
	nombre:"Investigación en Acción",src:"imagenes/iea2.jpg"
},{
	nombre:"Ajedrez",src:"imagenes/ajedrez.jpg"
},{
	nombre:"Programación",src:"imagenes/programacion.jpg"
}];
const inicio=()=>{
	for(let a=0; a < espacios.length; a++){
		document.getElementById('principal').innerHTML+=`
			<div class="card col-5 p-5 mx-auto">
			    <img src="${espacios[a].src}" class="card-img-top" alt="">
			    <div class="card-body">
			      	<h5 class="card-title text-center">${espacios[a].nombre}</h5>
			      	<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
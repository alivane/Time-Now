
//Primero defini las variables de los meses , dias y tambien defini nueva fecha

	var monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var dayNames = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	$('.clock-date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

//Segundo , defini las functiones deacuerdo a los paises

function contadoresMenosUno(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);

		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		
		var hours = new Date().getHours();
		$(".listas .hours1").html(parseInt(( hours < 10 ? "0" : "" ) + hours)-1);
	}, 1000);
}	
function contadoresCero(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);

		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		
		var hours = new Date().getHours();
		$(".hours").html(parseInt(( hours < 10 ? "0" : "" ) + hours)+0);
	}, 1000);
}
function contadoresMasUno(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);

		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		
		var hours = new Date().getHours();
		$(".hours2").html(parseInt(( hours < 10 ? "0" : "" ) + hours)+1);
	}, 1000);
}

//Llame a la function contadoresCeros para que inicie la hora actual

$(document).ready(function () {
	contadoresCero();
})

$(document).ready(function(){
//Luego al hacer click a un li defini distintas condicionales

	$('.pais').on('click',function(){
		$(this).addClass('tachar');
		//llame al texto del li seleccionado
		var letras = $(this).text();
		//clone las etiquetas de .clock para obtener el tiempo
		var horas = $('.clock').clone();
		if(letras === $('#chicago').text() || letras === $('#mexico').text() || letras === $('#quito').text()
			|| letras === $('#guayaquil').text() || letras === $('#smaria').text() || letras === $('#bogota').text()
			){
			
			$('.horas').html(horas);
			
			$('.horas .hours').removeClass().addClass('hours1');
			
			contadoresMenosUno();
			
		}else if( letras === $('#santiago').text() || letras === $('#caracas').text() ){
			$('.horas').html(horas);
			
		
			contadoresCero();
		}else{
			$('.horas').html(horas);
			
			$('.horas .hours').removeClass().addClass('hours2')
	
			contadoresMasUno();
		}
		$('.ciudad').append('<p class="parrafo">'+letras +'</p>');
		$(this).off()
		
		
	})
})
//$('.ciudad').append('<p class="parrafo">'+letras +" "+" "+'<a href="#">'+('<i class="fa fa-times" aria-hidden="true"></i>')+'</a>'+'</p>');



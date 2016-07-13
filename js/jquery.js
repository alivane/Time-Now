
	var monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var dayNames = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	$('.clock-date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

function contadoresMenosUno(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);

		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		
		var hours = new Date().getHours();
		$(".hours1").html(parseInt(( hours < 10 ? "0" : "" ) + hours)-1);
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
$(document).ready(function () {
	contadoresCero();
})
$(document).ready(function(){
	$('li').on('click',function(){
		var letras = $(this).text();
		var horas = $('.clock').clone();
		if(letras === $('#chicago').text() || letras === $('#mexico').text() || letras === $('#quito').text()
			|| letras === $('#guayaquil').text() || letras === $('#smaria').text() || letras === $('#bogota').text()
			){
			console.log("hola");
			
			$('.horas').html(horas);
			$('.horas .hours').removeClass().addClass('hours1');
			$('.ciudad').append('<p>'+letras+'</p>'+'<br>');
			contadoresMenosUno();

		}else if( letras === $('#santiago').text() || letras === $('#caracas').text() ){
			$('.horas').html(horas);
			$('.ciudad').append('<p>'+letras+'</p>'+'<br>');
			contadoresCero();
		}else{
			$('.horas').html(horas);
			$('.horas .hours').removeClass().addClass('hours2');
			$('.ciudad').append('<p>'+letras+'</p>'+'<br>');
			contadoresMasUno();
		}

	})
})










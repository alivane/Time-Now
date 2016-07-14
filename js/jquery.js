/*
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
		//llame al texto del li seleccionado
		var letras = $(this).text();
		//clone las etiquetas de .clock para obtener el tiempo
		
		if(letras === $('#chicago').text() || letras === $('#mexico').text() || letras === $('#quito').text()
			|| letras === $('#guayaquil').text() || letras === $('#smaria').text() || letras === $('#bogota').text()
			){
			
			$('.horas').append('<div class="nuevo"></div>');
			var horas = $('.clock').clone();
			$('.nuevo').html(horas);
			
			$('.nuevo .hours').removeClass().addClass('hours1');
			$('.ciudad').append('<p>'+letras+'</p>'+'<br>');
			contadoresMenosUno();
			if( $('.clock')>2){
				$('.clock').remove();
			}

			

		}else if( letras === $('#santiago').text() || letras === $('#caracas').text() ){

			$('.horas').append('<div class="nuevo1"></div>');
			var horas = $('.clock').clone();
			$('.nuevo1').html(horas);
			
			$('.ciudad').append('<p>'+letras+'</p>'+'<br>');
			contadoresCero();
			if( $('.clock')>2){
				$('.clock').remove();
			}
		}else{
			$('.horas').append('<div class="nuevo2"></div>');
			var horas = $('.clock').clone();
			$('.nuevo2').html(horas);
			
			$('.nuevo2 .hours').removeClass().addClass('hours2')
			$('.ciudad').append('<p>'+letras+'</p>'+'<br>');
			contadoresMasUno();
			if( $('.clock')>2){
				$('.clock').remove();
			}
		}
		$(this).off()

	})
})


*/
function horarioNormal() {
	var horaActual = new Date();
	var minuto = horaActual.getMinutes();
	var segundo = horaActual.getSeconds();
	var hora = horaActual.getHours();
	if(minuto<10){
		minuto = "0" + minuto
	}
	if(segundo<10){
		segundo = "0" + segundo
	}
	$("#reloj").html(hora + " : " + minuto + " : " + segundo)
	var horaCambio = setTimeout("horarioNormal()", 1000)
}
horarioNormal();

function diaActual() {
	var fecha = new Date();
	var diaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado")
	var mesAño = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre")
	var dia = diaSemana[fecha.getDay()];
	var mes = mesAño[fecha.getMonth()];
	var año = fecha.getFullYear();
	$("#fecha").html(dia + " " + fecha.getDate() + " de " + mes + " del " + año )
}
diaActual();

var lugares=[
    {
        ciudad: "Chicago",
        hora: 0
    },
    {
        ciudad: "Sau Paulo",
        hora: 2
    },
    {
        ciudad: "Santiago",
        hora: 1
    },
    {
        ciudad: "México D.F.",
        hora: -1
    },
    {
        ciudad: "Caracas",
        hora: 1
    },
    {
        ciudad: "Brasilia",
        hora: 2
    },
    {
        ciudad: "Quito",
        hora: 0
    },
    {
        ciudad: "Guayaquil",
        hora: 0
    },
    {
        ciudad: "Santa Marta",
        hora: 1
    },
    {
        ciudad: "Bogota",
        hora: 1
    }
]

function horasLugares() {
	var horaLugar = new Date();
	var minuto = horaLugar.getMinutes();
	var segundo = horaLugar.getSeconds();
	var hora = horaLugar.getHours();
	var id = $(this).val();
	if(minuto<10){
		minuto = "0" + minuto
	}
	if(segundo<10){
		segundo = "0" + segundo
	}
	if($(this).is(":checked")){
		$("#place").append("<span id='" + id + "'>" + parseInt(hora+lugares[id].hora) + " : " + minuto + " : " + segundo + " " + lugares[id].ciudad + " " + "</span></br>" )
	} else {
		$("#" + id).remove();
	}
}
$(document).ready(function() {
	$(".pais").click(horasLugares);
});



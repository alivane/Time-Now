/*$(document).ready(function (){
	var month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var day = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var newDate = new Date();
	newDate.setDate(newDate.getDate()); 
	$('#Date').html(day[newDate.getDay()] + " " + newDate.getDate() + ' ' + month[newDate.getMonth()] + ' ' + newDate.getFullYear());
	setInterval(function(){
		var seconds = newDate.getSeconds();
		$('#seconds').html((seconds < 10 ? "0" : "") + seconds);
	},1000);
	setInterval( function(){
		var minutes = newDate.getMinutes();
		$('#minutes').html((minutes < 10 ? "0" : "") + minutes);
	},1000);
	setInterval( function(){
		var hours = new Date().getHours();
		$('#hours').html((hours < 10 ? "0" : "") + hours);
	},1000);
})*/

$(document).ready(function() {
	var monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var dayNames = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

	setInterval( function() {
		var seconds = new Date().getSeconds();
		$("#seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
		},1000);
		
	setInterval( function() {
		var minutes = new Date().getMinutes();
		$("#minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
	    },1000);
		
	setInterval( function() {
		var hours = new Date().getHours();
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	    }, 1000);	
	$('p').click(function(){
		console.log("hol");
	})

});


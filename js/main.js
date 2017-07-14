$(document).ready(function() {
	$(document).on('keypress', '#inputEmail3', function (event) {
	    var regex = new RegExp("^[a-z0-9@.]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false; //validará sólo letras y numeros + @ 
	    }
	});
	
	$(document).on('keypress', '#inputPassword3', function (event) {
	    var regex = new RegExp("^[0-9]{1,8}$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false; //recibe hasta 8 caracteres alfanumericos
	    }
	});

	$("#iniciar-sesion").on("click", function(e){
	    var email = $("#nputEmail3").val();
	    var password = $("#inputPassword3").val();

	    if( email == "" || password == "" ){ //campos vacíos
	        alert("Ingresa datos válidos")
	    }
	    if( email.indexOf('@') == -1 ){ //correo invalido
	        alert("Ingrese un correo válido");
	    }
	    if( password.length > 8 ){
	        alert("Su contraseña debe ser máximo 8 caracteres.");
	        e.preventDefault();
	    }
	    if( password != "" && email.indexOf('@') != -1 ){
	        localStorage.setItem("email", email);
	    } else {
	        e.preventDefault();
	    }
	});
});
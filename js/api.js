
$(document).ready(function() {
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456',
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(response) {
            console.log('prueba');
            console.log(response);
        })
        .fail(function() {
            console.log('Error')
        })
        .always(function() {
            console.log('Complete')
        });
})
$('#formRegister').on('submit', function( event ){
    event.preventDefault();

    const formData={
        nombreCompleto: $('input[name="nombreCompleto"]').val(),
        tipoDocumento: $('select[name="tipoDocumento"]').val(),
        documento: $('input[name="documento"]').val(),
        contrasena: $('input[name="contrasena"]').val(),
        rol: $('select[name="rol"]').val(),
        estado:$('input[name="estado"]').val(),
        correo:$('input[name="correo"]').val() 
    }

    $.post('http://localhost:4000/auth/createUser',formData, function(data){
        
        //limpiar formulario de registro
        $('#formRegister'[0].rest);

        //tiempo de espera para direccionar a html
        setTimeout(function(){
            window.location.href='http//localhost:4000/login.html';
        },5000)

        //sweetalert
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: data.result.menssage
        });
    })


});

$('#formLogin').on('submit', function (event) {
    event.preventDefault();

    const formData = {
        documento: $('input[name= "documento"]').val(),
        correo: $('input[name="correo"]').val(),
        contrasena: $('input[name="contrasena"]').val(),
    }

    $.post('http//localhost:4000/auth/login',
        formData,
        function (data) {

            if (data.result.user.length > 0) {
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

                window.location.href = 'dashboard.html'
            } else {
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
                    icon: "error",
                    title: "Usuario y contraseña incorrectos"
                });
            }
        }

    )

})
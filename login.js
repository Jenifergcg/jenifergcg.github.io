function validateForm() {
        let emailInput = document.getElementById('username');
        let passwordInput = document.getElementById('password');
        let emailRegex = /\S+@\S+\.\S+/;
        let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!emailRegex.test(emailInput.value)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            return false;
        }

        if (!passwordRegex.test(passwordInput.value)) {
            alert('La contraseña debe tener al menos 8 caracteres, una mayúscula y un dígito.');
            return false;
        }

        return true;
    }

    function showSuccessMessage() {
        if (validateForm()) {
            alert('¡Inicio de sesión exitoso!');
        }
    }

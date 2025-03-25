if (document.getElementById('formulario-compra')) {
    document.getElementById('formulario-compra').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener elementos del formulario
        const nombre = document.getElementById('nombre');
        const fecha = document.getElementById('fecha');
        const lugar = document.getElementById('lugar');
        const cantidad = document.getElementById('cantidad');
        const categoria = document.getElementById('categoria');
        const pago = document.querySelectorAll('input[name="pago"]');
        const terminos = document.getElementById('terminos');
        
        // Validar campos
        let errores = [];

        // Validar nombre
        if (nombre.value.trim() === '') {
            errores.push('Nombre');
            nombre.classList.add('error');
        } else {
            nombre.classList.remove('error');
        }

        // Validar fecha
        if (fecha.value === '') {
            errores.push('Fecha');
            fecha.classList.add('error');
        } else {
            fecha.classList.remove('error');
        }

        // Validar lugar (no puede ser la opción por defecto)
        if (lugar.value === '') {
            errores.push('Lugar');
            lugar.classList.add('error');
        } else {
            lugar.classList.remove('error');
        }

        // Validar cantidad
        if (cantidad.value === '' || parseInt(cantidad.value) < 1) {
            errores.push('Cantidad (mínimo 1)');
            cantidad.classList.add('error');
        } else {
            cantidad.classList.remove('error');
        }

        // Validar categoría
        if (categoria.value === '') {
            errores.push('Categoría');
            categoria.classList.add('error');
        } else {
            categoria.classList.remove('error');
        }

        // Validar método de pago
        let pagoSeleccionado = false;
        pago.forEach(radio => {
            if (radio.checked) pagoSeleccionado = true;
        });
        if (!pagoSeleccionado) {
            errores.push('Método de pago');
        }

        // Validar términos y condiciones
        if (!terminos.checked) {
            errores.push('Aceptar los términos y condiciones');
            terminos.classList.add('error');
        } else {
            terminos.classList.remove('error');
        }

        // Mostrar errores o enviar
        if (errores.length > 0) {
            alert(`Debes completar los campos requeridos:\n${errores.join('\n')}`);
        } else {
            const formData = {
                nombre: nombre.value,
                fecha: fecha.value,
                lugar: lugar.value,
                cantidad: cantidad.value,
                categoria: categoria.value,
                pago: document.querySelector('input[name="pago"]:checked').value,
                terminos: terminos.checked
            };

            sessionStorage.setItem('formData', JSON.stringify(formData));
            window.location.href = 'confirmacion.html';
        }
    });
}

// Lógica para la página de confirmación
if (document.getElementById('datosConfirmacion')) {
    const formData = JSON.parse(sessionStorage.getItem('formData'));
    
    if(formData) {
        const confirmacionHTML = `
            <p>Aquí tienes un resumen de tu compra:</p>
            <fieldset>
            <strong>Nombre:</strong> ${formData.nombre}<br/>
            <strong>Fecha:</strong> ${formData.fecha}<br/>
            <strong>Lugar:</strong> ${formData.lugar}<br/>
            <strong>Cantidad:</strong> ${formData.cantidad}<br/>
            <strong>Categoría:</strong> ${formData.categoria}<br/>
            <strong>Método de pago:</strong> ${formData.pago}<br/>
            <strong>Términos aceptados:</strong> ${formData.terminos ? 'Sí' : 'No'}<br/>
            </fieldset>
        `;
        
        document.getElementById('datosConfirmacion').innerHTML = confirmacionHTML;
    } else {
        document.getElementById('datosConfirmacion').innerHTML = '<p>No se encontraron datos de registro</p>';
    }
}

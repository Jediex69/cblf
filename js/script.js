// Lógica para el formulario
if (document.getElementById('formulario-compra')) {
    document.getElementById('formulario-compra').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            nombre: document.getElementById('nombre').value,
            fecha: document.getElementById('fecha').value,
            lugar: document.getElementById('lugar').value,
            cantidad: document.getElementById('cantidad').value,
            categoria: document.getElementById('categoria').value,
            pago: document.querySelector('input[name="pago"]:checked').value,
            terminos: document.getElementById('terminos').checked
        };

        sessionStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = 'confirmacion.html';
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
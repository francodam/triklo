function resolverSistema() {
    try {
        let a11 = parseFloat(document.getElementById('a11').value);
        let a12 = parseFloat(document.getElementById('a12').value);
        let b1 = parseFloat(document.getElementById('b1').value);
        
        let a21 = parseFloat(document.getElementById('a21').value);
        let a22 = parseFloat(document.getElementById('a22').value);
        let b2 = parseFloat(document.getElementById('b2').value);
        
        let determinante = a11 * a22 - a12 * a21;
        
        if (determinante !== 0) {
            let x = (b1 * a22 - b2 * a12) / determinante;
            let y = (a11 * b2 - a21 * b1) / determinante;
            let resultado = `Solución x: ${x.toFixed(2)}, Solución y: ${y.toFixed(2)}`;
            mostrarAlerta(resultado);
        } else {
            mostrarAlerta('El determinante es cero. No hay solución única.');
        }
    } catch (error) {
        mostrarAlerta('Ingrese números válidos');
    }
}

function mostrarAlerta(mensaje) {
    alert(mensaje);
}

function resetearCampos() {
    let inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => input.value = '');
}

function agregarAlCarrito(nombre, precio) {
    const carrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    const li = document.createElement('li');
    li.textContent = `${nombre}: $${precio.toFixed(3)}`;
    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', function () {
        eliminarDelCarrito(li, precio);
    });
    
    li.appendChild(btnEliminar);
    carrito.appendChild(li);

    let total = parseFloat(totalElemento.textContent.replace('Total: $', ''));
    total += precio;
    totalElemento.textContent = `Total: $${total.toFixed(3)}`;
}

function eliminarDelCarrito(item, precio) {
    const carrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    carrito.removeChild(item);

    let total = parseFloat(totalElemento.textContent.replace('Total: $', ''));
    total -= precio;
    totalElemento.textContent = `Total: $${total.toFixed(3)}`;
}

function vaciarCarrito() {
    const carrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }

    totalElemento.textContent = 'Total: $0.000';
}
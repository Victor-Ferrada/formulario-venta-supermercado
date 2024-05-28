function addProduct() {
    const productName = document.getElementById('productName').value;
    const productValue = parseFloat(document.getElementById('productValue').value);
    const iva = productValue * 0.19;
    const totalValue = productValue + iva;

    if (productName && productValue) {
        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const valueCell = newRow.insertCell(1);
        const ivaCell = newRow.insertCell(2);
        const totalCell = newRow.insertCell(3);

        nameCell.innerText = productName;
        valueCell.innerText = productValue.toFixed(2);
        ivaCell.innerText = iva.toFixed(2);
        totalCell.innerText = totalValue.toFixed(2);

        document.getElementById('productForm').reset();
    } else {
        alert('Por favor, ingrese todos los datos del producto.');
    }
}

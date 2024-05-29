function addProduct() {
    const producnom = document.getElementById('producnom').value;
    const productValue = parseFloat(document.getElementById('productValue').value);
    const iva = productValue * 0.19;
    const totalValue = productValue + iva;

    if (producnom && productValue) {
        const table = document.getElementById('tablaproduc').getElementsByTagName('tbody')[0];
        
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        const valueCell = document.createElement('td');
        const ivaCell = document.createElement('td');
        const totalCell = document.createElement('td');

        nameCell.appendChild(document.createTextNode(producnom));
        valueCell.appendChild(document.createTextNode(productValue.toFixed(2)));
        ivaCell.appendChild(document.createTextNode(iva.toFixed(2)));
        totalCell.appendChild(document.createTextNode(totalValue.toFixed(2)));

        newRow.appendChild(nameCell);
        newRow.appendChild(valueCell);
        newRow.appendChild(ivaCell);
        newRow.appendChild(totalCell);

        table.appendChild(newRow);

        document.getElementById('productForm').reset();
    } else {
        alert('Por favor, ingrese todos los datos del producto.');
    }
}

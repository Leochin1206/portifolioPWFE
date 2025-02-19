function calcularTotal(){
    let precoPrato = parseFloat(document.getElementById('prato').value);
    let quantidade = parseInt(document.getElementById('quantidade').value) || 1;

    if(precoPrato === 0){
        document.getElementById('resultado').textContent = "Por favor, informe um prato";
    }else{
        let total = precoPrato * quantidade;
        document.getElementById('resultado').textContent = `Total a pagar é R$${total.toFixed(2)}`;
    }
}
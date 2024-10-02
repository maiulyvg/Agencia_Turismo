//Qual valor total do primeiro e do segundo item
    var valorTotal =[0,0,0];
    var valorProduto = [5000.00, 4000.00, 2000.00];
    var qtd = [0,0,0];

//Funções para aumentar o números de itens clicados pelo usuário
function adicionarItem(item){
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById("total" + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
}

//Funções para diminuir o números de itens clicados pelo usuário
function removerItem(item){
    if(qtd[item] > 0){
        qtd[item] -=1;
        var quantidade= document.getElementById('quantidade' + item);
        var total = document.getElementById('total'+ item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

//Função para calcular o subtotal da compra
function valorCompra(){
    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;

    //iteração do array valorTotal
    for(var i = 0; i < valorTotal.length; i++ ){
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);
}

// Função para excluir um pacote de viagem
function removePacote(pacoteId) {
    var pacote = document.getElementById(pacoteId);
    if (pacote) {
        pacote.remove();  // Remove o pacote do DOM
        alert("Pacote de viagem removido do carrinho de compras!");
    }
}




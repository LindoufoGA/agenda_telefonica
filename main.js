const form = document.getElementById('form-agenda');
let linhas = '';
const numeros = [];
form.addEventListener('submit', function(e){
    e.preventDefault();
    adcLinha();
    atualiza();
})
    function adcLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputDdd = document.getElementById('ddd');
    const inputNumero = document.getElementById('numero-contato');

    if(numeros.includes(inputNumero.value)){
        alert('O número: ' + inputNumero.value + ' Já esta na lista');
    }
    else{
        numeros.push(inputNumero.value);

    let linha = '<tr>';
    linha += '<td>' + inputNome.value + '</td>';
    linha += '<td>' + inputDdd.value + '</td>';
    linha += '<td>' + inputNumero.value + '</td>';
    linha += '</tr>';

    linhas += linha;
    inputNome.value = '';
    inputDdd.value = '';
    inputNumero.value = '';
    }
}
    function atualiza() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas; 
    }

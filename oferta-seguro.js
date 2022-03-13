const cliente = {
    nome: 'Andre',
    idade: 36,
    CPF: '12345678910',
    email: 'andre@email.com',
    fones: ['(48) 9 9161-3313', '(48) 9 9615-4857'],
    dependentes: [{
        nome: 'Sara Silva',
        paretensco: 'Filha',
        dataNasc:'20/03/2011'}, 
    {
        nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasc: '04/01/2014'}],
    saldo: 100,   
    depositar: function(valor) {
        this.saldo += valor;
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(cliente);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.entries(cliente));
oferecerSeguro(cliente);

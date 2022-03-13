const cliente = {
    nome: 'Andre',
    idade: 36,
    CPF: '12345678910',
    email: 'andre@email.com',
    fones: ['(48) 9 9161-3313', '(48) 9 9615-4857'],
    dependentes: [{
        nome: 'Sara Silva',
        paretensco: 'Filha',
        dataNasc:'20/03/2011'
    }, ]
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'Filha',
    dataNasc: '04/01/2014'
})

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '04/01/2014');

console.log(filhaMaisNova); 
console.log(filhaMaisNova[0].nome);

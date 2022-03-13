const cliente = {
    nome: 'Andre',
    idade: 36,
    CPF: '12345678910',
    email: 'andre@email.com',
    fones: ['(48) 9 9161-3313', '(48) 9 9615-4857']
}

cliente.dependentes = {
    nome: 'Sara',
    paretensco: 'Filha',
    dataNasc:'20/03/2011'
}

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva' ;

console.log(cliente);

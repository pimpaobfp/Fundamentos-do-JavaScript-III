const cliente = {
    nome: 'Andre',
    idade: 36,
    CPF: '12345678910',
    email: 'andre@email.com'
}

const chaves = ['nome', 'idade', 'CPF', 'email'];

console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente['conta']); // undefined

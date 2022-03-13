const clientes = [
    {
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
    }, 
    {
        nome: 'Juliana',
        idade: 25,
        CPF: '0987654321',
        email: 'juliana@email.com',
        fones: ['(48) 9 8804-1234', '(48) 9 9191-1919'],
        dependentes: [{
            nome: 'Sophia',
            paretensco: 'Filha',
            dataNasc:'30/08/2020'}] 
    }
        
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);
class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibeSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente('André', 'andre@servidor.com', '123.456.789-10', 100);

console.log(andre);

export default class Contato {

    id
    nome
    email
    telefone


    constructor(id, nome, email) {
        this.id = id
        this.nome = nome
        this.email = email
    }

    get id() {
        return this.id
    }

    get nome() {
        return this.nome
    }

    get email() {
        return this.email
    }
}
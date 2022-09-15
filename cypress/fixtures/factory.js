import { faker } from '@faker-js/faker';

export default class Factory {

    static gerarProduto() {
        return {
            "nome": faker.commerce.productName(),
            "preco": faker.datatype.number(),
            "descricao": faker.commerce.productDescription(),
            "quantidade": faker.datatype.number()
        }
    }

    static gerarInteiroAleatorio() {
        return faker.datatype.number(5)
    }
}
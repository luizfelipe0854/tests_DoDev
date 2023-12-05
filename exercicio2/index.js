class Carro {
    constructor(Marca, Modelo, Categoria, Ano, Quilometragem, Valor) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Categoria = Categoria;
        this.Ano = Ano;
        this.Quilometragem = Quilometragem;
        this.Valor = Valor;
    }
}

const api = "https://apigenerator.dronahq.com/api/NonP0uz0/exercicio2";

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

let carro1 = new Carro("audi", "rs6", "mtm", 2023, 0, 1500000);
let carro2 = new Carro("mercedes", "c200", "amg", 2021, 0, 2500000);
let carro3 = new Carro("volkswagen", "gol", "tsi", 2020, 0, 500000);

const carrosParaEnviar = [carro1, carro2, carro3];

postData(api, carrosParaEnviar)
    .then((data) => {
        console.log("Carros enviados:", data);
    })
    .catch((error) => {
        console.error("Erro ao enviar carros:", error);
    });



async function deleteData(url = '') {
    const response = await fetch(url, {
        method: 'DELETE',
    });
    return response.json();
}


const carroIdParaDeletar = 2;
const deleteURL = `${api}/${carroIdParaDeletar}`;

deleteData(deleteURL)
    .then((data) => {
        console.log("Carro deletado:", data);
    })
    .catch((error) => {
        console.error("Erro ao deletar carro:", error);
    });

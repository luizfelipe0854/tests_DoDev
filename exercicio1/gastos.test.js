const funcoes = require("./funcoes")

test("Distancia é inteiro e não negativo",()=>{
    expect(funcoes.gastos(1, "gasolina")).not.toBe(false)
})


test("Combustivel é etanol ou gasolina", ()=>{
    expect(funcoes.gastos(1, "gasolina")).not.toBe(false)
})
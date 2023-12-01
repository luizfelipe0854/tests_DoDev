function gastos(d, c) {
    let distancia = parseInt(d)
    let combustivel = c
    
    if (distancia >= 0) {
        if (combustivel === "gasolina") {
            return parseInt(distancia / 16000)
        } else if (combustivel === "etanol") {
            return parseInt(distancia / 11000)
        }else{
            return false
        }
    }else{
        return false
    }
}

module.exports = {gastos}
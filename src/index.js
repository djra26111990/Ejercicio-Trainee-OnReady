const Vehiculos = [
  {
    tipo: 'Auto',
    marca: 'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000.0,
  },
  {
    tipo: 'Moto',
    marca: 'Honda',
    modelo: 'Titan',
    cilindrada: '125cc',
    precio: 60000.0,
  },
  {
    tipo: 'Auto',
    marca: 'Peugeot',
    modelo: '208',
    puertas: 5,
    precio: 250000.0,
  },
  {
    tipo: 'Moto',
    marca: 'Yamaha',
    modelo: 'YBR',
    cilindrada: '160cc',
    precio: 80500.5,
  },
]

function formatNum(num) {
  let num2 = num.toString().split('.')
  let miles = num2[0]
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .join('.')
  let decimales = num2[1] ? ',' + num2[1] : ''

  let resultado = miles.split('').reverse().join('') + decimales
  return resultado
}

class Vehiculo {
  constructor() {}
  printOut() {
    Vehiculos.filter((elem) => {
      if (elem.tipo === 'Auto') {
        return console.log(
          `Marca: ${elem.marca}  // Modelo: ${elem.modelo} // Puertas: ${
            elem.puertas
          } // Precio: $${formatNum(elem.precio.toFixed(2))}`
        )
      } else {
        return console.log(
          `Marca: ${elem.marca}  // Modelo: ${elem.modelo} // Cilindrada: ${
            elem.cilindrada
          } // Precio: $${formatNum(elem.precio.toFixed(2))}`
        )
      }
    })
  }
  masCaro() {
    let vehiculoCaro = Math.max.apply(
      Math,
      Vehiculos.map((elem) => {
        return elem.precio
      })
    )
    Vehiculos.filter((elem) => {
      if (elem.precio === vehiculoCaro) {
        return console.log(`Vehículo más caro ${elem.marca} ${elem.modelo}`)
      }
    })
  }
  masBarato() {
    let vehiculoBarato = Math.min.apply(
      Math,
      Vehiculos.map((elem) => {
        return elem.precio
      })
    )
    Vehiculos.filter((elem) => {
      if (elem.precio === vehiculoBarato) {
        return console.log(`Vehículo más barato ${elem.marca} ${elem.modelo}`)
      }
    })
  }
  letraY() {
    Vehiculos.filter((elem) => {
      if (elem.modelo.charAt(0) === 'Y') {
        return console.log(
          `Vehículo que contiene en el modelo la letra ‘Y’: ${elem.marca} ${
            elem.modelo
          } $${elem.precio.toFixed(2)}`
        )
      }
    })
  }
  mayorMenor() {
    Vehiculos.sort((a, b) => b.precio - a.precio).filter((elem) => {
      return console.log(`${elem.marca} ${elem.modelo}`)
    })
  }
}

const vehiculo = new Vehiculo()

vehiculo.printOut()
console.log('=============================')
vehiculo.masCaro()
vehiculo.masBarato()
vehiculo.letraY()
console.log('Vehículos ordenados por precio de mayor a menor:')
vehiculo.mayorMenor()

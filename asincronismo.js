class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn){
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if (fn) {
      fn(nombre, apellido, false)
    }
  }
  soyAlto(){
      return this.altura > 1.85
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apelido, altura){
    super(nombre, apelido, altura)
  }
  saludar(fn){
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`)
  }
}

var juan = new Persona('Juan', 'Herrera', 1.86)
var consuelo = new Persona('consuelo', 'Osorio', 1.86)
var william = new Desarrollador('william', 'chaves', 1.86)

juan.saludar()
consuelo.saludar(responderSaludo)
william.saludar(responderSaludo)

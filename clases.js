// function Persona (nombre, apellido, altura){
//   this.nombre = nombre
//   this.apellido = apellido
//   this.altura = altura
// }

// Persona.prototype.saludar = function(){
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
//
// Persona.prototype.soyAlto = function(){
//   // debugger
//   return this.altura > 1.85
// }

// Persona.prototype.saludar = function(){
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
//
// Persona.prototype.soyAlto = function(){
//   // debugger
//   return this.altura > 1.85
// }


// function Desarrollador(nombre, apelido, altura){
//   this.nombre = nombre
//   this.apellido = apellido
// }

// Desarrollador.prototype.saludar = function (){
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y doy Desarrollador/a`)
// }


class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
      return this.altura > 1.85
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apelido, altura){
    super(nombre, apelido, altura)
  }
  saludar(){
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
  }
}

var juan = new Persona('Juan', 'Herrera', 1.86)
juan.saludar()
var consuelo = new Desarrollador('consuelo', 'Osorio', 1.86)
consuelo.saludar()

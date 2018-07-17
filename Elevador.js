//Desafio: Fazer um elevador que suba e desça e mostre no console qual adar esta, tem 3 andares
var Elevator = {
    floor: 0,
    total: 3,
    up(){
       if(this.floor < this.total){
           this.floor++
       }
       this.print()
    },
    down(){
        if(this.floor > 0){
            this.floor--
        }
      this.print()
    },
    print(){
        console.log(`Andar: ${this.floor}`) //o this.floor é a mesma coisa que Elevator.floor(this indica o proprio objeto)
    }
}

Elevator.print() //Resulta: Andar 0
Elevator.up() //Resulta Andar 1
Elevator.up() //Resulta Andar 2 ...
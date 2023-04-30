class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {

    //RECEBIMENTO DE INFORMAÇÕES
    this.animation = boatAnimation;
    this.speed = 0.05;

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;


    this.boatPosition = boatPos;
    //var para dizer que o barco não esta quebrado
    this.isBroken = false;

    World.add(world, this.body);
  }

  //Programar MÉTODO PARA AUMENTAR VELOCIDADE
  animate(){
    this.speed += 0.05
  }



  remove(index) {
    //PASSAR CARACTERÍSTICAS QUE SERÃO EXECUTADAS ANTES DO DESAPARECIMENTO






    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    // I RECEBE O RESULTADO 
    var i = floor(this.speed % this.animation.length);


    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    // e APLICA NA IMAGEM
    image(this.animation[i], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}

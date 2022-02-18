function polygon(){
    let shape;
    let flag = false;
    do {
        shape = prompt("Enter a number between 1 an 10", 0);
        shape = Math.round(shape);
        shape = Math.abs(shape);
        flag = validateEntry(shape);
      } while (flag == false);
    getShape(shape);
}

function getShape(shape){
    if(shape == 1){alert("A one sided shape is a: Monogon");}
    else if(shape == 2){alert("A two sided shape is a: Bigon")}
    else if(shape == 3){alert("A three sided shape is a: Triangle")}
    else if(shape == 4){alert("A four sided shape is a: Quadrillateral")}
    else if(shape == 5){alert("A five sided shape is a: Pentagon")}
    else if(shape == 6){alert("A six sided shape is a: Hexagon")}
    else if(shape == 7){alert("A seven sided shape is a: Heptagon")}
    else if(shape == 8){alert("A eight sided shape is a: Octagon")}
    else if(shape == 9){alert("A nine sided shape is a: Nonagon")}
    else if(shape == 10){alert("A ten sided shape is a: Decagon")}
}

function validateEntry(shape){
    if(shape >= 1 && shape <= 10){
        return true;
    }
    else{
        return false;
    }
}


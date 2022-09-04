const operation = ["multiply", "add", "divide"];

const calculator = (a: number, b: number, op: string) => {
  if (!operation.includes(op)) {
    console.log("this operation is not defined");
  }

  if (op ==="multiply") return a*b
  if (op ==="add") return a+b
  if (op ==="divide") {
    if(b===0){
        console.log("can`t divide by 0! sorry");
        return a/b   
    }
  }
};

calculator(1, 3, "add");

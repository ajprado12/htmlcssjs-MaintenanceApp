let garage = document.getElementById("garage");
const list = document.createElement("button");
let cars = document.getElementById("addCar");
cars.addEventListener("click", boton);
//cars.addEventListener("dblclick", borarBoton );
//let btn = document.createElement("button");
//btn.innerHTML = "Submit";
//btn.type = "submit";
//btn.name = "formBtn";
//document.body.appendChild(btn);

function boton() {
  let btn = document.createElement("input");
  btn.value = ("New Car");
  btn.type = "text";
  //btn.name = "formBtn";
  document.body.appendChild(btn);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "red";
  //deleteButton.style.boxShadow = "2px 5px black";
  document.body.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    btn.remove();
    deleteButton.remove();
  });
  
  btn.addEventListener("click", () => {
    //document.body.querySelector(".btn");
    //btn.textContent='New Text';
    btn.value=( '');
    console.log("ye");
  });
}
//function borarBoton (event) {
// let btn = document.getElementById("button");
// btn.remove ();
//  console.log("1");
//}

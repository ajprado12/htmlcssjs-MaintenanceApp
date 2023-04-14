let garage = document.getElementById("garage");
const list = document.createElement("input");
list.innerText = '';
let cars = document.getElementById("addCar");
cars.addEventListener("click", boton);
//for (let i=1; i<5; i++) {
  //cars.addEventListener("click", boton);
//}
/*function listCars () {
  let lista = document.getElementById('cars');
let carList = boton ();
lista.body.appendChild(carList);
}*/


function boton() {
let lista = document.getElementById('cars');
  //let forms = document.createElement("option");
  //forms.value = 'Type';
  //document.body.appendChild(forms);
  let entry = document.createElement("input");
  entry.placeholder = "New Car";

  entry.type = "text";
  //btn.name = "formBtn";
  lista.appendChild(entry);
  entry.addEventListener("click", () => {
    entry.value=('');
    console.log("ye");
  });
const form = document.createElement("input");
form.innerText = 'ye';
form.type = 'input';
lista.appendChild(form);
  const enterButton = document.createElement("button");
  enterButton.textContent = "O";
  enterButton.style.color = "white";
  enterButton.style.backgroundColor = "green";
  lista.appendChild(enterButton);
  enterButton.addEventListener("click", () => {
console.log('entered');
alert("Noice");
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "red";
  deleteButton.type = "submit";
  lista.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    entry.remove();
    enterButton.remove();
    deleteButton.remove();
    form.remove();
  });
}
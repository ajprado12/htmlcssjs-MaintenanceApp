let garage = document.getElementById("garage");
const list = document.createElement("button");
let cars = document.getElementById("addCar");
cars.addEventListener("click", boton);


function boton() {
  let entry = document.createElement("input");
  entry.value = ("New Car");
  entry.type = "text";
  //btn.name = "formBtn";
  document.body.appendChild(entry);
  const enterButton = document.createElement("button");
  enterButton.textContent = "O";
  enterButton.style.color = "white";
  enterButton.style.backgroundColor = "green";
  document.body.appendChild(enterButton);
  enterButton.addEventListener("click", () => {
console.log('entered');
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "red";
  document.body.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    entry.remove();
    enterButton.remove();
    deleteButton.remove();

  });

  
  entry.addEventListener("click", () => {
    entry.value=('');
    console.log("ye");
  });
}


let cars = {
  data: [
    {
      carName: "La Ferrari",
      carCategory: "ferrari",
      carPrice: "4.200.000",
      carImage: "./images/ferrari.jpg",
    },

    {
      carName: "Mercedes amg one",
      carCategory: "mercedes",
      carPrice: "2.700.000",
      carImage: "./images/mercedes.jpg",
    },
    {
      carName: "Bugatti divo",
      carCategory: "bugatti",
      carPrice: "5.800.000",
      carImage: "./images/bugatti.jpg",
    },
    {
      carName: "Astom Martin Valkyrie",
      carCategory: "astonMartin",
      carPrice: "3.500",
      carImage: "./images/astom.jpg",
    },
  ],
};

for (let car of cars.data) {
  // Create card
  let card = document.createElement("div");
  card.classList.add("card", car.carCategory, "hide");

  //Image
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", car.carImage);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  // car name
  let name = document.createElement("h5");
  name.classList.add("car-name");
  name.innerText = car.carName.toUpperCase();
  container.appendChild(name);

  //car price
  let price = document.createElement("h6");
  price.innerText = "$" + car.carPrice;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("cars").appendChild(card);
}

//Category
function filterCar(value) {
  let buttons = document.querySelectorAll(".buttons-btn");

  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search cars

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementsByClassName("search-input")[0].value;

  let elements = document.querySelectorAll(".car-name");

  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all cars
window.onload = () => {
  filterCar("all");
};

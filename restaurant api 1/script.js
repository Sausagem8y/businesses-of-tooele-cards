const apiURL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
let resultsArray = [];
const imagesContainer = document.querySelector(".images-container");
const wordBox = document.getElementById("word-box");

async function doThings() {
  const arrayOfThings = await fetch(
    "https://iskarr.github.io/austindonovan.github.io/api/business.json"
  );
  const places = await arrayOfThings.json();
  let flippy = places.business;
  let floppy = flippy;
  console.log(flippy[0].name);
  console.log(floppy);

  for (x in flippy) {
    console.log(x + " - " + JSON.stringify(flippy[x].name));
    // wordBox.innerHTML = x + " - " + JSON.stringify(flippy[x]);
    // cardContainer
    const card = document.createElement("div");
    card.classList.add("card");
    // image
    const image = document.createElement("img");
    image.src = flippy[x].imageurl;
    image.loading = "lazy";
    image.classList.add("card-img");
    // card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    // card Title
    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = flippy[x].name;
    // card text
    const cardText = document.createElement("p");
    cardText.textContent = flippy[x].description;
    // address
    const addressResult =
      flippy[x].address === undefined ? "" : flippy[x].address;
    const address = document.createElement("span");
    address.textContent = `${addressResult}`;
    // append the above

    cardBody.append(address, cardTitle, cardText);
    card.append(cardBody, image);
    wordBox.appendChild(card);

    // console.log(arrayOfThings);
    // console.log(places);
  }
}

// wordBox.textContent = JSON.stringify(places);
// wordBox.innerHTML = JSON.stringify(flippy);
// cardInfo = JSON.stringify(flippy);

// const cardTitle = business.name;
// const stringArray = arrayOfThings.stringify();
// const finish = JSON.stringify(places);
// console.log(arrayOfThings);
// console.log(places);
// console.log(JSON.stringify(arrayOfThings.address));
// console.log(stringArray);
// resultsArray += finish;
let i = 0;
function createCardElements(cardInfo) {
  // const currentArray = finish;
  cardInfo.forEach(() => {
    i++;
    if (i < cardInfo.length) {
      // card container
      const card = document.createElement("div");
      card.classList.add("card");
      // image
      const image = document.createElement("img");
      image.src = flippy.imageurl;
      image.loading = "lazy";
      image.classList.add("card-img");
      // card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      // card Title
      const cardTitle = document.createElement("h4");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = flippy.name;
      // card text
      const cardText = document.createElement("p");
      cardText.textContent = flippy.description;
      // address
      const addressResult = finish.address === undefined ? "" : flippy.address;
      const address = document.createElement("span");
      address.textContent = `${addressResult}`;
      // append the above
      cardContainer.append(address, cardTitle, cardText);
      cardBody.append(cardTitle, cardText);
      link.appendChild(image);
      card.append(link, cardBody);
      imagesContainer.appendChild(card);
    }
    // // card container
    // const card = document.createElement("div");
    // card.classList.add("card");
    // // image
    // const image = document.createElement("img");
    // image.src = places.imageurl;
    // image.loading = "lazy";
    // image.classList.add("card-img");
    // // card body
    // const cardBody = document.createElement("div");
    // cardBody.classList.add("card-body");
    // // card Title
    // const cardTitle = document.createElement("h4");
    // cardTitle.classList.add("card-title");
    // cardTitle.textContent = places.name;
    // // card text
    // const cardText = document.createElement("p");
    // cardText.textContent = business.description;
    // // address
    // const addressResult =
    //   business.address === undefined ? "" : business.address;
    // const address = document.createElement("span");
    // address.textContent = `${addressResult}`;
    // // append the above
    // cardContainer.append(address, cardTitle, cardText);
    // cardBody.append(cardTitle, cardText);
    // link.appendChild(image);
    // card.append(link, cardBody);
    // imagesContainer.appendChild(card);
  });
  createCardElements();
}

doThings();
// async function loadUpPage() {
//   let response = await fetch(
//     "https://iskarr.github.io/austindonovan.github.io/api/business.json"
//   );
//   let resultsArray = await response.json();
//   console.log(resultsArray);
//   createCardElements(resultsArray);
// }

// loadUpPage();

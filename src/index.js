let addToy = false;
const baseUrl = 'http://localhost:3001/toys'


document.addEventListener("DOMContentLoaded", () => {
  getToys()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// function getToys = () => {
//   document.querySelector('#toy-collection').innerHTML = ""
//   fetch('baseUrl')
//   .then((res) => res.json() )
//   .then(whatever => whatever.forEach(renderToy))
// }

function getToys() {
  return fetch('http://localhost:3000/toys')
  .then((res) => res.json() )
  .then (toys => toys.forEach(renderToy))
}

let configObj = {
  method: "POST", 
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json'
  }, 
  body: JSON.stringify("??")
}


const renderToy = (toy) => {
  let toyBox = document.querySelector('#toy-collection')

  // let card = document.createElement('div')
  //   card.className = "card"
  // let col = document.createElement('div')
  //   col.className = "col-sm-4"

  let card = document.createElement('div')
    card.classList.add('card', 'm-2')
    card.id = `toy-${toy.id}`

  let cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = toy.name

  let cardImage = document.createElement('img')
    cardImage.classList.add('toy-avatar')
    cardImage.src = toy.image
  
  // let cardBody = document.createElement('div')
  //   cardBody.classList.add('card-body')

  let cardLikes = document.createElement('p')
    cardLikes.classList.add('likes')
    cardLikes.textContent = toy.likes

  let likeButton = document.createElement('button')
    likeButton.classList.add('like-btn')
    likeButton.innerHTML = "Like"
    likeButton.addEventListener('click', () => {
        updateLikes(toy)
    })

  function updateLikes(toy){

    let likes = parseInt(document.getElementById(`footer-${pokemon.id}`).innerText.split(" ")[1])

    let newLikes = {
      likes: likes + 1
    }

    let reqPackage = {}
      reqPackage.headers = {"Content-Type": "application/json"}
      reqPackage.method = "PATCH"
      reqPackage.body = JSON.stringify(newLikes)

    
    
  }
  
  // let cardFooter = document.createElement('div')
  //   cardFooter.classList.add('card-footer', 'd-flex', 'justify-content-center')
  //   cardFooter.id = `footer-${toy.id}`
  //   // cardFooter.innerText = "Likes: " + toy.likes

  // cardFooter.addEventListener('click', () => {
  //   updateLikes(toy)
  // })

  // cardBody.append(cardTitle)
  card.append(cardTitle, cardImage, cardLikes, likeButton)
  // col.appendChild(card)
  toyBox.appendChild(card)

}


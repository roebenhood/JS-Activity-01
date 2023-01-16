class myJavaScriptClass {
    contructor(data) {
      this.data = data;
    }
  }
  let numberOfCards = 0;
  let elementStorage = ``;
  let dataArray = [];
  const bodyElement = document.getElementById("myHTMLbody");
  const data = [{ title: "Card Title", description: "Card Description" }];

  function incrementNumberOfCard(){
    numberOfCards++;
    console.log(numberOfCards);
    buildCardItem();
  }

  function decrementNumberOfCard() {
    numberOfCards--;
    console.log(numberOfCards);
    buildCardItem();
  }

  function buildCardItem(){
    elementStorage = ``;
    for(let i = 0; i < numberOfCards; i++){
        elementStorage += `
        <div class="card" style="width: 18rem">
            <img
            src="./assets/image/card-picture.png"
            class="card-img-top"
            alt="2 Dogs"
            />
        <div class="card-body">
          <h5 class="card-title">${data[0].title}</h5>
          <p class="card-text">${data[0].description}</p>
        </div>
            <span onclick="decrementNumberOfCard()" style="background-color: #dc3545; padding: 0.5em; color: white"
            >DELETE CARD</span>
      </div>
        `
    }
    elementStorage += `
    <div class="card" style="width: 18rem">
        <img src="./assets/image/add.png" class="card-img-top" alt="Add" />
            <span
            onclick="incrementNumberOfCard()"
            style="background-color: #35e146; padding: 0.5em"
            >ADD CARD</span
        >
     </div>
    
    `;
    bodyElement.innerHTML = elementStorage;
  }

  // model <----- card title and card description
  const jsClass = new myJavaScriptClass(data);
  // jsClass.render ?
  // jsClass.somethingsomething?
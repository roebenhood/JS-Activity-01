var initialValue = 0;
var elementStorage = ``;
const bodyElement = document.getElementById("myHTMLbody");
class myJavaScriptClass {
    constructor(dataObject) {
        this.dataObject = dataObject;
    }

    increment(){
        initialValue++;
    }
    decrement(){
        initialValue--;
    }
    
    getNumberOfCards(){
        return initialValue;
    }

    displayCards(){
        elementStorage = ``;
        for(let i=0; i < this.getNumberOfCards(); i++){
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
            <span onclick="updateCardTiles('delete')" style="background-color: #dc3545; padding: 0.5em; color: white"
            >DELETE CARD</span>
      </div>
        `
        }

        elementStorage += `
    <div class="card" style="width: 18rem">
        <img src="./assets/image/add.png" class="card-img-top" alt="Add" />
            <span
            onclick="updateCardTiles('add')"
            style="background-color: #35e146; padding: 0.5em"
            >ADD CARD</span
        >
     </div>
    
    `;
    bodyElement.innerHTML = elementStorage;
    }
  }
  const data = [
    { title: 'Card Title1', description: 'Card Description1' }
  ];
  const jsClass = new myJavaScriptClass(data);
  
  function updateCardTiles(data){
    if(data === 'add'){
        jsClass.increment();
    } else {
        jsClass.decrement();
    }
    jsClass.displayCards();
  }
  // jsClass.somethingsomething?
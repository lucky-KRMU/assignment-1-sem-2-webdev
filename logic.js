let form = document.getElementById("event-form");

let title = document.getElementById("title");
let date = document.getElementById("date");
let category = document.getElementById("category");
let description = document.getElementById("Description");
let submitBtn = document.getElementById("submit-btn");


let gridCard = document.getElementById("grid-card");

let cancelBtn = document.querySelectorAll(".cancel-btn");

let cardArray = [];
let cardDetails = [];

let titleValue = title.value;
let dateValue = date.value;
let categoryValue = category.value;
let descriptionValue = description.value;

let gridCardContent = gridCard.innerHTML;

let key = 0;
let head = 0;

let newArray = [];

let card;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(gridCardContent);
})

const display = () => {
    gridCard.innerHTML = '';
    // cardArray.map((e)=> gridCard.innerHTML+=e);
    Object.entries(cardObj).map(([key,value]) => gridCard.innerHTML+=value);
}

const populate = () => {
    
    key = 0

    cardArray = [];
    
    cardDetails.forEach(card => {
        let cardTemplate = `<div class="card">
        <button class="cancel-btn" id="${key}">&#x274C;</button>
        <h4>${card.title}</h4>
        <p class="date">&#128197; ${card.date}</p>
        <br>
        <label>${card.category}</label>
        <p class="des">${card.description}</p>
        </div>`;
        cardArray.push(cardTemplate);
        key+=1;
    })
    
    
    gridCard.innerHTML = '';
    cardArray.map((e)=>{
        gridCard.innerHTML += e;
    })
}

submitBtn.addEventListener('click', ()=>{

    titleValue = title.value;
    dateValue = date.value;
    categoryValue = category.value;
    descriptionValue = description.value;

    let cardObj = {
        "title":titleValue,
        "date":dateValue,
        "category":categoryValue,
        "description":descriptionValue,
    }

    card = `<div class="card">
                    <button class="cancel-btn" id="${key}">&#x274C;</button>
                    <h4>${cardObj.title}</h4>
                    <p class="date">&#128197; ${cardObj.date}</p>
                    <br>
                    <label>${cardObj.category}</label>
                    <p class="des">${cardObj.description}</p>
                </div>`;
    // cardArray.push(card);
    cardDetails.push(cardObj);
    console.log(cardDetails)
    populate();
    // key+=1;
    // gridCard.innerHTML+=card;
    // display();
    // console.log(cardObj)

    cancelBtn = document.querySelectorAll(".cancel-btn");
    console.log(cancelBtn);
    // cancelBtn.forEach(btn => {
    //     btn.addEventListener('click', (e)=>{
    //         console.log(btn.id);
    //         // head = String(btn.id)
    //         // cardArray.splice(head, 1);
    //         // delete cardObj.head
    //         // console.log(updatedCardArray);
    //         // console.log(cardArray);
    //         // display();
    //         // e.target.parentElement.remove();
    //         cardDetails.splice(btn.id, 1);
    //         populate();
    //     })
    // })
    cancelBtnFunc();
    
    // title.value = '';
    // date.value = '';
    // description.value = '';
})

cancelBtn = document.querySelectorAll(".cancel-btn");
const cancelBtnFunc = () =>{
    cancelBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            cardDetails.splice(btn.id, 1);
            populate();
        })
    })
}


cancelBtnFunc();

console.log(cancelBtn);

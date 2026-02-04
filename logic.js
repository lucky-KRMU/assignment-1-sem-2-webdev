let form = document.getElementById("event-form");

let title = document.getElementById("title");
let date = document.getElementById("date");
let category = document.getElementById("category");
let description = document.getElementById("Description");
let submitBtn = document.getElementById("submit-btn");


let gridCard = document.getElementById("grid-card");


let titleValue = title.value;
let dateValue = date.value;
let categoryValue = category.value;
let descriptionValue = description.value;

let gridCardContent = gridCard.innerHTML;



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(gridCardContent)

    

    // title.value = '';
    // date.value = '';
    // description.value = '';
})

submitBtn.addEventListener('click', ()=>{
    let card = `<div class="card">
                    <h4>${titleValue}</h4>
                    <p class="date">&#128197; ${dateValue}</p>
                    <br>
                    <label>${categoryValue}</label>
                    <p class="des">${descriptionValue}</p>
                </div>`;

    gridCard.innerHTML += card;
})

let form = document.getElementById("event-form");

let title = document.getElementById("title");
let date = document.getElementById("date");
let category = document.getElementById("category");
let description = document.getElementById("Description");

let titleValue = title.value;
let dateValue = date.value;
let categoryValue = category.value;


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    title.value = '';
    date.value = '';
    description.value = '';
})

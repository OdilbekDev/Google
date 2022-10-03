let elForm = document.querySelector('.form')
let elInput = document.querySelector('.input')
let elResult = document.querySelector('.result')
let elPhoto = document.querySelector('.result__photo')


let elClear = document.querySelector('.clear')

elForm.addEventListener('submit', (e)=>{
    e.preventDefault()


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cf1865176cmsh564f6ed7b7fa5ccp1a59a3jsn28c23ced4c4a',
            'X-RapidAPI-Host': 'google-search64.p.rapidapi.com'
        }
    };
    fetch(`https://google-search64.p.rapidapi.com/?query=${elInput.value}}&max=20`, options)
        .then(response => response.json())
        .then(response => mapper(response.results))

})


function mapper(data) {
    data.map((e,i)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `
    <a href="${e.url}">
    <div class="result__item">
        <p>${e.url}/</p>
        <h3>${e.title}</h3>
        <span>${e.description}</span>
    </div></a>`
        elResult.appendChild(newLi)
    })
    console.log(data);
}

elClear.addEventListener('click', ()=>{
    elInput.value = ""
})
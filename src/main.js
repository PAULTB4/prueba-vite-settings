import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
<h1> TB</h1>   
<form>
<label>Nombre</label>
<input type"email">
<button id="clickMe" type="button" > clickme</button>
</form>

<div id="answer"> 

</div>

<a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
`;

let counter = 0;
const btnClick = document.querySelector("#clickMe")
const divAnsw = document.querySelector("#answer");

btnClick.addEventListener("click", () => {
    counter++;
    divAnsw.innerHTML = counter;
});
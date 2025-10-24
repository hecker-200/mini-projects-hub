const guess = document.getElementById('gas');
const btn = document.getElementById('bandh');
const input = document.getElementById('andar');
const prev = document.getElementById('prev');
const num = Math.floor((Math.random()* 100)) + 1;

const bton = document.getElementById('btn');

console.log(num);


let y = [];
let x = 10;

guess.textContent = `GUESSES REMAINING : ${x}`
prev.textContent = `previous guesses : ${y}`

btn.addEventListener('click' ,(e) => {

  

  const k = Number(input.value);

  
  
  if(k < 1 || k > 100 || isNaN(k) || k == ''){
    alert("Enter a number between 1 and 100!");
    input.value = "";
    return;
  }

  if(k == num){
    window.location.href = "./win.html"
  }

  else{
    x--;
    guess.textContent = `GUESSES REMAINING : ${x}`
    input.value = "";
    y.push(k);
    prev.textContent = `previous guesses : ${y}`

    if(x === 0){
      window.location.href = "./lose.html";
    }
  }

  
  
  
})

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btn.click(); 
  }
});



bton.addEventListener('click' ,()=>{

  window.location.href = '../index.html'
})
``



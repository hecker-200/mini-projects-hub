const hourhand = document.getElementById('hour');
const minhand = document.getElementById('minute');
const sechand = document.getElementById('second');
const dig = document.getElementById('digital-time');

let x = false; // global toggle state
let pm = 'AM'; // global label

function updatetime() {
  const abhi = new Date();
  const h = abhi.getHours() % 12;
  const m = abhi.getMinutes();
  const s = abhi.getSeconds();

  if(h == 12 && m == 0 && s == 0){
    x = !x; // toggle like a boss
  }

  pm = x ? 'PM' : 'AM';

  const secondsdeg = s * 6;
  const minutesdeg = (m * 6) + (s * 0.1);
  const hoursdeg = (h % 12) * 30 + (m * 0.5);

  hourhand.style.transform = `translateX(-50%) rotate(${hoursdeg}deg)`;
  minhand.style.transform = `translateX(-50%) rotate(${minutesdeg}deg)`;
  sechand.style.transform = `translateX(-50%) rotate(${secondsdeg}deg)`;


  dig.textContent = `${abhi.toLocaleTimeString()} ${pm} `;
}


setInterval(updatetime,1000);
updatetime();


const bgchange = document.getElementById('themeDropdown');
const body = document.body;

bgchange.addEventListener('change', () => {
  const x = bgchange.value ;

  if(x === 'carbon'){
  body.style.background = 'linear-gradient(145deg, #0D0D0D 0%, #1A1A1A 40%, #2E2E2E 100%)'; 
  // Gunmetal carbon with polished shadow tones
}

if(x === 'crimson'){
  body.style.background = 'linear-gradient(145deg, #0A0000 0%, #2A0005 40%, #600000 80%, #1A0000 100%)';
  // Blood silk meets obsidian — seductive and royal
}

if(x === 'sapphire'){
  body.style.background = 'linear-gradient(145deg, #000819 0%, #001A3A 40%, #002B50 70%, #00335B 100%)';
  // Deep royal ocean — elegant, calm, infinite
}

if(x === 'onyx'){
  body.style.background = 'linear-gradient(145deg, #000000 0%, #1A0F00 45%, #4A3500 80%, #8C6B1A 100%)';
  // Black gold energy — ancient, rich, immortal
}

if(x === 'obsidian'){
  body.style.background = 'linear-gradient(145deg, #030303 0%, #1B1205 35%, #3C2500 70%, #A67C00 100%)';
  // The molten heart of a crown jewel
}

if(x === 'emerald'){
  body.style.background = 'linear-gradient(145deg, #001009 0%, #002414 35%, #00462A 75%, #007047 100%)';
  // The king’s garden under moonlight
}

if(x === 'graphite'){
  body.style.background = 'linear-gradient(145deg, #111111 0%, #1C1C1C 40%, #303030 80%, #4A4A4A 100%)';
  // Dark platinum polish — silent power
}

if(x === 'nebula'){
  body.style.background = 'linear-gradient(150deg, #00020F 0%, #1A0033 35%, #2E003E 70%, #4B1B1B 100%)';
  // The cosmic empire — a galaxy forged in royal flame
}



  

})



























const divHex = document.querySelector('.hex');
const divRgb = document.querySelector('.rgb');

function randomColorHex() {
  const hex = ((Math.random() * 0xffffff) << 0).toString(16);
  divHex.style.backgroundColor = `#${hex}`;
  divHex.firstChild.textContent = `#${hex}`;
  return `#${hex}`;
}

function randomColorRgb() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const rgb = `${r},${g},${b}`;
  divRgb.style.backgroundColor = `rgb(${rgb})`;
  divRgb.firstChild.textContent = `rgb(${rgb})`;
}

randomColorRgb();
randomColorHex();

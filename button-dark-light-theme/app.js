const icon = document.querySelector('#icon');
const body = document.body

icon.addEventListener('click', () => {
  icon.classList.toggle('moon');
  if(icon.classList == 'moon') body.style.backgroundColor = '#333333'
  else body.style.backgroundColor = '#f0f0f2';
});

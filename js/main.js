const switchT = document.querySelector('.switchT');
const toggleT = document.querySelector('.toggleT');

toggleT.addEventListener('click', () => {
    switchT.classList.toggle('dark');
})
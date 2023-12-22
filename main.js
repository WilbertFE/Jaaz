
const toggle = document.querySelector('#menu-toggle');
const navigasi = document.querySelector('#navigasi');
const spans = document.querySelectorAll('.spans')

toggle.addEventListener('click', function(){
    navigasi.classList.toggle('right-0');
    navigasi.classList.toggle('opacity-100');
    toggle.classList.add('bg-blue-900');
    spans[0].classList.toggle('rotate-45');
    spans[2].classList.toggle('-rotate-45');
    spans[0].classList.toggle('-translate-x-[1px]');
    spans[0].classList.toggle('-translate-y-[1px]');
    spans[2].classList.toggle('-translate-x-[1px]');
    spans[1].classList.toggle('opacity-0');
    for(let i=0; i<spans.length; i++){
        spans[i].classList.toggle('bg-red-600');
    }
    setTimeout(() => {
        toggle.classList.remove('bg-blue-900');
    }, 200);
});
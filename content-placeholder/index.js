const header = document.getElementById('header');
const title = document.getElementById('title');
const exerpt = document.getElementById('exerpt');
const profile_img = document.getElementById('profile_img');
const name1 = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    exerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name1.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
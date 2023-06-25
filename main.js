'use strict';
import './style.css';

// const password = document.getElementById('input-password');
// const showPassword = document.getElementById('show-password');

// let hidePassword = true;

// password.addEventListener('click', function (e) {});

// showPassword.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (!hidePassword) {
//     password.type = 'text';
//     hidePassword = !hidePassword;
//   } else {
//     password.type = 'password';
//     hidePassword = !hidePassword;
//   }
// });

// const showForm = document.getElementById('show-form');
// const form = document.getElementById('form');

// showForm.addEventListener('click', function () {
//   form.classList.toggle('hidden')
//   form.classList.toggle('flex')
// });

// const sidebar = document.getElementById('sidebar');

// const openSidebar = document.getElementById('open-sidebar');
// const overlay = document.getElementById('overlay');
// const showSidebar = document.getElementById('show-sidebar');

// showSidebar.addEventListener('click', function () {
//   sidebar.classList.toggle('hidden');
//   sidebar.classList.toggle('flex');
//   overlay.classList.toggle('hidden');
//   overlay.classList.toggle('flex');
// });

// openSidebar.addEventListener('click', function () {
//   sidebar.classList.toggle('hidden');
//   sidebar.classList.toggle('flex');
//   overlay.classList.toggle('hidden');
//   overlay.classList.toggle('flex');
// });

// Checking if it is the homepage so i can hide the breadcrumbs

const current = window.location.pathname;

if (current === '/' || current === '/index.html') {
  console.log('Is the homepage.');
} else {
  console.log('Is not the homepage.');
}

//  Dropdown menu, show/hide based on menu state.

//   Entering: "transition ease-out duration-100"
//     From: "transform opacity-0 scale-95"
//     To: "transform opacity-100 scale-100"
//   Leaving: "transition ease-in duration-75"
//     From: "transform opacity-100 scale-100"
//     To: "transform opacity-0 scale-95"

const menuButton = document.querySelectorAll('.menu-button');
const dropDown = document.querySelectorAll('.drop-down_click');
console.log(dropDown);
console.log(menuButton);

// menuButton.addEventListener('click', e => {
//   console.log(e.target.closest('#drop-down'));
//   // if (e.target.closest(dropDown)) {
//   //   console.log('Works');
//   // } else {
//   //   console.log(`Doesn't Works`);
//   // }
// });

// let open = true;
// let open2 = true;

let open = true;
menuButton.forEach(btn => {
  btn.addEventListener('click', e => {
    const parent = e.target.parentElement;
    const parentSibling = parent.nextElementSibling;
    if (open) {
      parentSibling.classList.add(
        'opacity-100',
        'scale-100',
        'transition',
        'ease-out',
        'duration-100'
      );
      parentSibling.classList.remove('opacity-0', 'scale-95');
      open = !open;
    } else {
      parentSibling.classList.remove(
        'opacity-100',
        'scale-100',
        'transition',
        'ease-out',
        'duration-100'
      );
      parentSibling.classList.add(
        'opacity-0',
        'scale-95',
        'transition',
        'ease-in',
        'duration-75'
      );
      open = !open;
    }
  });
});

const url = window.location.href;
// const urlPath = window.location.pathname;
// const homePage = window.location.host;
// console.log(url);
// console.log(urlPath);
// console.log(homePage);

// const breadcrumbsUrl = `${homePage}${urlPath}`;
// console.log(breadcrumbsUrl);

////// Breadcrumbs try
// const path = '/components/application-ui/forms/select-menus'
// const split = path.split('/')
// console.log(split);
// const filteredSplit = split.filter(fil => {
//   if (!fil) return
//   return fil
// })

// console.log(filteredSplit);

// const selectButton = document.getElementById('select-menu_button');
// const selectName = document.querySelectorAll('.select-name');
// const selectMenu = document.querySelector('.selectMenu');
// console.log(selectName);

// const fillHTML = function (element) {
//   const selectHtml = `<span class="block truncate">${element.textContent}</span>
// <span
//   class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
// >
//   <svg
//     class="h-5 w-5 text-gray-400"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path
//       fill-rule="evenodd"
//       d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
//       clip-rule="evenodd"
//     />
//   </svg>
// </span>`;

//   return selectHtml;
// };

// selectMenu.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.select-name');
//   console.log(clicked);

//   // Guard Clause
//   if (!clicked) return;

//   const child = clicked.firstElementChild;
//   console.log(child);
//   selectButton.innerHTML = fillHTML(child);

//   const children = selectMenu.children;
//   console.log(children);
// });

// const triggerSelectMenuAnimation = function () {
//   console.log('Button');
// };

// let state = true

// selectButton.addEventListener('click', function (e) {
//   if (state) {
//     selectMenu.classList.remove('opacity-0', 'transition', 'ease-in',  'duration-100')
//     selectMenu.classList.add('opacity-100')
//     state = !state
//   } else {
//     selectMenu.classList.remove('opacity-100')
//     selectMenu.classList.add('opacity-0', 'transition', 'ease-in',  'duration-100')
//     state = !state
//   }
//   console.log('Button');
// });

// const ratings = 4.3

// const calculateRating = function (rating) {
//   const ratingPercentage = rating * 72
//   return ratingPercentage + 'deg'
// }
// const root = document.documentElement;

// root.style.setProperty('--progress', calculateRating(ratings));

// const circleText = document.querySelector('.circle-text')

// circleText.textContent = ratings
// const colorList = ['red', 'green', 'blue', 'gray', 'yellow']

// const randomColor = function(colorArr) {
//   const totalColorList = colorArr.length - 1

// }

// const randomNumber = function() {

// }

// randomColor(colorList)

// document.querySelector('#ola').addEventListener('click', e => {
//   const target = e.currentTarget;
//   target.classList.add(`bg-red-${randomNumber()}00`);
//   target.classList.remove('bg-black');
//   console.log(target);
// });

// document.querySelector('#tobi').addEventListener('click', (e) => {
//   e.stopPropagation()
//   const target = e.currentTarget
//   target.classList.add('bg-blue-700')
//   target.classList.remove('bg-green')
//   console.log(target);
// })

// let event, target
// document.querySelector('#tobi').addEventListener('click', e => {
//   event = e;
//   console.log(event);
//   target = event.currentTarget;

//   handlePropagation({
//     classNameAdded: 'bg-blue-700',
//     classNameRemoved: 'bg-green',
//   });
// });

// document.querySelector('body').addEventListener('click', e => {
//   const target = e.currentTarget;
//   target.classList.add('opacity-0');
// });

// document.querySelector('#element').addEventListener();

// const handlePropagation = function ({
//   classNameAdded: classNameAdded,
//   classNameRemoved: classNameRemoved,
// }) {
//   event.stopPropagation();
//   target.classList.add(classNameAdded);
//   target.classList.remove(classNameRemoved);
//   console.log(target);
// };

document.querySelector('.minus').addEventListener('click', e => {
  const target = e.currentTarget;
  const parent = target.parentElement;
  const input = parent.querySelector('input');
  const inputValue = input.value;
  const inputValueNumber = Number(inputValue);
  if (inputValueNumber === 1) {
    alert('The minimum order is 1');
    return;
  }
  const newInputValue = inputValueNumber - 1;
  input.value = newInputValue;
});

document.querySelector('.plus').addEventListener('click', e => {
  const target = e.currentTarget;
  const parent = target.parentElement;
  const input = parent.querySelector('input');
  const inputValue = input.value;
  const inputValueNumber = Number(inputValue);
  if (inputValueNumber >= 25) {
    alert('You can only order 25 items');
    return;
  }
  const newInputValue = inputValueNumber + 1;
  input.value = newInputValue;
});

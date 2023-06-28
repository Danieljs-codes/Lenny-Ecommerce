const sidebarTrigger = document.getElementById('show-sidebar');
// console.log(sidebarTrigger);
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openSidebar = document.getElementById('open-sidebar');

sidebarTrigger.addEventListener('click', function (e) {
  sidebar.classList.remove('translate-x-0');
  sidebar.classList.add('translate-x-full');
  overlay.classList.add('hidden');
});

openSidebar.addEventListener('click', e => {
  sidebar.classList.add(
    'translate-x-0',
    'transition',
    'ease-in-out',
    'duration-300'
  );
  sidebar.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
  console.log(sidebar);
});

console.log('RUNNING ON PORT 5173');



const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

const randomName = Math.floor(Math.random * names.length);
const arrayName = names[randomName] ;
para.textContent = randomName;
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);

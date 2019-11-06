console.log('toto');
// mes arrays
const jours = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const actObj = [{ nom: 'sport', couleur: 'rgb(168, 62, 102)' }, { nom: 'musique', couleur: 'rgb(140, 145, 71)' }, { nom: 'yoga', couleur: 'rgb(242, 120, 79)' },
  { nom: 'méditation', couleur: 'rgb(94, 133, 164)' }, { nom: 'sieste', couleur: 'rgb(136, 100, 136)' }];

// mes fonctions

// pour ajouter l'event listener sur l'élément
function changeOnClick(el, color) {
  el.addEventListener('click', (e) => {
    if (e.target.style.backgroundColor === '') {
      e.target.style.backgroundColor = color;
    } else {
      e.target.style.backgroundColor = null;
    }
  }, false);
}


// créer les tr et td
function createAct(arr, table) {
  for (const el of arr) {
    const tr = document.createElement('tr');
    // tr.innerHTML = `<h4 style="margin:17px 10px;">${el.nom}</h4>`;
    const td1 = document.createElement('td');
    td1.innerHTML = `<h4 style="margin:17px 10px;">${el.nom}</h4>`;
    tr.appendChild(td1);

    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      td.style.backgroundColor = null;
      td.style.fontSize = '40px';
      changeOnClick(td, el.couleur);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

// créer les th
function createTh(arr, table) {
  for (const el of arr) {
    const th2 = document.createElement('th');
    th2.innerText = el;
    table.appendChild(th2);
  }
}

// code principal
const app = document.getElementById('app');
const table = document.createElement('table');
const th = document.createElement('th');
th.innerText = ' ';
table.appendChild(th);
createTh(jours, table);
createAct(actObj, table);
app.appendChild(table);


/*
var a = prompt('quel prénom ?');

window.localStorage.setItem('prenom', a);

var prenom = localStorage.getItem('prenom');

if (prenom) {
  console.log(`Bonjour ${prenom}`);
}
*/

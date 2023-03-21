// Definirea dicționarului de opțiuni și sub-opțiuni
var options = {
  "Optiune1": {
    "Suboptiune1": "Valoarea sub-opțiunii 1 din Optiunea 1",
    "Suboptiune2": "Valoarea sub-opțiunii 2 din Optiunea 1"
  },
  "Optiune2": {
    "Suboptiune3": "Valoarea sub-opțiunii 3 din Optiunea 2",
    "Suboptiune4": "Valoarea sub-opțiunii 4 din Optiunea 2"
  },
  "Optiune3": {
    "Suboptiune5": "Valoarea sub-opțiunii 3 din Optiunea 2",
    "Suboptiune6": "Valoarea sub-opțiunii 4 din Optiunea 2"
  }
};

// Obținerea referinței la elementele HTML select
var mainSelect = document.getElementById("mainDropdown");
var subSelect1 = document.getElementById("subDropdown1");
var subSelect2 = document.getElementById("subDropdown2");

// Adăugarea fiecărei opțiuni în primul element select
var defaultOptionAdded = false;
for(var option in options) {
  var el = document.createElement("option");
  el.textContent = option;
  mainSelect.appendChild(el);
  el.classList.add('sal');
  // Verificarea dacă opțiunea implicită a fost deja adăugată
  if(!defaultOptionAdded) {
    // Adăugarea opțiunii implicite "Selectează opțiunea" doar prima dată
    var defaultOption = document.createElement("option");
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.hidden = true;
    defaultOption.textContent = "Selectează opțiunea";
    mainSelect.insertBefore(defaultOption, mainSelect.firstChild);
    defaultOptionAdded = true;
  }
}

// Adăugarea unui eveniment de ascultare pentru schimbarea selecției în primul element select
mainSelect.addEventListener("change", function() {
  // Obținerea valorii selectate din primul element select
  var selectedOption = mainSelect.value;
  // Golirea elementului select pentru sub-opțiuni 1
  subSelect1.innerHTML = "";
  // Adăugarea fiecărei sub-opțiuni în al doilea element select pentru sub-opțiuni 1
  for(var subOption in options[selectedOption]) {
    var el = document.createElement("option");

    el.textContent = subOption;
    subSelect1.appendChild(el);
 
  }
  // Golirea elementului select pentru sub-opțiuni 2
  subSelect2.innerHTML = "";
  // Adăugarea fiecărei sub-opțiuni în al doilea element select pentru sub-opțiuni 2
  for(var subOption in options[selectedOption]) {
    var el = document.createElement("option");
    el.textContent = subOption;
    subSelect2.appendChild(el);
  }

    // Afișarea elementelor subDropdown1, subDropdown2 și submitButton dacă este selectată o opțiune
    if (selectedOption) {
      subSelect1.style.display = "inline-block";
      subSelect2.style.display = "inline-block";
      submitButton.style.display = "inline-block";
    } else {
      subSelect1.style.display = "none";
      subSelect2.style.display = "none";
      submitButton.style.display = "none";
    }
});


var Animale = {
  "1": "rata",
  "2": "porc",
  "3": "gaine",
  "4": "apa2",
  "5": "porc1",
  "6": "gaine3",
  "7": "apa5"
};


// Declarați o variabilă în care să țineți evidența sub-opțiunilor selectate anterior
var selectedOptions = [];


function getRandomAnimal() {
  var keys = Object.keys(Animale);
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  return Animale[randomKey];

  
}


submitButton.addEventListener("click", function() {
  var animal = getRandomAnimal();
    // var animal = Animale[Math.floor(Math.random() * Object.keys(Animale).length) + 1];
    // Obținerea valorilor selectate din cele două elemente select pentru sub-opțiuni
    var subOption1 = subSelect1.value;
    var subOption2 = subSelect2.value;
  
    // Verificarea dacă cele două sub-opțiuni au mai fost selectate anterior
    var hasSelected = false;
    for (var i = 0; i < selectedOptions.length; i++) {
      if (
        (selectedOptions[i][0] === subOption1 && selectedOptions[i][1] === subOption2) ||
        (selectedOptions[i][0] === subOption2 && selectedOptions[i][1] === subOption1)
      ) {
        hasSelected = true;
        break;
      }
    }
  
    // Dacă cele două sub-opțiuni au mai fost selectate anterior, afișați un mesaj de alertă
    if (hasSelected) {
      alert("Cele două sub-opțiuni au fost deja selectate.");
    } else {
      // Adăugarea perechii de sub-opțiuni selectate la variabila selectedOptions
      selectedOptions.push([subOption1, subOption2]);
  
      // Crearea unui nou element div pentru a afișa valorile selectate
      var resultDiv = document.createElement("div");
      resultDiv.textContent = "A fost selectat: " + subOption1 + " și " + subOption2 + " cu animalul: " + animal;
      // Adăugarea elementului div la pagina HTML
      document.body.appendChild(resultDiv);
    }
  });

  // Crearea unui buton "Șterge tot"
var deleteButton = document.createElement("button");
deleteButton.textContent = "Șterge tot";
deleteButton.addEventListener("click", function() {
  // Ștergerea tuturor elementelor create
  var resultDivs = document.querySelectorAll("div");
  for (var i = 0; i < resultDivs.length; i++) {
    document.body.removeChild(resultDivs[i]);
  }
  // Resetarea listei de opțiuni selectate
  selectedOptions = [];
});
// Adăugarea butonului "Șterge tot" la pagina HTML
document.body.appendChild(deleteButton);


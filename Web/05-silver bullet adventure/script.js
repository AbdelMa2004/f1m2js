const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopWest = document.getElementById('knopWest');
const knopZuid = document.getElementById('knopZuid');

let directionButtons = {
   "noord": document.getElementById('knopNoord'),
   "oost": document.getElementById('knopOost'),
   "west": document.getElementById('knopWest'),
   "zuid": document.getElementById('knopZuid')
}

let current_index = 0;

let lokaties = [ // Array
    { //0 = Object
        "titel":"Ingang Silver Bullet",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    },
    { //1 = Object
        "titel":"Gang bij docentenkamer",
        "image":"img/1.jpg",
        "directions": { // Object
            "noord": 1,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "titel":"Gang voor de trap",
        "image":"img/2.jpg",
        "directions": {
            "oost": 1,
            "zuid": 3

        }
    },
    {
        "titel":"Kleine ruimte",
        "image":"img/3.jpg",
        "direction": {
            "noord": 2
        }
        
    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg",
        "direction": {
            "noord": 1
        }
        
    },{
        "titel":"plaats 5",
        "image":"img/5.jpg",
        "directions": {
            "noord": 10,
            "west": 1,
            "oost": 6
        } 
    },{
        "titel":"plaats 6",
        "image":"img/6.jpg",
        "direction": {
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },{
        "titel":"plaats 7",
        "image":"img/7.jpg",
        "direction": {
            "noord": 9,
            "west": 6,
            "zuid": 8
        }
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg",
        "direction": {
            "noord": 7
        }
    },
    {
        "titel":"Lokaal bij 0.92",
        "image":"img/9.jpg",
        "direction": {
            "west": 10,
            "zuid": 7
        }
    },
    {
        "titel":"Lokaal bij 0.90",
        "image":"img/10.jpg",
        "direction": {
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "titel":"Toiletten",
        "image":"img/11.jpg",
        "direction": {
            "noord": 6
        }
    }
];

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    //Knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // Haal de mogelijke directions op voor current_index
    let possible = lokaties[current_index].directions;

    // Zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);
    // Zet de keys op van de buttons een aparte variabele
    let button_keys = Object.keys(directionButtons)
    //Zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }
    // Zet nu de mogelijke knoppen (directions)
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible'
    }
}

function getInput(){
    show(myInput.value);
   myInput.value = "";
   myInput.focus();
}
function goDirection (direction){
    let punt_index = lokaties[current_index].directions[direction];
    show(punt_index)
}

show(0);

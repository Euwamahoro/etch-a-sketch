let availableKeyWords = [
    'live score',
    'premier league',
    'serie a',
    'la liga',
    'bundesliga',
    'transfer news',
    'ucl',
    'europa league',
    'top scorers',
    'lionel messi',
    'cristian ronaldo',
    'haaland',
    'mbappe',
    'bellingham',
    'man u',
    'barca',
    'man city',
    'chelsea',
    'liverpool',
    'psg',
    'guardiola',
    'kloop',
    'ten haag'

];

const resultsBox = document.querySelector(".results");
const inputBox = document.getElementById("search-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeyWords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);       
    }
    display(result);

    if(!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

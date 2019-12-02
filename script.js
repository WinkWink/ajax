

document.getElementById('ajax-fruit').onsubmit = function() { 
    var e = document.getElementById("fruit");
    var fruitChosen = e.options[e.selectedIndex].value;
    
    $.getJSON('http://amandawinkler.space/fruits.json',function(data){
        function makeGraph (fruit){
            console.log(data[fruit]['name']);
        }

        makeGraph(fruitChosen);
});
    return false;

};

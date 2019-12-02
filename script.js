

document.getElementById('ajax-fruit').onsubmit = function() { 
    var e = document.getElementById("fruit");
    var fruitChosen = e.options[e.selectedIndex].value;
    $.getJSON('http://amandawinkler.space/fruits.json',function(data){
    var appleName = data[0]['name'];
    if (appleName === fruitChosen) {
        console.log('you choose and app');
    }else{
        console.log('you choose not the right fruit u dumbo')
    }
});
    return false;

};

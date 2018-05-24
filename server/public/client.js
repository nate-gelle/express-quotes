$(document).ready(readyNow);

function readyNow(){
    console.log('in ready now');
    getQuotes;
}

function displayQuotes(quotes){
    let el = $('#inspiration');
    el.empty();
    for(quote of quotes){
        el.append('<li>' + quote + '</li>');
    }
    
}

function getQuotes(){
    console.log('in get quotes');
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then( function(response){
        console.log('back from server', response);
        displayQuotes(response);
    });    
}
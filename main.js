var x = [
    {
        quote: "“A room without books is like a body without a soul.”",
        auther: "― Marcus Tullius Cicero",
    },
    {
        quote: "“Be yourself; everyone else is already taken.”",
        auther: "― Oscar Wilde",
    },
    {
        quote: "“So many books, so little time.”",
        auther: "― Frank Zappa",
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        auther: "― Elbert Hubbard",
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        auther: "― Oscar Wilde",
    },
]


var newIndex;
var lastIndex;

var displayQuoes=[];

function getNewQuotes() {
    if(displayQuoes.length==x.length)
    {
        displayQuoes= [];
    }
    
    //*generate random 
    do{
        newIndex = Math.floor(Math.random() * x.length);
    }while(newIndex==lastIndex||displayQuoes.includes(newIndex));
    lastIndex=newIndex;
    displayQuoes.push(newIndex);
    
    document.getElementById("quote").innerHTML = x[newIndex].quote;
    document.getElementById("auther").innerHTML = x[newIndex].auther;

}




const getQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => dataQuote(data))
}

const dataQuote = (quote) =>{
    console.log(quote);
    const blockQuote = document.getElementById('block-quote');
    blockQuote.innerText = quote.quote;
}

getQuote();
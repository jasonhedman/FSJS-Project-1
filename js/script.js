// FSJS - Random Quote Generator

// Creates array of quote objects and stores the array in the variable quotes
var quotes = [
    {
        quote: "High expectations are the key to absolutely everything.",
        source: "Sam Walton",
        citation: "Twitter",
        title: "CEO of Walmart"
    },
    {
        quote: "Life is fragile. We’re not guaranteed a tomorrow so give it everything you’ve got.",
        source: "Tim Cook",
        year: 2017,
        title: "CEO of Apple"
    },
    {
        quote: "Without passion, you don’t have any energy, and without energy, you simply have nothing.",
        source: "Donald Trump",
        citation: "Instagram",
        title: "CEO of the Trump Organization"
    },
    {
        quote: "Rule No. 1: Never lose money; Rule No. 2: Don’t forget Rule No. 1.",
        source: "Warren Buffet",
        title: "CEO of Birkshire Hathaway"
    },
    {
        quote: "You don’t need to be a genius or a visionary, or even a college graduate for that matter, to be successful. You just need framework and a dream.",
        source: "Michael Dell",
        citation: "Speech",
        year: 2016,
        title: "CEO of Dell"
    }
];


// Creates a random number from 0 to 4 and uses that number to index a random item of an array

function getRandomQuote(array) {
    var random = Math.floor(Math.random() * 5);
    return array[random];
}

// Declares a function that gets a random quote and uses the quote's values to form new HTML content to put in the quote block
function printQuote() {
    var body = document.getElementById('body'),
        quote = getRandomQuote(quotes),
        response = "";
    body.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    response += '<p class="quote">' + quote.quote + '</p>';
    response += '<p class="source">' + quote.source;
    response += '<span class="title">' + ", " + quote.title + '</span>';
    if (quote.citation) {
        response += '<span class="citation">' + quote.citation + '</span>';
    }
    if (quote.year) {
        response += '<span class="year">' + quote.year + '</span>';
    }
    response += '</p>';
    document.getElementById('quote-box').innerHTML = response;
    setTimeout(printQuote, 5000);
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

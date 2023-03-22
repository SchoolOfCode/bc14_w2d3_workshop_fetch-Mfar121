/*Write an async function called getQuote.

👉 Use fetch to send a GET request to https://zenquotes.io/api/random/ and store the resolved value of the returned promise in a variable called response.

👉 Call the .json() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data.

👉 Use that data to set the text of the h1 with id "quote".

Hint: You can use console.log to have a look at the structure of the data object to figure out how to get just the quote out!

*/ 
async function getQuote(){
    const response = await fetch(`https://meowfacts.herokuapp.com/`);
    const data = await response.json();
    console.log(data);
    const heading = document.querySelector("#quote")
    heading.textContent = data.data[0]

    let quote = data.data[0]
    let quoteHistory = document.querySelector("#quote-history")
let nextQuote = document.createElement("ol")

    nextQuote.textContent = quote
    quoteHistory.appendChild(nextQuote)
    }
  
    
    //task 2
let buttonPress = document.querySelector("#new-quote-button")

buttonPress.addEventListener("click", getQuote)

//task 3

/* 

let quote = data.dat[0]
let quoteHistory = document.querySelector("#quote-history")
let nextQuote = document.createElement("ol")

nextQuote.textContent = quote
quoteHistory.appendChild(nextQuote)

paste the above in to the function

*/
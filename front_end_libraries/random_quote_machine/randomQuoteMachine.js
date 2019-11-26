/* JavaScript code for Random Quote Machine project */
let quotes;
let quote;
let author;

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json',
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function(jsonData) {
      if (typeof jsonData === 'string') {
        quotes = JSON.parse(jsonData).quotes;
        console.log(quotes);
      }
    }
  });
}

function getQuote(first) {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote = randomQuote.quote;
  author = randomQuote.author;

  if (first === true) {
    $('.quote-box__text').html(quote);
    $('.quote-box__author').text('- ' + author);
  } else {
    $('.quote-box').addClass('quote-box--animate-out');
  setTimeout(() => {
    $('.quote-box__text').html(quote);
    $('.quote-box__author').text('- ' + author);
    $('.quote-box').removeClass('quote-box--animate-out');
  }, 500);
  }
}

$(document).ready(function() {
  getQuotes().then(() => {
    getQuote(true);
  });

  $('#tweet-quote').on('click', () => {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '"\n- ' + author), '_blank');
  });

  $('#new-quote').on('click', getQuote);
});
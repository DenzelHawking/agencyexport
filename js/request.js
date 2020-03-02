  let usd = document.querySelector('.usd');
  let eur = document.querySelector('.eur');
  let rub = document.querySelector('.rub');
  
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(response => response.json())
  .then(json => {
    valute = json.Valute;
    usd.innerHTML = `${(valute.USD.Value * (10 / valute.TJS.Value)).toFixed(2)}`
    eur.innerHTML = `${(valute.EUR.Value * (10 / valute.TJS.Value)).toFixed(2)}`
    rub.innerHTML = `${(10 / valute.TJS.Value).toFixed(2)}`
  })



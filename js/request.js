let usd = document.querySelector('.usd');
let eur = document.querySelector('.eur');
let rub = document.querySelector('.rub');

let data = new Date();
let fullData = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;

// fetch('http://cors-anywhere.herokuapp.com/nbt.tj/tj/kurs/export_xml.php?date=2020-03-04&export=xmlout')
fetch(`https://cors-anywhere.herokuapp.com/nbt.tj/tj/kurs/export_xml.php?date=${fullData}&export=xmlout`)
.then(response => response.text())
.then(text => parseXML(text))
.catch(err => parseXML(false))


function parseXML(str) {
  if (str === false) {
    usd.innerHTML = 'Ошибка подключения';
    eur.innerHTML = 'Ошибка подключения';
    rub.innerHTML = 'Ошибка подключения';
    return;
  }

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(str,"text/xml");
  
  const valutes = xmlDoc.getElementsByTagName('Valute');
  let data = [];
  for(let i = 0; i < valutes.length; i++) {
    let res = {};
    
    if (valutes[i].children[0].innerHTML === 'USD' || valutes[i].children[0].innerHTML === 'EUR' || valutes[i].children[0].innerHTML === 'RUB') {
      res.charcode = valutes[i].children[0].innerHTML;
      res.name = valutes[i].children[2].innerHTML;
      res.val = valutes[i].children[3].innerHTML;
      data.push(res);
    }
  }

  usd.innerHTML = data[0].val;
  eur.innerHTML = data[1].val;
  rub.innerHTML = data[2].val;
}

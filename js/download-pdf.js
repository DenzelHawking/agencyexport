let pdfButton = document.querySelectorAll('.download-pdf')
let domainLink = window.location.protocol + '//' + window.location.hostname
let closeBtn = document.querySelector('.close-btn')
let popupPDF = document.querySelector('.popup-pdf')
let pdfList = document.querySelector('.pdf-list')

let pdfData = {
  agriculture: {
    ru: [
      {
        links: '/data/agriculture/ru/РЕЕСТР ЭКСПОРТИРУЕМОЙ СЕЛЬСКОХОЗЯЙСТВЕННОЙ ПРОДУКЦИИ.pdf',
        title: 'РЕЕСТР ЭКСПОРТИРУЕМОЙ СЕЛЬСКОХОЗЯЙСТВЕННОЙ ПРОДУКЦИИ'
      }
    ],
    tj: [
      {
        links: '/data/agriculture/tj/ФЕХРИСТИ КИШОВАРЗИ.pdf',
        title: 'ФЕХРИСТИ КИШОВАРЗӢ'
      }
    ]
  },
  industry: {
    ru: [
      {
        links: '/data/industry/ru/РЕЕСТР ЭКСПОРТИРУЕМОЙ ПРОМЫШЛЕННОЙ ПРОДУКЦИИ.pdf',
        title: 'РЕЕСТЕР ЭКСПОРТИРУЕМОЙ ПРОМЫШЛЕННОЙ ПРОДУКЦИИ'
      }
    ],
    tj: [
      {
        links: '/data/industry/tj/ФЕХРИСТИ САНОАТИ.pdf',
        title: 'ФЕХРИСТИ САНОАТӢ'
      }
    ]
  },
  acts: {
    ru: [
      {
        links: '/data/acts/ru/ГОСУДАРСТВЕННАЯ ПРОГРАММА СОДЕЙСТВИЯ ЭКСПОРТУ.pdf',
        title: 'ГОСУДАРСТВЕННАЯ ПРОГРАММА СОДЕЙСТВИЯ ЭКСПОРТУ'
      },
      {
        links: '/data/acts/ru/ЗАКОН о свободных экономических зонах.pdf',
        title: 'ЗАКОН о свободных экономических зонах'
      },
      {
        links: '/data/acts/ru/Конституция РТ.pdf',
        title: 'Конституция РТ'
      },
      {
        links: '/data/acts/ru/Налоговый кодекс РТ.pdf',
        title: 'Налоговый кодекс РТ'
      },
      {
        links: '/data/acts/ru/О ВНЕШНЕТОРГОВОЙ ДЕЯТЕЛЬНОСТИ.pdf',
        title: 'О ВНЕШНЕТОРГОВОЙ ДЕЯТЕЛЬНОСТИ'
      },
      {
        links: '/data/acts/ru/О Государственной защите и поддержке предпринимательства.pdf',
        title: 'О Государственной защите и поддержке предпринимательства'
      },
      {
        links: '/data/acts/ru/Об инвестиции.pdf',
        title: 'Об инвестиции'
      },
      {
        links: '/data/acts/ru/Об экспортном контроле.pdf',
        title: 'Об экспортном контроле'
      },
      {
        links: '/data/acts/ru/Таможенный кодекс.pdf',
        title: 'Таможенный кодекс'
      }
    ],
    tj: [
      {
        links: '/data/acts/tj/БАРНОМАИ ДАВЛАТИИ МУСОИДАТ БА СОДИРОТ ВА ВОРИДОТИВАЗКУНИИ ЧУМХУРИИ ТОЧИКИСТОН БАРОИ СОЛХОИ 2016-2020.pdf',
        title: 'БАРНОМАИ ДАВЛАТИИ МУСОИДАТ БА СОДИРОТ ВА ВОРИДОТИВАЗКУНИИ ЧУМХУРИИ ТОЧИКИСТОН БАРОИ СОЛХОИ 2016-2020'
      },
      {
        links: '/data/acts/tj/Дар бораи минтақаҳои озоди иқтисодӣ.pdf',
        title: 'Дар бораи минтақаҳои озоди иқтисодӣ'
      },
      {
        links: '/data/acts/tj/Дар бораи назорати содирот.pdf',
        title: 'Дар бораи назорати содирот'
      },
      {
        links: '/data/acts/tj/Дар бораи сармоягузорӣ.pdf',
        title: 'Дар бораи сармоягузорӣ'
      },
      {
        links: '/data/acts/tj/ДАР БОРАИ ФАЪОЛИЯТИ САВДОИ ҲОРИҶӢ.pdf',
        title: 'ДАР БОРАИ ФАЪОЛИЯТИ САВДОИ ҲОРИҶӢ'
      },
      {
        links: '/data/acts/tj/Дар бораи ҳимоя ва дастгирии давлатии соҳибкорӣ.pdf',
        title: 'Дар бораи ҳимоя ва дастгирии давлатии соҳибкорӣ'
      },
      {
        links: '/data/acts/tj/Кодекси андоз.pdf',
        title: 'Кодекси андоз'
      },
      {
        links: '/data/acts/tj/Конститутсия.pdf',
        title: 'Конститутсия'
      }
    ]
  }
}


pdfButton.forEach(elem => {
  elem.onclick = () => {
    createPdfList(elem.dataset.type)
    popupPDF.classList.add('popup-opened')
  }
})

function createPdfList(type) {
  for (key in pdfData[type]) {
    let pdfItem = pdfData[type][key]
    
    pdfItem.forEach((elem, index) => {
      let link = domainLink + pdfItem[index].links
      pdfList.innerHTML = pdfList.innerHTML + `
          <div class='pdf-item'>
            <a href='${link}'>
              <div class='pdf-img'></div>
              <div class='pdf-title'>${pdfItem[index].title}</div>
            </a>
          </div>
      `
    })
  }
}

closeBtn.onclick = () => {
  popupPDF.classList.remove('popup-opened')
  pdfList.innerHTML = ''
}
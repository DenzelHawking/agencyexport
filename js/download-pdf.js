let pdfButton = document.querySelectorAll('.download-pdf')
let domainLink = window.location.protocol + '//' + window.location.hostname
let closeBtn = document.querySelector('.close-btn')
let popupPDF = document.querySelector('.popup-pdf')
let pdfList = document.querySelector('.pdf-list')
let pageLang = document.querySelector('html').lang


let pdfData = {
  agriculture: {
    ru: [
      {
        links: '/data/agriculture/ru/РЕЕСТР ЭКСПОРТИРУЕМОЙ СЕЛЬСКОХОЗЯЙСТВЕННОЙ ПРОДУКЦИИ.pdf',
        title: 'РЕЕСТР ЭКСПОРТИРУЕМОЙ СЕЛЬСКОХОЗЯЙСТВЕННОЙ ПРОДУКЦИИ',
        hasFile: true
      }
    ],
    en: [
      {
        links: '/data/agriculture/en/',
        title: 'No english files',
        hasFile: false
      }
    ],
    tj: [
      {
        links: '/data/agriculture/tj/ФЕХРИСТИ КИШОВАРЗИ.pdf',
        title: 'ФЕХРИСТИ КИШОВАРЗӢ',
        hasFile: true
      }
    ]
  },
  industry: {
    ru: [
      {
        links: '/data/industry/ru/РЕЕСТР ЭКСПОРТИРУЕМОЙ ПРОМЫШЛЕННОЙ ПРОДУКЦИИ.pdf',
        title: 'РЕЕСТР ЭКСПОРТИРУЕМОЙ ПРОМЫШЛЕННОЙ ПРОДУКЦИИ',
        hasFile: true
      }
    ],
    en: [
      {
        links: '/data/agriculture/en/',
        title: 'No english files',
        hasFile: false
      }
    ],
    tj: [
      {
        links: '/data/industry/tj/ФЕХРИСТИ САНОАТИ.pdf',
        title: 'ФЕХРИСТИ САНОАТӢ',
        hasFile: true
      }
    ]
  },
  acts: {
    ru: [
      {
        links: '/data/acts/ru/Правила РЕКС.pdf',
        title: 'REX',
        hasFile: true
      },
      {
        links: '/data/acts/ru/ГОСУДАРСТВЕННАЯ ПРОГРАММА СОДЕЙСТВИЯ ЭКСПОРТУ.pdf',
        title: 'ГОСУДАРСТВЕННАЯ ПРОГРАММА СОДЕЙСТВИЯ ЭКСПОРТУ',
        hasFile: true
      },
      {
        links: '/data/acts/ru/ЗАКОН о свободных экономических зонах.pdf',
        title: 'ЗАКОН о свободных экономических зонах',
        hasFile: true
      },
      {
        links: '/data/acts/ru/Конституция РТ.pdf',
        title: 'Конституция РТ',
        hasFile: true
      },
      {
        links: '/data/acts/ru/Налоговый кодекс РТ.pdf',
        title: 'Налоговый кодекс РТ',
        hasFile: true
      },
      {
        links: '/data/acts/ru/О ВНЕШНЕТОРГОВОЙ ДЕЯТЕЛЬНОСТИ.pdf',
        title: 'О ВНЕШНЕТОРГОВОЙ ДЕЯТЕЛЬНОСТИ',
        hasFile: true
      },
      {
        links: '/data/acts/ru/О Государственной защите и поддержке предпринимательства.pdf',
        title: 'О Государственной защите и поддержке предпринимательства',
        hasFile: true
      },
      {
        links: '/data/acts/ru/Об инвестиции.pdf',
        title: 'Об инвестиции',
        hasFile: true
      },
      {
        links: '/data/acts/ru/Об экспортном контроле.pdf',
        title: 'Об экспортном контроле',
        hasFile: true
      },
      {
        links: '/data/acts/ru/Таможенный кодекс.pdf',
        title: 'Таможенный кодекс',
        hasFile: true
      }
    ],
    en: [
      {
        links: '/data/agriculture/en/',
        title: 'No english files',
        hasFile: false
      }
    ],
    tj: [
      {
        links: '/data/acts/ru/РЕКС тоҷ 2020.pdf',
        title: 'REX',
        hasFile: true
      },
      {
        links: '/data/acts/tj/БАРНОМАИ ДАВЛАТИИ МУСОИДАТ БА СОДИРОТ ВА ВОРИДОТИВАЗКУНИИ ЧУМХУРИИ ТОЧИКИСТОН БАРОИ СОЛХОИ 2016-2020.pdf',
        title: 'БАРНОМАИ ДАВЛАТИИ МУСОИДАТ БА СОДИРОТ ВА ВОРИДОТИВАЗКУНИИ ҶУМҲУРИИ ТОҶИКИСТОН БАРОИ СОЛХОИ 2016-2020',
        hasFile: true
      },
      {
        links: '/data/acts/tj/Дар бораи минтақаҳои озоди иқтисодӣ.pdf',
        title: 'Дар бораи минтақаҳои озоди иқтисодӣ',
        hasFile: true
      },
      {
        links: '/data/acts/tj/Дар бораи назорати содирот.pdf',
        title: 'Дар бораи назорати содирот',
        hasFile: true
      },
      {
        links: '/data/acts/tj/Дар бораи сармоягузорӣ.pdf',
        title: 'Дар бораи сармоягузорӣ',
        hasFile: true
      },
      {
        links: '/data/acts/tj/ДАР БОРАИ ФАЪОЛИЯТИ САВДОИ ҲОРИҶӢ.pdf',
        title: 'ДАР БОРАИ ФАЪОЛИЯТИ САВДОИ ҲОРИҶӢ',
        hasFile: true
      },
      {
        links: '/data/acts/tj/Дар бораи ҳимоя ва дастгирии давлатии соҳибкорӣ.pdf',
        title: 'Дар бораи ҳимоя ва дастгирии давлатии соҳибкорӣ',
        hasFile: true
      },
      {
        links: '/data/acts/tj/Кодекси андоз.pdf',
        title: 'Кодекси андоз',
        hasFile: true
      },
      {
        links: '/data/acts/tj/Конститутсия.pdf',
        title: 'Конститутсия',
        hasFile: true
      }
    ]
  },
  guide: {
    ru: [
      {
        links: '/data/guide/ru/Национальная стратегия развития.pdf',
        title: 'Национальная стратегия развития',
        hasFile: true
      }
    ],
    en: [
      {
        links: '/data/guide/en/',
        title: 'No english files',
        hasFile: false
      }
    ],
    tj: [
      {
        links: '/data/guide/tj/СТРАТЕГИЯИ МИЛЛИИ РУШДИ ЧУМХУРИИ ТОЧИКИСТОН БАРОИ ДАВРАИ ТО СОЛИ 2030.pdf',
        title: 'СТРАТЕГИЯИ МИЛЛИИ РУШДИ ҶУМҲУРИИ ТОҶИКИСТОН БАРОИ ДАВРАИ ТО СОЛИ 2030',
        hasFile: true
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
  let pdfItem = pdfData[type][pageLang]

  pdfItem.forEach((elem) => {
    if (elem.hasFile) {
      let link = domainLink + elem.links
  
      pdfList.innerHTML = pdfList.innerHTML + `
          <div class='pdf-item'>
            <a href='${link}'>
              <div class='pdf-img'></div>
              <div class='pdf-title'>${elem.title}</div>
            </a>
          </div>
      `
    } else {
      pdfList.innerHTML = `<div class='pdf-item'>${elem.title}</div>`
    }
  })
}

closeBtn.onclick = () => {
  popupPDF.classList.remove('popup-opened')
  pdfList.innerHTML = ''
}
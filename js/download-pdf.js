let pdfButton = document.querySelectorAll('.download-pdf')

// agriculture
// industry

let pdfData = {
  agriculture: {
    ru: {
      links: 'dasfasdfs.ru',
      title: ''
    },
    en: {
      links: 'dasfasdfs.en',
      title: ''
    },
    tj: {
      links: 'dasfasdfs.tj',
      title: ''
    }
  },
  industry: {
    ru: {
      links: 'dasfasdfs.ru',
      title: ''
    },
    en: {
      links: 'dasfasdfs.en',
      title: ''
    },
    tj: {
      links: 'dasfasdfs.tj',
      title: ''
    }
  }
}


pdfButton.forEach(elem => {
  elem.onclick = () => {
    createPdfList(elem.dataset.type)
  }
})


function createPdfList(type) {
  for (key in pdfData[type]) {
    console.log(pdfData[type][key].links)
  }
}
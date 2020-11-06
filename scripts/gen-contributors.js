//generate contributors
const contributors = require('../contributors.json')

function tdTemplate(info) {
  return `<td align="center"><a href="${info.avatar_link}"><img src="${
    info.avatar
  }"  style="width:50px; height:50px; border-radius:50%" alt=""/><br /><sub><b>${
    info.name
  }</b></sub></a><br />${iconsTemplate(info.icons)}</td>`
}

function iconsTemplate(icons) {
  return icons.reduce((template, info) => {
    template += `<a href="${info.link}" title="Code" style="padding: 0 3px">${info.enjoy_img}</a>`
    return template
  }, '')
}

function tableTemplate(contributors) {
  const tds = contributors.reduce((template, info) => {
    template += tdTemplate(info)
    return template
  }, '')

  return `<table><tr>${tds}</tr><table>`
}

;(function main() {
  console.log(tableTemplate(contributors))
})()

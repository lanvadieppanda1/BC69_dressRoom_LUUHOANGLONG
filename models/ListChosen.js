import { fetchData } from "../utils/callData.js"
import { renderCard } from "./ChoseItem.js"


let navPills, tabPanes;
// URL của API
const apiUrl = '../data/Data.json';
fetchData(apiUrl)
  .then(dataJson => {

    tabPanes = dataJson["tabPanes"];

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

export function handleClickTab(type) {
  let arrITem = []
  let arrNav = document.querySelectorAll(".nav-item")
  for (let nav of arrNav) {
    nav.classList.remove("active")
  }
  for (let itemTab of tabPanes) {
    if (itemTab.type === type) {
      arrITem.push(itemTab)
      document.getElementById(type).classList.add("active")
    }
  }
  document.getElementById("tabPanes").innerHTML = renderCard(arrITem)
}

export function renderTabItem(arr = []) {
  let tabItem = "";
  for (let item of arr) {
    tabItem += `
        <li class="nav-item" id="${item.type}">
          <a class="nav-link" href="javascript:void(0)" onclick="handleClickTab('${item.type}')">${item.showName}</a>
        </li>
      `
  }
  return tabItem
}

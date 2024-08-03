import { fetchData } from "../utils/callData.js"


let tabPanes;
// URL của API
const apiUrl = '../data/Data.json';
fetchData(apiUrl)
    .then(dataJson => {

        tabPanes = dataJson["tabPanes"];
        console.log("tabPanes: ", tabPanes);
        // document.querySelector(".tabPanes").innerHTML = renderCard(tabPanes);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

class ChoseItem {
    topclothes = '';
    botclothes = '';
    shoes = '';
    handbags = '';
    necklaces = '';
    hairstyle = '';
    background = '';
}

export function renderCard(arr = []) {
    let listItem = "";
    for (let item of arr) {
        listItem += `
        <div class="card">
          <img src=${item.imgSrc_jpg} alt="..."/>
          <p class="card-title">${item.name}</p>
          <button class="btn btn-outline-dark" onclick="handleTry('${item.id}')">Thử đồ</button>
       </div>
      `
    }
    return listItem
}

let newchoose = new ChoseItem
export function handleTry(id) {
    let ChooseItem = tabPanes.filter((item) => item.id === id)
    const { id: idItem, type, imgSrc_png } = ChooseItem[0]
    newchoose[type] = imgSrc_png

    let domItem = document.querySelectorAll('.contain div')
    for (let it of domItem) {
        let newClass = ""
        if (it.className === "necklace" || it.className === "handbag") {
            newClass = `${it.className}s`
        }
        if (it.className === "bikinitop") {
            newClass = "topclothes"
        }
        if (it.className === "bikinibottom") {
            newClass = "botclothes"
        }
        if (it.className === "feet") {
            newClass = "shoes"
        }
        if (newClass === type || it.className === type) {
            it.style.background = `url(../${imgSrc_png})`
            it.style.backgroundSize = "cover"
        }
    }
}


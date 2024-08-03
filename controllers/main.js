import { fetchData } from "../utils/callData.js"
import { renderTabItem, handleClickTab } from "../models/ListChosen.js"
import { handleTry } from "../models/ChoseItem.js"

window.handleClickTab = handleClickTab
window.handleTry = handleTry


let navPills, tabPanes;
// URL của API
const apiUrl = '../data/Data.json';
fetchData(apiUrl)
    .then(dataJson => {

        navPills = dataJson["navPills"];
        console.log("navPills: ", navPills);
        tabPanes = dataJson["tabPanes"];
        console.log("tabPanes: ", tabPanes);
        document.getElementById("navPills").innerHTML = renderTabItem(navPills);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


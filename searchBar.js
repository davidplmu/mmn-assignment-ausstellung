let collapseBtn = document.getElementById('navbarCollapseBtn');
let searchResultContainer = document.getElementById('searchResults');

if (collapseBtn) {
    collapseBtn.addEventListener(('click'), () => {
        let navbarDummy = document.getElementById('navbarCollapseDummy');

        if (!(navbarDummy.classList.contains('show'))) {
            navbarDummy.className = 'collapse show'
        } else {
            navbarDummy.className = 'collapse'
        }
    });
}



let searchBar = document.getElementById('searchBar');
if (searchBar) {
    searchBar.addEventListener(('input'), () => {
        dynamicSearchResultHandler(searchBar.value);
    });
}

function dynamicSearchResultHandler(value) {
    let amountResults = 3;

    //clears the container
    searchResultContainer.innerHTML = ''

    if (value.length >= 3) {
        const foundRe = [];

        //searches for matches in the data
        for (const imgData of DATA) {
            if (imgData.description.includes(value)) {
                foundRe.push(imgData)
                if(foundRe.length >= amountResults){
                    break;
                }   
            }
        }

       
        //generates a card for each found result
        for (let i = 0; i < foundRe.length; i++) {
            if (foundRe[i] != null) {
                let resultElem = generateSearchResultElement(foundRe[i].description);

                resultElem.querySelector('div').addEventListener(('click'), () => {
                    //saves the data in the local storage
                    localStorage.setItem("imgData", JSON.stringify(foundRe[i]));
                    window.location.href = "./detail-ansicht.html";
                });

                searchResultContainer.appendChild(resultElem);
            }
        }
    }




}

function generateSearchResultElement(content) {
    let elem = document.createElement('div');
    let link = document.createElement('div');
    link.innerText = content;
    elem.className = 'card card-body';
    elem.appendChild(link);

    return elem;
}


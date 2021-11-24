function loadCarouselImages(amountSlides = 4) {
    let carouselWrapper = document.getElementById('carousel-wrapper');
    let textBox = document.getElementById('carousel-description');

    if (carouselWrapper) {
        for (let i = 0; i < amountSlides; i++) {

            //gets a random image and generates a slide
            let imageData = DATA[Math.floor(Math.random() * DATA.length)]
            let isFirst = i === 0;
            carouselWrapper.appendChild(generateCarouselSlide(imageData, isFirst));


            //generates the according description
            generateSlideDescription(imageData);
        }
    }

    function generateSlideDescription(imageData) {
        if (textBox) {
            let carouselDescription = document.createElement('p');
            carouselDescription.className = 'hover-text-normal-green';
            carouselDescription.innerHTML = shortenText(imageData.description);
            textBox.appendChild(carouselDescription);

        } else {
            console.error('carousel-description is not defined');
        }
    }
}



function generateCarouselSlide(imageData, isFirst) {
    let item = document.createElement('div');
    if (isFirst) {
        item.className = 'carousel-item active';
    } else {
        item.className = 'carousel-item';
    }

    let img = document.createElement('img');
    img.className = 'd-block w-100';
    img.src = imageData.image_urls.full_size;
    img.alt = "IMAGE LOADING..."

    item.appendChild(img);
    return item;
}

function shortenText(text, desiredLength = 55) {
    if (text.length <= desiredLength) {
        return text;
    } else {
        return text.substring(0, desiredLength - 2) + '...'
    }
}



//-----------------------------------------------------------
function generateImgCard(imageUrl, imgTitle, detailsLink, imgDescription) {
    let column = document.createElement('div');
    column.className = 'col';

    let card = document.createElement('div');
    card.className = 'card card-img-container shadow-sm';

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = imageUrl;
    img.alt = 'IMAGE LOADING...';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h5');
    cardTitle.innerText = imgTitle;
    cardTitle.className = 'card-title';

    let cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = imgDescription;

    let cardBtn = document.createElement('a');
    cardBtn.className = 'btn btn-color-2';
    cardBtn.innerText = 'Detailansicht';


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardBtn);
    card.appendChild(img);
    card.appendChild(cardBody);
    column.appendChild(card);
    return column;
}


function renderAmountOfCards(iterations) {
    let cardContainer = document.getElementById('card-container');
    if (cardContainer) {
        for (let i = 0; i < iterations; i++) {
            renderCard(DATA[i]);
        }
    } else {
        console.error('cardContainer is not defined');
    }
}

function renderAllCards() {
    let cardContainer = document.getElementById('card-container');
    if (cardContainer) {
        DATA.forEach((imgData) => {
            renderCard(imgData, cardContainer);
        });
    } else {
        console.error('cardContainer is not defined');
    }
}

function renderCard(imgData, cardContainer) {
    let imgTitle = shortenText(imgData.description.replace('\n', ''), 70);
    let imgDescription = parseImageDescription(imgData);
    let card = generateImgCard(imgData.image_urls.thumbnail, imgTitle, '', imgDescription);


    card.querySelector('.btn').addEventListener(('click'), () => {
        //saves the data in the local storage
        localStorage.setItem("imgData", JSON.stringify(imgData));
        window.location.href = "./detail-ansicht.html";
    });

    cardContainer.appendChild(card);

}

function parseImageDescription(data) {
    let shotOnMsg = data.exif.model ? 'Shot on: ' + data.exif.model + '<br>' : '';
    let expTimeMsg = data.exif.exposure_time ? 'Exposure Time: ' + data.exif.exposure_time + '<br></br>' : '';
    let likes = data.likes ? 'Likes: ' + data.likes + '<span class="like-icon"></span><br>' : '';
    let views = data.views ? 'Views: ' + data.views + '<span class="view-icon"></span><br>' : '';
    let downloads = data.downloads ? 'Downloads: ' + data.downloads + '<span class="download-icon"></span>' : '';
    return shotOnMsg + expTimeMsg + likes + views + downloads;
}

loadCarouselImages(5);
renderAllCards();

//-------------------------------------------------------------



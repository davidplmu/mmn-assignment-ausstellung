



// Gets and deserializes the stored data
const imgDataString = localStorage.getItem("imgData");
let imgData;
if (imgDataString) {
    imgData = JSON.parse(imgDataString);
} else {
    //if no image is stored it gets a random image
    imgData = DATA[Math.floor(Math.random() * DATA.length)]
}

console.log(imgData);


let featuredImageElem = document.getElementById('featured-image');
featuredImageElem.src = imgData.image_urls.full_size;

let titleElem = document.getElementById('title');
let descriptionElem = document.getElementById('description');
let metadataElem = document.getElementById('metadata');
let dateElem = document.getElementById('date');


titleElem.innerText = imgData.description ? imgData.description : '';
dateElem.innerText = imgData.created_at ? imgData.created_at : '';
metadataElem.innerHTML = parseMetadata(imgData);



function parseMetadata(imgData) {
    let shotOnMsg = imgData.exif.make ? 'Shot on: ' + imgData.exif.make + '<br>' : '';
    let modelMsg = imgData.exif.model ? 'Model: ' + imgData.exif.model + '<br>' : '';
    let expTimeMsg = imgData.exif.exposure_time ? 'Exposure Time: ' + imgData.exif.exposure_time + '<br>' : '';
    let apertureMsg = imgData.exif.aperture ? 'Aperture: ' + imgData.exif.aperture + '<br>' : '';
    let focLengthMsg = imgData.exif.focal_length ? 'Focal Length: ' + imgData.exif.focal_length + '<br>' : '';
    let isoMsg = imgData.exif.iso ? 'Iso: ' + imgData.exif.iso + '<br>' : '';

    let likes = imgData.likes ? 'Likes: ' + imgData.likes + '<span class="like-icon"></span><br>' : '';
    let views = imgData.views ? 'Views: ' + imgData.views + '<span class="view-icon"></span><br>' : '';
    let downloads = imgData.downloads ? 'Downloads: ' + imgData.downloads + '<span class="download-icon"></span>' : '';

    let separator = '<div class="border-top my-2"></div>'
    return shotOnMsg + modelMsg + expTimeMsg + apertureMsg + focLengthMsg + isoMsg + separator + likes + views + downloads;
}


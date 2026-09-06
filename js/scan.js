// कृषि Scan - Crop Detection JS
// ELEMENTS

const cameraInput = document.getElementById("cameraInput");
const galleryInput = document.getElementById("galleryInput");
const previewImage = document.getElementById("previewImage");
const analyzeBtn = document.getElementById("analyzeBtn");

const loadingBox = document.getElementById("loadingBox");
const loadingText = document.getElementById("loadingText");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

// IMAGE PREVIEW


function previewSelectedImage(event) {

const input = event.target;

if (!input || !input.files || input.files.length === 0) {
    return;
}
const file = input.files[0];

// Check image type

if (!file.type.startsWith("image/")) {

    alert("Please select a valid crop leaf image.");

    input.value = "";

    return;
}


// File reader

const reader = new FileReader();

reader.onload = function(event) {

    if (previewImage) {

        previewImage.src = event.target.result;

    }

};


reader.onerror = function() {

    alert("Unable to read this image. Please try another image.");

};


reader.readAsDataURL(file);


}


// CAMERA INPUT


if (cameraInput) {


cameraInput.addEventListener(
    "change",
    previewSelectedImage
);


}


// GALLERY INPUT

if (galleryInput) {


galleryInput.addEventListener(
    "change",
    previewSelectedImage
);


}

// GET SELECTED IMAGE

function getSelectedImage() {


if (
    cameraInput &&
    cameraInput.files &&
    cameraInput.files.length > 0
) {

    return cameraInput.files[0];

}


if (
    galleryInput &&
    galleryInput.files &&
    galleryInput.files.length > 0
) {

    return galleryInput.files[0];

}


return null;


}

// AI ANALYSIS

function showLoading() {


const selectedFile = getSelectedImage();


// Check image

if (!selectedFile) {

    alert("Please upload or capture a crop leaf image first.");

    return;

}


// Disable Analyze button

if (analyzeBtn) {

    analyzeBtn.innerHTML =
        "⏳ Analyzing Crop Leaf...";

    analyzeBtn.disabled = true;

}


// Show loading box

if (loadingBox) {

    loadingBox.style.display = "block";

}


// Reset steps

if (step1) {
    step1.classList.remove("active");
}

if (step2) {
    step2.classList.remove("active");
}

if (step3) {
    step3.classList.remove("active");
}


// STEP 1

if (loadingText) {

    loadingText.innerHTML =
        "📷 Processing crop leaf image...";

}

if (step1) {

    step1.classList.add("active");

}


// STEP 2

setTimeout(function() {

    if (loadingText) {

        loadingText.innerHTML =
            "🧠 Detecting possible crop diseases...";

    }

    if (step2) {

        step2.classList.add("active");

    }

}, 700);


// STEP 3

setTimeout(function() {

    if (loadingText) {

        loadingText.innerHTML =
            "🌿 Preparing treatment recommendations...";

    }

    if (step3) {

        step3.classList.add("active");

    }

}, 1400);


// RESULT PAGE

setTimeout(function() {

    window.location.href = "result.html";

}, 2200);


}

// ANALYZE BUTTON CLICK

if (analyzeBtn) {


analyzeBtn.addEventListener(
    "click",
    showLoading
);


}

// PAGE LOAD

console.log("कृषि Scan - Scan page loaded successfully.");
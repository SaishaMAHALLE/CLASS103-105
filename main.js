Webcam.set({
    width:365, 
    height:295,
    image_format:"png",
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach("camera");

function capture() {
    Webcam.snap(
        function(data_uri){
            document.getElementById("captured_img").innerHTML='<img id="result" src="'+data_uri+'"/>';
        }
    );

}


console.log("ml5 Version- " , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iUpbdyhZO/model.json', model_loaded);

function model_loaded() {
    console.log("model got loaded");
}

function identify_img() {
    image = document.getElementById("result");
    classifier.classify(image, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error);
 
    }

    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    } 
} 
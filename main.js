function startClassification() 
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VsEZZ3wLm/model.json', modelReady);
}
function modelReady() 
{
    classifier.classify(gotResults);
}
function gotResults(error, results) 
{ if (error) {
    console.error(error); } 
    else {
    console.log(results); 
    document.getElementById("result_label").innerHTML = results[0].label; 
    document.getElementById("result_confidence").innerHTML = (results[0].confidence*100).toFixed(1)+"%";
    img1 = document.getElementById("imagePosition");
    if (results[0].label == "Barking")
    {
        img1.src="https://github.com/adhritdc/Project-108/blob/main/bark.gif";
    }
    else if (results[0].label == "Meawing")
    {
        img1.src="meow.gif";
    }
    else
    {
        img1.src="https://github.com/adhritdc/Project-108/blob/main/listen.gif";
    }
    }
}
var cat = 0;
var dog = 0;

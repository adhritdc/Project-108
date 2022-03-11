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
    if (results[0].label == "Barking")
    {
        img1 = document.getElementById("imagePosition");
        img1.src("bark.gif");
    }
    else if (results[0].label == "Meawing")
    {
        img2 = document.getElementById("imagePosition");
        img2.src("meaw.gif");
    }
    else
    {
        img3 = document.getElementById("imagePosition");
        img3.src("listen.gif");
    }
    }
}
var cat = 0;
var dog = 0;

red = Math.floor(Math.random()*255) + 1;
green = Math.floor(Math.random()*255) + 1;
blue = Math.floor(Math.random()*255) + 1;
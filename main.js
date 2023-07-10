prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RCHEYDRlL/',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      
      document.getElementById("result_object_name").innerHTML = results[0].label;
  
      gesture = results[0].label;
    }
      if(gesture == "entry accepted")
      {
        document.getElementById("result_object_gesture_icon").innerHTML = "&#x1F637;";
        //var synth = window.speechSynthesis;
        toSpeak = "Entry accepted";
        //var utterThis = new SpeechSynthesisUtterance(toSpeak);
    
        //synth.speak(utterThis);
        
      }
      else if(gesture == "entry denied")
      {
       
        document.getElementById("result_object_gesture_icon").innerHTML = "&#x26d4;";
        //var synth = window.speechSynthesis;
        toSpeak = "Entry denied";
        //var utterThis = new SpeechSynthesisUtterance(toSpeak);
    
        //synth.speak(utterThis);
      }
    }
//define function check() 




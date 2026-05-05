const form = document.getElementById("moodForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const mood = document.getElementById("mood").value;

    const result = document.getElementById("result");

    if(mood === "Happy"){

        result.innerHTML =
        "😊 You seem happy today! Keep smiling.";

    }

    else if(mood === "Sad"){

        result.innerHTML =
        "😔 Take some rest and talk to loved ones.";

    }

    else if(mood === "Stressed"){

        result.innerHTML =
        "🧘 Try meditation and deep breathing.";

    }

    else{

        result.innerHTML =
        "⚡ Great energy today!";
    }

});

const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({

    video:true

})

.then(function(stream){

    video.srcObject = stream;

});
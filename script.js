var speechR = window.webkitSpeechRecognition;

var items = ["milk", "coffee", "muffin"];
var index = 0;
var prices = [23,120,33];

//object creation the the web speech API
var recognition = new speechR();

function show()
{
    recognition.start();   //start() is a predefined function in web speech API to start the recognition process 
}

recognition.onresult = (event) =>{
    console.log(event);
    // var ul = document.getElementById("item_show");
    // var li = document.createElement("li");

    // var say = event.results[0][0].transcript;
    // var i=0;
    // var flag=0;
    // index = 0;
    // while(i<items.length)
    // {
    //     if(say==items[i])
    //     {
    //         index = i;
    //         flag=1;
    //         li.appendChild(document.createTextNode(items[i] + ": "));
    //         li.appendChild(document.createTextNode(prices[i]));
    //         ul.appendChild(li);
    //         break;
    //     }
    //     i++;
    // }

    // if(flag==1)
    // {
    //     someone_speak(1);
    // }
    // else{
    //         someone_speak(0);
    // }
}

function someone_speak(check)
{
    //speech synthesis for text to speech conversion 
    var s = window.speechSynthesis;
    if(check==1)
    say1 = "The item is available in the inventory with unit price of" + prices[index] + "dhirams";
    else
    say1 = "Sorry! The inventory doesn't have this item";
    var utter = new SpeechSynthesisUtterance(say1);  //takes the content that needs to be spoken
    s.speak(utter);   //speak() is a predefined function of speechSynthesis
}
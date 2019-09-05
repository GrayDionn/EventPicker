


console.log("Hello");

        var blockHolders = document.createElement("DIV");
    blockHolders.id = "blockHolders";

var requestURL = 'js/events.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var yourEvents = request.response;
  blockBuild(yourEvents);
}


function blockBuild(jsonObj) {
var eventInfo = jsonObj['events'];

  for (i = 0; i<jsonObj.events.length; i++) {
    var blocks = document.createElement("DIV");

    blocks.id = "blocks"
    document.getElementById("topsection").appendChild(blockHolders);
    blockHolders.appendChild(blocks);
    var colors = ["#E8BE18", '#EE9080', '#4F79B3', "#4FA5B3"];
    blocks.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    var title = document.createElement("P");
    title.id = "title";
    title.innerHTML = "Neighborhood Event";
    blocks.appendChild(title);


    var eventName = eventInfo[i].name;
    for (var j=0; j< eventName.length; j++){

    var name = document.createElement("p");
    name = eventName[j];
    var test = String(name);
    title.append(test);
    }

    }


}

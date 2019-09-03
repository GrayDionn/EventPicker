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
  populateHeader(yourEvents);
}


function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['state'];
  document.getElementById("total").appendChild(myH1);

  for (i = 0; i<jsonObj.events.length; i++) {

    var blocks = document.createElement("DIV");
    blocks.id = "blocks"
    document.getElementById("topsection").appendChild(blockHolders);
    blockHolders.appendChild(blocks);

   console.log(i);
  }
}

//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var eastCoastScore = 0;
var midwestScore = 0;
var westCoastScore = 0;
var southScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var friendlyBtn = document.getElementById("friendly-btn");
var relaxedBtn = document.getElementById("relaxed-btn");
var temperamentalBtn = document.getElementById("temperamental-btn");
var amiableBtn = document.getElementById("amiable-btn");
var creativeBtn = document.getElementById("creative-btn");
var conventionalBtn = document.getElementById("conventional-btn");
var religiousBtn = document.getElementById("religious-btn");
var uninhibitedBtn = document.getElementById("uninhibited-btn");
var coolWinterDrySummerBtn = document.getElementById("coolwinterdrysummer-btn");
var fourSeasonsBtn = document.getElementById("fourseasons-btn");
var harshWinterSemiHotSummerBtn = document.getElementById("harshwintersemihotsummer-btn");
var mildWinterHotSummerBtn = document.getElementById("mildwinterhotsummer-btn");

var result = document.getElementById("result");




//#TODO: Add Event Listeners to your answer choice variables.
friendlyBtn.addEventListener("click", Midwest);
relaxedBtn.addEventListener("click", West);
temperamentalBtn.addEventListener("click", East);
amiableBtn.addEventListener("click", South);
creativeBtn.addEventListener("click", West);
conventionalBtn.addEventListener("click", Midwest);
religiousBtn.addEventListener("click", South);
uninhibitedBtn.addEventListener("click", East);
coolWinterDrySummerBtn.addEventListener("click", West);
fourSeasonsBtn.addEventListener("click", East);
harshWinterSemiHotSummerBtn.addEventListener("click", Midwest);
mildWinterHotSummerBtn.addEventListener("click", South);


//#TODO: Define quiz functions here

function East() {
  eastCoastScore += 1;
  questionCount += 1;
   // alert("Your choice is one similar of one from the east coast!");
  if (questionCount >= 3) {
      updateResult();
  }
}

function West() {
  westCoastScore += 1;
  questionCount += 1;
   // alert("Your choice is one similar of one from the west coast!");
  if (questionCount >= 3) {
      updateResult();
  }
}

function Midwest() {
  midwestScore += 1;
  questionCount += 1;
   // alert("Your choice is one similar of one from the midwest!");
  if (questionCount >= 3) {
      updateResult();
  }
}

function South() {
  southScore += 1;
  questionCount += 1;
   // alert("Your choice is one similar of one from the south!");
  if (questionCount >= 3) {
      updateResult();
  }
}


function updateResult() {
  if (eastCoastScore >= 2) {
    result.innerHTML = "Your personality is most similar to one of an East Coaster!";
  } 
  else if (westCoastScore >= 2) {
    result.innerHTML = "Your personality indicates you would fit in best in the West Coast!";
  }
  else if (southScore >= 2) {
    result.innerHTML = "Your choices show you would fit in best in the South!";
  }
  else if (midwestScore >= 2) {
    result.innerHTML = "You would fit in best in the Midwest!";
  }
  else {
    result.innerHTML = "Looks like your personality would fit in any region in the United States!";
  }
}
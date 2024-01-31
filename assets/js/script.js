//Display Current Date in Header
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));

// Display Current Date in Header
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMM Do YYYY'));

// Display Current Time
var currentTimeElement = $("#currentTime");

function updateCurrentTime() {
    currentTimeElement.text(moment().format('h:mm:ss A'));
}

// Update current time every second
setInterval(updateCurrentTime, 1000);

//Find Current Hour
var currentHour = moment().hour();

//Format Text Areas
$(".time-block").each(function(){
    //Get Hour Value of Each Time Block
    var blockHour = $(this).attr("id").split("-")[1];
    //Get Saved Value from Local Storage and Display in Correct Time Block's Text Area
    var textEntry = localStorage.getItem(blockHour);
    var textArea = $(this).find(".description");
    textArea.val (textEntry);
    //Compare Current Hour to Time Block, Add Appropriate Class to Display Correct Color
    if (blockHour < currentHour){
        $(this).find(".description").addClass("past");
    }else if(blockHour == currentHour){
        $(this).find(".description").addClass("present");
    }else{
        $(this).find(".description").addClass("future");
     }
});

//Save Button Clicked Function
$(".saveBtn").on("click", function(){
    //Key
    var key = $(this).parent().attr("id").split("-")[1];
    //Value
    var value = $(this).parent().find(".description").val();
    //Save Key and Value to Local Storage
    localStorage.setItem(key,value);
});
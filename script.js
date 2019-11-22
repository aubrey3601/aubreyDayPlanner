var date = new Date();
// var day = weekday[day.getDay()];
$("#currentDay").text(date);
// figure out how to strip off things I don't need, and re-order them - look up the string method.spli
console.log(date);


//local storage is a collection of key value pairs, so you need a place to store it (the ID) and the value (the text)
$(".button").on("click", function() {
    var text = $(this).siblings(".description").val();
    //id comes from parent and text value comes from sibling - this will store in local storage
    console.log(text);
})




// LAST THING: moment js - this is another way/library that has to do with time to grey out past 

var num_in_queue = 0;
var one = document.getElementById("Student1");
var two = document.getElementById("Student2");
var three = document.getElementById("Student3");
var four = document.getElementById("Student4");
var five = document.getElementById("Student5");
var six = document.getElementById("Student6");
var seven = document.getElementById("Student7");
var eight = document.getElementById("Student8");
var nine = document.getElementById("Student9");
var ten = document.getElementById("Student10");
var form_submit = document.getElementById("form_submit");
var leave_button = document.getElementById("leave_button");


function get_num_in_queue() {
	return num_in_queue;
}

function increment_queue() {
	console.log("increment");
	num_in_queue += 1;
	initialize_queue();
	form_submit.style.display = "none";
	leave_button.style.display = "block";
}

function decrement_queue() {
	console.log("decrement");
	num_in_queue -= 1;
	initialize_queue();
	leave_button.style.display = "none";
	form_submit.style.display = "block";
}

function initialize_queue() {
	leave_button.style.display = "none";
	one.style.visibility = "hidden";
	two.style.visibility = "hidden";
	three.style.visibility = "hidden";
	four.style.visibility = "hidden";
	five.style.visibility = "hidden";
	six.style.visibility = "hidden";
	seven.style.visibility = "hidden";
	eight.style.visibility = "hidden";
	nine.style.visibility = "hidden";
	ten.style.visibility = "hidden";
	if (num_in_queue == 0) {
		one.style.visibility = "hidden";
		two.style.visibility = "hidden";
		three.style.visibility = "hidden";
		four.style.visibility = "hidden";
		five.style.visibility = "hidden";
		six.style.visibility = "hidden";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 1) {
		one.style.visibility = "visible";
		two.style.visibility = "hidden";
		three.style.visibility = "hidden";
		four.style.visibility = "hidden";
		five.style.visibility = "hidden";
		six.style.visibility = "hidden";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 2) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "hidden";
		four.style.visibility = "hidden";
		five.style.visibility = "hidden";
		six.style.visibility = "hidden";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 3) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "hidden";
		five.style.visibility = "hidden";
		six.style.visibility = "hidden";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 4) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "hidden";
		six.style.visibility = "hidden";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 5) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "visible";
		six.style.visibility = "hidden";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 6) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "visible";
		six.style.visibility = "visible";
		seven.style.visibility = "hidden";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 7) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "visible";
		six.style.visibility = "visible";
		seven.style.visibility = "visible";
		eight.style.visibility = "hidden";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 8) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "visible";
		six.style.visibility = "visible";
		seven.style.visibility = "visible";
		eight.style.visibility = "visible";
		nine.style.visibility = "hidden";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 9) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "visible";
		six.style.visibility = "visible";
		seven.style.visibility = "visible";
		eight.style.visibility = "visible";
		nine.style.visibility = "visible";
		ten.style.visibility = "hidden";
	} else if (num_in_queue == 10) {
		one.style.visibility = "visible";
		two.style.visibility = "visible";
		three.style.visibility = "visible";
		four.style.visibility = "visible";
		five.style.visibility = "visible";
		six.style.visibility = "visible";
		seven.style.visibility = "visible";
		eight.style.visibility = "visible";
		nine.style.visibility = "visible";
		ten.style.visibility = "visible";
	} 
}
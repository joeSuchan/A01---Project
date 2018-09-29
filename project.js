//Changes the GitHub Button
function changeGit() {
    $('#changeGit').attr("src", "Icons/Circle_Color/Github.png")
}
function changeGitBack() {
    $('#changeGit').attr("src", "Icons/Circle_Black_White/Github.png")
}
//Changes the LinkedIn Button
function changeLinkedin() {
    $('#changeLinkedin').attr("src", "Icons/Circle_Color/Linkedin.png")
}
function changeLinkBack() {
    $('#changeLinkedin').attr("src", "Linkedin.png")
}
//Changes the Facebook Logo
function changeFace() {
    $('#facebook').attr("src", "Icons/Circle_Color/Facebook.png")
}
function changeFaceBack() {
    $('#facebook').attr("src", "Icons/Circle_Black_White/Facebook.png")
}
//Changes the BitBucket 
function changeBit() {
    $('#bucket').attr("src", "Icons/Circle_Color/bitBucket.png")
}
function changeBitBack() {
    $('#bucket').attr("src", "Icons/Circle_Black_White/bitBucket.png")
}


$(document).ready(function() {
	
	//GitHub
	$('#changeGit').mouseenter(changeGit);
	$('#changeGit').mouseleave(changeGitBack);
	//LinkedIn
	$('#changeLinkedin').mouseenter(changeLinkedin);
	$('#changeLinkedin').mouseleave(changeLinkBack);
	//Facebook
	$('#facebook').mouseenter(changeFace);
	$('#facebook').mouseleave(changeFaceBack);
	//bitBucket
	$('#bucket').mouseenter(changeBit);
	$('#bucket').mouseleave(changeBitBack);
});

//Tip Calc
document.getElementById('container').onchange = function(){
	let bill = Number(document.getElementById('billTotal').value);
	let tipPercent = document.getElementById('tipInput').value;
	let split = document.getElementById('splitInput').value;
	let tipVal = bill*(tipPercent/100);
	let newBillEach = (bill + tipVal) / split;
	let tipEach = tipVal / split;
	
	document.getElementById('tipOutput').innerHTML = tipPercent + "%";
	document.getElementById('splitOutput').innerHTML = split;
	document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
	document.getElementById('tipEach').innerHTML =  "$" + tipEach.toFixed(2);
}

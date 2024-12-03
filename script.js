alert("app sre dom ka events dekh sakta ha")
// dom ma app sabse se phele console se access kr sakta ho jis ma:
// firstchild
// firstelementchild
// previouselementchild
// childparent wagera se dekh sakta Ha,
// -----------------------------
// phis dosra tareka ka selecting by id aur class method
document.getElementById(".box").style.backgroundColor="blue";
document.getElementById(".box").style.color="yellow";
// -------------------------------
// document.getElementsByClassName();
// document.querySelector();
// ----------------------------------
// inserting aur removeing elements
// dynamically create elements
let div=document.createElement("div");
 div.innerHTML="what are you doing boys <b>i am, very well for coding<b/>"
div.setAttribute("class","craeted");
document.querySelector(".conatiner").append("div");
// -------------------------------
let cont=document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin","i am inserted i am very well");
// --------------------------
// phir class list aur class name ata ha:
classlist
classlist.remove
classlist.add
// -------------------------------
innerHTML
outerhtml
nodename
tagname 
// ---------------------------
// attributes
// has attribute 
// get attribute 
//  set attribute
//  remove attribute
//  -------------------------- 
// DATA ATTRIBUTES
// data-created
// data-concept.
// ------------------------------

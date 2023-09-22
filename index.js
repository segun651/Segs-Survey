let surveyquestions = [
   
    {
        id : 1,
        question: "What is your family's favourite sport.",
         label : {
          one: "Badminton." ,
          two: " Football.",
          three: " Basketball.",
          four: "  Not in the options above."
         }
    },
    {
        id : 2,
        question: "What is your annual family income.",
         label : {
          one: "Less than 100,000 naira." ,
          two: " Between 100,000 to a million naira.",
          three: " A million to 500,000,000 naira.",
          four: "  Over 500,000 000 naira."
         }
    },
    {
        id : 3,
        question: "What is your family's most used service provider.",
         label : {
          one: "Airtel." ,
          two: " MTN.",
          three: " 9mobile.",
          four: "  Not in the options above."
         }
    },
    {
        id : 4,
        question: "What is your marital status.",
         label : {
          one: "Married." ,
          two: " Single.",
          three: " Widow/Widower.",
          four: "  Not in the options above."
         }
    },
    {
        id : 5,
        question: "What is your highest level of qualification.",
         label : {
          one: "School leaving certificate." ,
          two: " Secondary school certificate.",
          three: " B.S.C or B.A.",
          four: "  Not in the options above."
         }
    },
    {
        id : 6,
        question: "How often do you  watch tv.",
         label : {
          one: "1-2 times a week." ,
          two: " 3-5 times a week.",
          three: " Everyday.",
          four: "  Never."
         }
    },
    {
        id : 7,
        question: "How often do you go on vacations.",
         label : {
          one: "Once in year." ,
          two: "2-6 times a year.",
          three: " 7-12 times ayear.",
          four: "  Not in the options above."
         }
    },
    {
        id : 8,
        question: "What brand of phone do you and your family use.",
         label : {
          one: "Iphone." ,
          two: " Samsung.",
          three: " Both.",
          four: "  Not in the options above."
         }
    },
    {
        id : 9,
        question: "Which religion do your and your family practice.",
         label : {
          one: "Christianity." ,
          two: " Islam.",
          three: " Budhism.",
          four: "Other Religions."
         }
    },
    {
        id : 10,
        question: "Who is your favourite superhero.",
         label : {
          one: "Spiderman." ,
          two: " Superman.",
          three: " Batman.",
          four: "  Not in the options above."
         }
    }
]


let question = document.getElementById("question")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
 let prev = document.getElementById("prev")
 let next = document.getElementById("next")
let currentMenu = 0
let number = document.getElementById("number")
let inputbox1 = document.getElementById("input1")
let inputbox2 = document.getElementById("input2")
let inputbox3 = document.getElementById("input3")
let inputbox4 = document.getElementById("input4")
let numbers = 2
   window.onload =()=>{
      changequest(currentMenu)
   }
    

function changequest() {
let menu = surveyquestions[currentMenu]
question.innerHTML = menu.question
 one.innerHTML =  menu.label.one
 two.innerHTML = menu.label.two
 three.innerHTML = menu.label.three
 four.innerHTML = menu.label.four
 
}



 next.addEventListener("click",function(){
     if(inputbox1.checked == false && inputbox2.checked == false && inputbox3.checked == false && inputbox4.checked == false) {
         alert("Pick an option.")
     }
     else {
    currentMenu++
    number.innerHTML = `${numbers++}`
    inputbox1.checked = false
    inputbox2.checked = false
    inputbox3.checked = false
    inputbox4.checked = false
     }
        if(currentMenu > surveyquestions.length - 1) {
             document.location = "complete.html"
        }

    changequest()
 })
 
 
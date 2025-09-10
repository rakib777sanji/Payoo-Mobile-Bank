
////////******** MFS PIN ******//////// 

const validPin = 9988

const transactionData = []

///////******* functions to get input values ///////*******/

function getInputValuenumber (id){
    const inputField = document.getElementById(id)
    const inputfieldvalue = inputField.value
    const inputFieldValueNumber = parseInt(inputfieldvalue)
    return inputFieldValueNumber
}

function getInputvalue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

//////********* Function to get innertext //////*******/

function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// //////******* Function to set innertext  ///////*******/

    function setInnerText (value){
        const availAblebalanceElement = document.getElementById("available-balance")
        availAblebalanceElement.innerText = value
    }

    ////////******** */ function to toggle *////////***** */ 
    function handleToggle(id){
     const forms = document.getElementsByClassName("form")
   for (const form of forms){
    form.style.display = "none"
   }
   document.getElementById(id).style.display = "block"
    }

    // function to toggle buttons /////*///

   function handleTogglebutton(id){

       const formBtns = document.getElementsByClassName("form-btn")

    for (const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")

    }
     document.getElementById(id).classList.remove("border-gray-300")

     document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")

   }



//////******** Add money feature ///////******/

document.getElementById("add-money-btn").addEventListener("click", function(e){
e.preventDefault()
const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("account-number").value
const amount = getInputValuenumber ("add-amount")

if(amount < 100) {
    alert("Invalid Amount")
    return;
}

const pin = getInputValuenumber ("add-pin")

const availableBalance = getInnerText("available-balance")

if (accountNumber.length <13) {
    alert("Invalid account number")
    return;
}

if (pin !== validPin){
    alert("Invalid pin number")
    return;
}

const totalNewAvailableBalance = amount + availableBalance
setInnerText (totalNewAvailableBalance)

const data = {
    name :"Add Money",
    date :new Date().toLocaleTimeString()
}

    transactionData.push(data)
    console.log(transactionData)

})

//******* */ Cash-Out Money Feature ///////****** */

document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()
    
    const amount = getInputValuenumber("withdraw-amount")

    const availableBalance = getInnerText("available-balance")

     if (amount < 100 || amount > availableBalance){
        alert("Invalid Amount")
        return;
     }

    const agentNumber = document.getElementById("agent-number").value
    const withdrawPin = getInputValuenumber("withdraw-pin")

    if (agentNumber.length < 11){
        alert("invalid agent number")
        return;
    }

    if (withdrawPin !== validPin){
        alert("Invalid pin number")
    }


    const totalNewAvailableBalance = availableBalance - amount
    console.log(totalNewAvailableBalance)
    setInnerText (totalNewAvailableBalance)

   const data = {
    name :"Cash Out",
    date :new Date().toLocaleTimeString()
}

    transactionData.push(data)
    console.log(transactionData)


})

//  **/////// transaction section **////////


document.getElementById("transaction-btn").addEventListener("click", function(){

      const transactionContainer = document.getElementById("transaction-container")
      transactionContainer.innerText = ""

      for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML=`
              <div class="bg-white rounded-xl p-4 flex justify-between items-center mt-3">
                  <div class="flex items-center">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png" class="mx-auto" alt="">
            </div>
            <div class="ml-3">
                  <h1>${data.name}</h1>
                  <p>${data.date}</p>
            </div>
      </div>

      <i class="fa-solid fa-ellipsis-vertical"></i>
   </div>

        `

         transactionContainer.appendChild(div)

      }

})


// //////*******Toggling Feature ///**********/
document.getElementById("add-mny-btn").addEventListener("click", function(){
    handleToggle("add-money-parent")
    
   handleTogglebutton("add-mny-btn")

})



document.getElementById("cash-out-button").addEventListener("click", function(){

      handleToggle("cash-out-parent")

      handleTogglebutton("cash-out-button")


})

document.getElementById("transfer-btn").addEventListener("click", function(){

      handleToggle("transfer-money-parent")
     
           handleTogglebutton("transfer-btn")


})

document.getElementById("bonus-btn").addEventListener("click", function(){
   
       handleToggle("get-bonus-parent")

          handleTogglebutton("bonus-btn")

})

document.getElementById("pay-bill-btn").addEventListener("click", function(){
    
    handleToggle("pay-bill-parent")

      handleTogglebutton("pay-bill-btn")

})


document.getElementById("transaction-btn").addEventListener("click", function(){
    
    handleToggle("transaction-parent")

      handleTogglebutton("transaction-btn")

})


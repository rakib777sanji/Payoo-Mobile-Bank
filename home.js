
////////******** MFS PIN ******//////// 

const validPin = 9988

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


//////******** Add money feature ///////******/

document.getElementById("add-money-btn").addEventListener("click", function(e){
e.preventDefault()
const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("account-number").value
const amount = getInputValuenumber ("add-amount")
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
})

//******* */ Cash-Out Money Feature ///////****** */

document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()
    
    const amount = getInputValuenumber("withdraw-amount")

    const availableBalance = getInnerText("available-balance")
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

})


// //////*******Toggling Feature ///**********/
document.getElementById("add-mny-btn").addEventListener("click", function(){
    handleToggle("add-money-parent")
})


document.getElementById("cash-out-button").addEventListener("click", function(){

      handleToggle("cash-out-parent")
})

document.getElementById("transfer-btn").addEventListener("click", function(){

      handleToggle("transfer-money-parent")
})

document.getElementById("bonus-btn").addEventListener("click", function(){
    handleToggle("get-bonus-parent")
})

document.getElementById("pay-bill-btn").addEventListener("click", function(){
    handleToggle("pay-bill-parent")
})


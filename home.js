
// Add money feature 

const validPin = 9988

document.getElementById("add-money-btn").addEventListener("click", function(e){
e.preventDefault()
const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("account-number").value
const amount = parseInt(document.getElementById("add-amount").value)
const pin = parseInt(document.getElementById("add-pin").value)
const availableBalance = parseInt(document.getElementById("available-balance").innerText)
console.log(amount, availableBalance)
if (accountNumber.length <13) {
    alert("Please provide a valid account number")
    return;
}
if (pin !== validPin){
    alert("Please provide a valid pin number")
    return;
}
const totalNewAvailableBalance = amount + availableBalance
document.getElementById("available-balance").innerText = totalNewAvailableBalance
})

// Cash-Out Money Feature 

document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()
    
    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const agentNumber = document.getElementById("agent-number").value
    const withdrawPin = parseInt(document.getElementById("withdraw-pin").value)

    if (agentNumber.length <11){
        alert("Please provide a valid agent number")
        return;
    }
    if (withdrawPin !== validPin){
        alert("Please provide a valid pin number")
    }


    const totalNewAvailableBalance = availableBalance - amount
    console.log(totalNewAvailableBalance)
    document.getElementById("available-balance").innerText = totalNewAvailableBalance

})


// Toggling Feature */
document.getElementById("add-mny-btn").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})


document.getElementById("cash-out-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})
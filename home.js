document.getElementById("loginButton").
addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 01988095193
    const pinNumber = 9988
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    console.log(mobileNumberValueConverted, pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        console.log("All Values Matched")
    }
    else{
        console.log("Invalid Credintials")
    }
})
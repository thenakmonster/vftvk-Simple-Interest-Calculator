function compute() {

    // Checks if the Amount input is empty, 0,
    // or a negative value

    if (validatePrinciple()) {
        var principle = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = (principle * years * rate )/ 100;
        var amount = interest + parseInt(principle)
        var year = new Date().getFullYear() + parseInt(years);

        updateResult([principle, rate, interest, year])
    }
    else null
}

function updateResult(array) {

    // This displays the simple interest result

    [principle, rate, amount, year] = array
    var ResultSpan = document.getElementById("result");
    ResultSpan.innerHTML =
        "If you deposit " + "<mark>" + principle  + "</mark>" +
         "\<br\>at an interest rate of " + "<mark>" + rate + "%" + 
         "</mark>" + ".\<br\>You will receive an amount of "+ "<mark>" + 
         amount + "</mark>" + ",\<br\>in the year " + "<mark>" + year +  
         "</mark>" + "\<br\>"
}

function updateRate() {

    // This function updates the rate value

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+ "%";
}

function validatePrinciple() {

    //  This function validates the principle value
    // return false if validation fails, 
    // returns true if pass

    var principle = document.getElementById("principal").value;
    if (principle === '0' || principle.length == 0 || parseInt(principle) < 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return false
    } else {
        return true
    }
}

function validateForm()
{
  showAlert();
  let mortgageAmount = parseInt(document.getElementById("Mortgage").value);
  let interestRate = parseInt(document.getElementById("Interest").value);
  let loanLength = parseInt(document.getElementById("Loan").value);
  let postalCode = document.getElementById("Postal").value;
  if (isNaN(mortgageAmount) || mortgageAmount < 0) {
    let error = document.getElementById("mortgageError");
    error.innerHTML = "Mortgage Amount must be a positive number.";
    error.style.color = 'red';
    document.getElementById("Mortgage").classList.add("is-invalid");
  } 
  if (isNaN(interestRate) || interestRate < 0) {
    let error2 = document.getElementById("interestError");
    error2.innerHTML = "Interest Rate must be a positive number.";
    error2.style.color = 'red';
    document.getElementById("Interest").classList.add("is-invalid");
  }
  if (isNaN(loanLength) || loanLength < 5 || loanLength > 30) {
    let error3 = document.getElementById("LoanError");
    error3.innerHTML = "Loan Length must be between 5-30 years.";
    error3.style.color = 'red';
    document.getElementById("Loan").classList.add("is-invalid");
  }
  if (typeof postalCode !== 'string' || postalCode.length !== 7 || postalCode.charAt(0) !== 'L' ) {
    let error4 = document.getElementById("PostalError");
    error4.innerHTML = "Must be located in Hamilton.";
    error4.style.color = 'red';
    document.getElementById("Postal").classList.add("is-invalid");
  }
  validFeedback();

  
  let totalMortgage = mortgageAmount * ((interestRate * ((1 + interestRate) ** loanLength)) / (((1 + interestRate)) ** loanLength) - 1);
  //mortgageAmount * ((interestRate * ((1 + interestRate) ** loanLength)) / (((1 + interestRate)) ** loanLength) - 1);
  let payment = document.getElementById("totalMortgage");
  payment.innerHTML = "Total Mortgage payment: " + totalMortgage;
  

}

function clearErrors() {
  hideAlert();
  clearFeedback();
  let error1 = document.getElementById("mortgageError");
  let error2 = document.getElementById("interestError");
  let error3 = document.getElementById("LoanError");
  let error4 = document.getElementById("totalMortgage");
  let payment = document.getElementById("PostalError");
  error1.innerHTML = "";
  error2.innerHTML = "";
  error3.innerHTML = "";
  error4.innerHTML = "";
  payment.innerHTML = "";
}

function hideAlert() {
    $("#alertBox").hide();
    $("#totalMortgage").hide();
  }

  function showAlert() {
    $("#alertBox").show();
    $("#totalMortgage").show();
  }

  function validFeedback() 
  {
    if (!document.getElementById("Mortgage").classList.contains("is-invalid")) {
      document.getElementById("Mortgage").classList.add("is-valid");
    }
    if (!document.getElementById("Interest").classList.contains("is-invalid")) {
      document.getElementById("Interest").classList.add("is-valid");
    }
    if (!document.getElementById("Loan").classList.contains("is-invalid")) {
      document.getElementById("Loan").classList.add("is-valid");
    }
    if (!document.getElementById("Postal").classList.contains("is-invalid")) {
      document.getElementById("Postal").classList.add("is-valid");
    }

    
  }

  function clearFeedback() {
    if (document.getElementById("Mortgage").classList.contains("is-invalid")) {
      document.getElementById("Mortgage").classList.remove("is-invalid")
    } else if (document.getElementById("Mortgage").classList.contains("is-valid")) {
      document.getElementById("Mortgage").classList.remove("is-valid")
    }
    if (document.getElementById("Interest").classList.contains("is-invalid")) {
      document.getElementById("Interest").classList.remove("is-invalid")
    } else if (document.getElementById("Interest").classList.contains("is-valid")) {
      document.getElementById("Interest").classList.remove("is-valid")
    }
    if (document.getElementById("Loan").classList.contains("is-invalid")) {
      document.getElementById("Loan").classList.remove("is-invalid")
    } else if (document.getElementById("Loan").classList.contains("is-valid")) {
      document.getElementById("Loan").classList.remove("is-valid")
    }
    if (document.getElementById("Postal").classList.contains("is-invalid")) {
      document.getElementById("Postal").classList.remove("is-invalid")
    } else if (document.getElementById("Postal").classList.contains("is-valid")) {
      document.getElementById("Postal").classList.remove("is-valid")
    }
  }

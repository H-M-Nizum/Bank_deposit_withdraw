// get input field value and convert into number
function inputdata(inputID) {
  let input = document.getElementById(inputID);
  const inputvalue = input.value;
  input.value = "";
  return parseFloat(inputvalue);
}

//  get balance field text and convert into number
function balancedata(balanceID) {
  const balancevalue = document.getElementById(balanceID).innerText;
  return parseFloat(balancevalue);
}

// set innertext
function setbalance(textid, value) {
  document.getElementById(textid).innerText = value;
}

// deposit money

document.getElementById("deposit_id").addEventListener("click", () => {
  const inputamount = inputdata("deposit_input");
  const previousDepositAmount = balancedata("diposit_balance_id");
  const previousTotalAmount = balancedata("total_balance_id");
  if (isNaN(inputamount) || inputamount <= 0) {
    alert("Please enter valid amount");
    return;
  }

  setbalance("diposit_balance_id", previousDepositAmount + inputamount);
  setbalance("total_balance_id", previousTotalAmount + inputamount);
});

// withdraw money
document.getElementById("withdraw_id").addEventListener("click", () => {
  const inputamount = inputdata("withdraw_input");
  const previousWithdrawAmount = balancedata("withdraw_balance_id");
  const previoustotalamount = balancedata("total_balance_id");
  if (
    isNaN(inputamount) ||
    inputamount <= 0 ||
    inputamount > previoustotalamount
  ) {
    alert("Please enter valid amount");
    return;
  }

  setbalance("withdraw_balance_id", previousWithdrawAmount + inputamount);
  setbalance("total_balance_id", previoustotalamount - inputamount);
});

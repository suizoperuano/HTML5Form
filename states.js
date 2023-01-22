
let states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

let select = document.getElementById("inputState");

for (let i = 0; i < states.length; i++) {
    let option = document.createElement("option");
    option.value = states[i];
     option.text = states[i];
    select.appendChild(option);
}

function validate() {
  let input_1 = document.getElementById("card-number").value;
  let input_2 = document.getElementById("cvc-number").value;
  let input_3 = document.getElementById("first-name").value;
  let input_4 = document.getElementById("last-name").value;
  let input_5 = document.getElementById("city").value;
  let input_6 = document.getElementById("inputState").value;
  let input_7 = document.getElementById("postal-code").value;

  let alert_textbox = document.getElementById("alert-field");

  if (input_1 == "" || input_2 == "" || input_3 == "" || input_4 == "" || input_5 == "" || input_6 == "" || input_6 == "pick a state"|| input_7 == "") {
    alert_textbox.style.display = "block";
  }
  else {
    alert_textbox.style.display = "none";
  }
  }
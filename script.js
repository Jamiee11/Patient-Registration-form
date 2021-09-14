var stateObject = {
    "India": {
        "Andhra Pradesh": ["Amaravati"],
        "Arunachal Pradesh": ["Itanagar"],
        "Assam": ["Dispur"],
        "Bihar": ["Patna"],
        "Chhattisgarh": ["Raipur"],
        "Goa": ["Panaji"],
        "Gujarat": ["Gandhinagar"],
        "Haryana": ["Chandigarh"],
        "Himachal Pradesh": ["Shimla"],
        "Jammu and Kashmir": ["Srinagar"],
        "Jharkhand": ["Ranchi"],
        "Karnataka": ["Bengaluru"],
        "Kerala": ["Thiruvananthapuram"],
        "Madhya Pradesh": ["Bhopal"],
        "Maharashtra": ["Mumbai"],
        "Manipur": ["Imphal"],
        "Meghalaya": ["Shillong"],
        "Mizoram": ["Aizawl"],
        "Nagaland": ["Kohima"],
        "Odisha": ["Bhubaneswar"],
        "Punjab": ["Chandigarh"],
        "Rajasthan": ["Jaipur"],
        "Sikkim": ["Gangtok"],
        "Tamil Nadu": ["Chennai"],
        "Telangana": ["Hyderabad"],
        "Tripura": ["Agartala"],
        "Uttar Pradesh": ["Lucknow"],
        "Uttarakhand": ["Dehradun"],
        "West Bengal": ["Kolkata"],
    },
    "Australia": {
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
    },
    "Canada": {
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington", ""]
    },
}
window.onload = function() {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function() {
        stateSel.length = 1;
        districtSel.length = 1;
        if (this.selectedIndex < 1) return;
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange();
    stateSel.onchange = function() {
        districtSel.length = 1;
        if (this.selectedIndex < 1) return;
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}

function img(x) {
    if (x == 0)
        document.getElementById('myimg').style.display = 'block';
    else
        document.getElementById('myimg').style.display = 'none';
    return;
}

function handler(e) {
    console.log(typeof(e.target.value));
    var date = e.target.value
    var optimizeddate = date.replace(/-/g, "/");
    var mydate = new Date(optimizeddate);
    var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
    var myAge = ~~((Date.now(currentDate) - mydate) / (31557600000));
    if (myAge < 18) {
        console.log(false);
        document.getElementById('birth').style.display = 'block';
    } else {
        console.log(true);
        document.getElementById('birth').style.display = 'none ';
    }
}
form.addEventListner('submit', (e) => {
    console.log("summited");
});
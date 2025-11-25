function calculateBMI(){
    let w = parseFloat(document.getElementById('weight').value);
    let h = parseFloat(document.getElementById('height').value) / 100;
    if(!w || !h){ 
        document.getElementById('result').innerText = "Please enter valid values.";
        return;
    }
    let bmi = w / (h*h);
    let category = "";
    if(bmi < 18.5) category = "Underweight";
    else if(bmi < 24.9) category = "Normal weight";
    else if(bmi < 29.9) category = "Overweight";
    else category = "Obese";
    document.getElementById('result').innerText = "Your BMI: " + bmi.toFixed(2) + " (" + category + ")";
}

function calculateAge() {
    var birthDate = document.getElementById("birthDate").value;
    var birthMonth = document.getElementById("birthMonth").value;
    var birthYear = document.getElementById("birthYear").value;

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Month is 0-based

    // Calculate age
    var age = currentYear - birthYear;

    // Check if birthday has occurred this year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate)) {
        age--;
    }

    // Display the age
    document.getElementById("result").innerHTML = "Your age is: " + age + " years";
}

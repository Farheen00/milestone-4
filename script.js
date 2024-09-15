var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("edu");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var edu = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var resumeOutput = " <h2>Resume</h2>\n   <p> <strong> Name: </strong> <span id=\"editName\" class=\"editable\"> ".concat(name_1, "</span></p>   \n    <p> <strong> Email: </strong><span id=\"editEmail\" class=\"editable\"> ").concat(email, "</span></p>   \n    <p> <strong> Phone: </strong><span id=\"editPhone\" class=\"editable\"> ").concat(phone, "</span></p>\n\n    <h3> Education </h3>\n    <p> <span id=\"editEducation\" class=\"editable\"> ").concat(edu, "</span> </p>\n\n    <h3> Experience </h3>\n    <p Experience> <span id=\"editExperience\" class=\"editable\"> ").concat(experience, " </span> </p>\n\n    <h3> Skill </h3>\n    <p> <span id=\"editSkill\" class=\"editable\"> ").concat(skill, " </span> </p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameElement = document.getElementById("name") as HTMLInputElement;
  let emailElement = document.getElementById("email") as HTMLInputElement;
  let phoneElement = document.getElementById("phone") as HTMLInputElement;
  let educationElement = document.getElementById("edu") as HTMLInputElement;
  let experienceElement = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  let skillElement = document.getElementById("skill") as HTMLInputElement;

  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillElement
  ) {
    let name = nameElement.value;
    let email = emailElement.value;
    let phone = phoneElement.value;
    let edu = educationElement.value;
    let experience = experienceElement.value;
    let skill = skillElement.value;

    const resumeOutput = ` <h2>Resume</h2>
   <p> <strong> Name: </strong> <span id="editName" class="editable"> ${name}</span></p>   
    <p> <strong> Email: </strong><span id="editEmail" class="editable"> ${email}</span></p>   
    <p> <strong> Phone: </strong><span id="editPhone" class="editable"> ${phone}</span></p>

    <h3> Education </h3>
    <p> <span id="editEducation" class="editable"> ${edu}</span> </p>

    <h3> Experience </h3>
    <p Experience> <span id="editExperience" class="editable"> ${experience} </span> </p>

    <h3> Skill </h3>
    <p> <span id="editSkill" class="editable"> ${skill} </span> </p>
    `;

    let resumeOutputElement = document.getElementById("resumeOutput");

    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;

      makeEditable();
    }
  }
});

function makeEditable() {
  let editableElement = document.querySelectorAll(".editable");

  editableElement.forEach((element) => {
    element.addEventListener("click", function () {
      let currentElement = element as HTMLElement;
      let currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
        let input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}

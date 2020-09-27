const inputs = document.querySelectorAll(".input");

function addContent() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remContent() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addContent);
  input.addEventListener("blur", remContent);
});

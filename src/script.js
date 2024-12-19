const buttonMenu = document.querySelector(".show-menu")
buttonMenu.addEventListener("click", toggleVisibility)

function toggleVisibility() {
  let dropDownContainer = document.querySelector(".drop-down-container")
  if (dropDownContainer.style.visibility === "visible") {
    dropDownContainer.setAttribute("style", "visibility: hidden")
  } else {
    dropDownContainer.setAttribute("style", "visibility: visible")
  }
}

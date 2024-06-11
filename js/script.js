window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content"),
    tabParents = document.querySelector(".tabheader__items");

  const hideTabContents = () => {
    tabContents.forEach((element) => {
      element.style.display = "none";
    });

    tabs.forEach((element) => {
      element.classList.remove("tabheader__item_active");
    });
  };

  hideTabContents();

  const showTabContent = (index) => {
    tabContents[index].style.display = "flex";
    tabs[index].classList.add("tabheader__item_active");
  };

  showTabContent(1);
});

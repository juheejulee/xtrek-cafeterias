const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      arrow.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      arrow.style.transform = "rotate(180deg)";
    }
  });
});

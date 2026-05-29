const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");

let activeFilter = "all";

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    activeFilter = tab.getAttribute("data-filter");
    filterCards();
  });
});

searchInput.addEventListener("input", filterCards);

function filterCards() {
  const searchValue = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const category = card.getAttribute("data-category");
    const name = card.getAttribute("data-name") || "";

    const categoryMatch = activeFilter === "all" || category === activeFilter;
    const searchMatch = name.includes(searchValue);

    if (categoryMatch && searchMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

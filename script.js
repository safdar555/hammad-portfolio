const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggle.onclick = () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
};

// SORT TABLE
function sortTable(col) {
  const table = document.getElementById("academicTable");
  let rows = Array.from(table.rows).slice(1);
  rows.sort((a, b) =>
    a.cells[col].innerText.localeCompare(b.cells[col].innerText)
  );
  rows.forEach(r => table.tBodies[0].appendChild(r));
}

// SEARCH
document.getElementById("search").addEventListener("keyup", function () {
  let val = this.value.toLowerCase();
  document.querySelectorAll("#academicTable tbody tr").forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(val) ? "" : "none";
  });
});

// CV
function loadCV() {
  const iframe = document.getElementById("cvViewer");
  iframe.src = "cv.pdf";
  iframe.style.display = "block";
}

// FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  let error = document.getElementById("error");
  if(!name.value || !email.value || !message.value){
    error.textContent = "All fields are required!";
    error.style.color = "red";
  } else {
    error.textContent = "Message sent successfully!";
    error.style.color = "lightgreen";
    this.reset();
  }
});

// GALLERY
let images = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let index = 0;

function next(){
  index = (index + 1) % images.length;
  slider.src = images[index];
}
function prev(){
  index = (index - 1 + images.length) % images.length;
  slider.src = images[index];
}

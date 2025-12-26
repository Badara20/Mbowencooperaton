// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    if (name && phone) {
      alert(`Thanks ${name}! We will reply to you soon.`);
      contactForm.reset();
    } else {
      alert("Please enter your name and phone/WhatsApp.");
    }
  });
}

// Income/expense tracker
const transactionForm = document.getElementById("transaction-form");
const typeEl = document.getElementById("type");
const descEl = document.getElementById("description");
const amountEl = document.getElementById("amount");
const bodyEl = document.getElementById("transaction-body");
const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const balanceEl = document.getElementById("balance");

let totalIncome = 0;
let totalExpense = 0;

if (
  transactionForm &&
  typeEl &&
  descEl &&
  amountEl &&
  bodyEl &&
  totalIncomeEl &&
  totalExpenseEl &&
  balanceEl
) {
  transactionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const type = typeEl.value;
    const desc = descEl.value.trim();
    const amount = parseFloat(amountEl.value);

    if (!desc || isNaN(amount) || amount <= 0) {
      alert("Please enter a description and a positive amount.");
      return;
    }

    const date = new Date().toLocaleDateString();

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${date}</td>
      <td>${type}</td>
      <td>${desc}</td>
      <td>${amount.toFixed(2)}</td>
    `;
    bodyEl.appendChild(tr);

    if (type === "income") {
      totalIncome += amount;
    } else {
      totalExpense += amount;
    }

    totalIncomeEl.textContent = totalIncome.toFixed(2);
    totalExpenseEl.textContent = totalExpense.toFixed(2);
    balanceEl.textContent = (totalIncome - totalExpense).toFixed(2);

    descEl.value = "";
    amountEl.value = "";
    descEl.focus();
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Tab switching
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-tab');

    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));

    this.classList.add('active');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

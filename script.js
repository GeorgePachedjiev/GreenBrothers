const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function showPhone() {
  Swal.fire({
    title: "GREEN BROTHERS",
    html: `
      <h2 style="font-size:32px;margin:10px 0;color:#155f2b;">0886749861</h2>
      <p style="font-size:18px;">Viber и WhatsApp</p>
      <br>
      <a href="tel:0886749861" style="
        display:inline-block;
        background:#27a64d;
        color:white;
        padding:14px 24px;
        border-radius:12px;
        text-decoration:none;
        font-weight:900;
      ">Обади се</a>
    `,
    showConfirmButton: true,
    confirmButtonText: "Затвори",
    confirmButtonColor: "#155f2b"
  });
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !message) {
    Swal.fire({
      title: "Попълнете всички полета",
      icon: "warning",
      confirmButtonColor: "#155f2b"
    });
    return;
  }

  const text = `Здравейте, казвам се ${name}. Телефон: ${phone}. Запитване: ${message}`;
  const whatsappUrl = `https://wa.me/359886749861?text=${encodeURIComponent(text)}`;

  Swal.fire({
    title: "Изпращане на запитване",
    text: "Ще бъдете пренасочени към WhatsApp.",
    icon: "success",
    confirmButtonText: "Продължи",
    confirmButtonColor: "#155f2b"
  }).then(() => {
    window.open(whatsappUrl, "_blank");
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
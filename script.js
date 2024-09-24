// Script sederhana untuk efek smooth scroll di navbar
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to toggle the visibility of the menu in mobile view
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Ambil tombol dengan id "signInBtn"
const signInButton = document.getElementById("signInBtn");

// Tambahkan event listener ketika tombol diklik
signInButton.addEventListener("click", function() {
    // Gunakan path relatif ke halaman dashboard
    window.location.href = "./SignIn.html"; // Path relatif
});

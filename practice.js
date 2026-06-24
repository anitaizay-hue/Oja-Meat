
function openWhatsApp(phoneNumber, message="") {
    let cleanNumber = phoneNumber
    .split("+").join("")
    .split("").join("")
    .split("-").join("")
    .split("(").join("")
    .split(")").join("")

    const url = "https://wa.me/" + cleanNumber;
    const textMessage = "?text" + encodeURIComponent(message);
    const fullLink = url + textMessage;

    window.open(fullLink, "_blank");
    
}
function sendOrder() {
openWhatsApp("2348038313446", "Hello! I'd like to book an appointment."); 
}

function toggleLocation() {
    const dropdown = document.getElementById('locationDropdown');
    dropdown.classList.toggle('open');
}

// close when clicking outside
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.location-wrapper');
    if (!wrapper.contains(e.target)) {
        document.getElementById('locationDropdown').classList.remove('open');
    }
});

document.querySelectorAll('input[name="location"]').forEach(r => {
    r.addEventListener('change', () => {
        document.getElementById('sendLocationBtn').disabled = false;
    });
});

function sendLocation() {
    const selected = document.querySelector('input[name="location"]:checked');
    if (!selected) return;
    const message = encodeURIComponent(`Hello! I want to place an order. My delivery location is: *${selected.value}*`);
    window.open(`https://wa.me/2348038313446?text=${message}`, '_blank');
}
// Inisialisasi AOS (Animation on Scroll)
AOS.init({ duration: 1200 });

// Countdown Timer
const weddingDate = new Date("July 10, 2027 10:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "HARI BAHAGIA TELAH TIBA";
    }
}, 1000);

// RSVP Form Handle
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih atas ucapan dan doa restunya!');
    this.reset();
});

// Music Control (Toggle play/pause simple logic)
const musicBtn = document.getElementById('music-control');
let isPlaying = true;

musicBtn.addEventListener('click', () => {
    const iframe = document.getElementById('youtube-audio');
    if (isPlaying) {
        iframe.src = iframe.src.replace("autoplay=1", "autoplay=0");
        musicBtn.innerText = "🔇";
    } else {
        iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
        musicBtn.innerText = "🎵";
    }
    isPlaying = !isPlaying;
});


function copyToClipboard() {
    const rek = document.getElementById("nomor-rekening").innerText;
    const btnText = document.getElementById("copy-text");

    navigator.clipboard.writeText(rek).then(() => {
        btnText.innerText = "✅ Tersalin!";
        setTimeout(() => {
            btnText.innerText = "Salin No. Rekening";
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

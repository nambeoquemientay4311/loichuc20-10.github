// Thiết lập ngày mục tiêu (00:00:00 ngày 20/10 của năm hiện tại)
const currentYear = new Date().getFullYear(); 
const targetDate = new Date(`October 20, ${currentYear} 00:00:00`).getTime();

const countdownContainer = document.getElementById('countdown-container');
const greetingContainer = document.getElementById('greeting-container');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 🌟 LOGIC CHUYỂN GIAO DIỆN KHI HẾT GIỜ 🌟
    if (distance <= 0) {
        clearInterval(countdownInterval);
        
        // 1. Áp dụng hiệu ứng mờ dần cho đồng hồ
        countdownContainer.style.opacity = '0'; 
        countdownContainer.style.pointerEvents = 'none'; 
        
        setTimeout(() => {
            // 2. Ẩn hoàn toàn đồng hồ
            countdownContainer.style.display = 'none'; 
            
            // 3. Hiển thị lời chúc với hiệu ứng mượt mà
            greetingContainer.classList.remove('hidden'); 
            greetingContainer.classList.add('show');
        }, 1000); // Chờ 1 giây (phù hợp với transition trong CSS)
        
        // Cập nhật số đếm cuối cùng về 00
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        
        return;
    }

    // Tính toán thời gian
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật lên HTML
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// Chạy hàm lần đầu và lặp lại mỗi 1 giây
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
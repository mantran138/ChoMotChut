// Tính toán thời gian đến 10:30 PM hôm nay
function calculateTimeUntilTarget() {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(22, 30, 0, 0); // 10:30 PM
  
    // Nếu đã qua 10:30 PM, chuyển sang ngày hôm sau
    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }
  
    return targetTime - now;
  }
  
  // Cập nhật bộ đếm thời gian và nội dung thông báo
  function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.querySelector("h1");
  
    function updateCountdown() {
      const timeLeft = calculateTimeUntilTarget();
      const minutesLeft = Math.floor(timeLeft / (1000 * 60));
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        window.location.href = "hint.html"; // Đường dẫn sang trang khác
      } else {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        countdownElement.textContent = `Còn ${hours} giờ ${minutes} phút ${seconds} giây`;
  
        // Thay đổi thông báo khi thời gian còn lại <= 30 phút
        if (minutesLeft <= 30) {
          messageElement.textContent = "Em bé chờ một chút nữa nhé, rồi em sẽ thấy thuiii";
        } else {
          messageElement.textContent = "Chờ nhiều chúttt, hỏng ai iu em bằng anh iu em đâuuu";
        }
      }
    }
  
    updateCountdown(); // Gọi lần đầu tiên ngay lập tức
    const interval = setInterval(updateCountdown, 1000);
  }
  
  // Bắt đầu đếm ngược
  startCountdown();
  
  // Phát nhạc khi người dùng nhấn nút
  const playMusicButton = document.getElementById("play-music");
  const backgroundMusic = document.getElementById("background-music");
  
  playMusicButton.addEventListener("click", () => {
    backgroundMusic.volume = 0.5; // Điều chỉnh âm lượng (0.0 - 1.0)
    backgroundMusic.play().then(() => {
      playMusicButton.style.display = "none"; // Ẩn nút sau khi nhạc bắt đầu
    }).catch(error => {
      console.log("Lỗi phát nhạc:", error);
    });
  });
  
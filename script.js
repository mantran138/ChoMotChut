// Tính toán thời gian đến 1 tháng 12 năm 2024, 22:30
function calculateTimeUntilTarget() {
    const now = new Date();
    const targetTime = new Date(2024, 11, 1, 21, 16, 0); // Tháng 11 là tháng 12 trong JS (0-based)
  
    return targetTime - now;
  }
  
  // Hiển thị thông báo khi hết thời gian
  function showEndMessage() {
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
    const goButton = document.getElementById("go-button");
  
    countdownElement.textContent = ""; // Xóa bộ đếm thời gian
    messageElement.textContent = "Đã đến giờ đi rồiiii";
    goButton.classList.remove("hidden"); // Hiện nút "đi thôi"
  }
  
  // Cập nhật bộ đếm thời gian và nội dung thông báo
  function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const timeLeft = calculateTimeUntilTarget();
  
    if (timeLeft <= 0) {
      showEndMessage(); // Hiển thị thông báo ngay nếu đã hết giờ
    } else {
      const interval = setInterval(() => {
        const timeLeft = calculateTimeUntilTarget();
  
        if (timeLeft <= 0) {
          clearInterval(interval);
          showEndMessage(); // Hiển thị thông báo khi hết giờ
        } else {
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
          countdownElement.textContent = `Còn ${hours} giờ ${minutes} phút ${seconds} giây`;
        }
      }, 1000);
    }
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
  
  // Điều hướng khi nhấn nút "đi thôi"
  const goButton = document.getElementById("go-button");
  goButton.addEventListener("click", () => {
    window.location.href = "https://mantran138.github.io/OurFirstAnni/";
  });
  
    document.addEventListener('DOMContentLoaded', function() {
        const pomodoroButton = document.querySelector('.btn-primary:nth-of-type(1)');
        const shortBreakButton = document.querySelector('.btn-primary:nth-of-type(2)');
        const longBreakButton = document.querySelector('.btn-primary:nth-of-type(3)');
        const startButton = document.querySelector('.d-grid:nth-of-type(2) .btn-primary:nth-of-type(1)');
        const stopButton = document.querySelector('.d-grid:nth-of-type(2) .btn-primary:nth-of-type(2)');
        const timerDisplay = document.getElementById('heading-two');

        let timer; // Variable to hold the interval timer
        let timeLeft = 0;
        let duration = 0;

        function startTimer(durationInMinutes) {
            clearInterval(timer); // Clear any existing timer

            duration = durationInMinutes * 60; // Convert minutes to seconds
            timeLeft = duration;

            updateTimerDisplay();

            timer = setInterval(function() {
                timeLeft--;

                if (timeLeft >= 0) {
                    updateTimerDisplay();
                } else {
                    clearInterval(timer);
                    // Optionally add a notification or sound for timer completion
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        // Event listeners for buttons
        pomodoroButton.addEventListener('click', function() {
            startTimer(25);
        });

        shortBreakButton.addEventListener('click', function() {
            startTimer(5);
        });

        longBreakButton.addEventListener('click', function() {
            startTimer(15);
        });

        startButton.addEventListener('click', function() {
            startTimer(duration / 60); // Resume current timer duration
        });

        stopButton.addEventListener('click', function() {
            clearInterval(timer);
        });
    });
document.addEventListener("DOMContentLoaded", function() {
    const nivelSelect = document.getElementById("nivel");
    const timerDisplay = document.getElementById("tempo");
    const startButton = document.getElementById("btnInicio");
    const pauseButton = document.getElementById("btnPausa");
    const stopButton = document.getElementById("btnParar");
    const messageDisplay = document.getElementById("mensagem");
    const randomNumberDisplay = document.getElementById("ramNum");
    const correctCountDisplay = document.getElementById("correct-count");
    const wrongCountDisplay = document.getElementById("wrong-count");
    const evenCountDisplay = document.getElementById("even-count");
    const displayPercentage = document.getElementById("porcentagem")

    let timer;
    let isGameRunning = false;
    let nivel = "easy";
    let timeToChangeNumber = 1000;

    const nivelTimes = {
        easy: 105,
        medium: 75,
        hard: 30,
    };

    const nivelTimeToChangeNumber = {
        easy: 1000,
        medium: 750,
        hard: 500,
    };

    let remainingTime = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let evenCount = 0;

    nivelSelect.addEventListener("change", function() {
        if (!isGameRunning) {
            nivel = nivelSelect.value;
            setTimerDuration();
            setTimeToChangeNumber();
        } else {
            nivelSelect.value = nivel;
        }
    });

    function setTimerDuration() {
        timerDisplay.textContent = formatTime(nivelTimes[nivel]);
    }

    function setTimeToChangeNumber() {
        timeToChangeNumber = nivelTimeToChangeNumber[nivel];
    }

    startButton.addEventListener("click", function() {
        if (nivelSelect.value === "") {
            messageDisplay.textContent = "Por favor, selecione um nível.";
        } else {
            if (!isGameRunning) {
                isGameRunning = true;
                setTimerDuration();
                setTimeToChangeNumber();
                startTimer();
                startButton.disabled = true;
                pauseButton.disabled = false;
                stopButton.disabled = false;
                messageDisplay.textContent = "Clique no número par!";
                remainingTime = nivelTimes[nivel];
            }
        }
    });

    pauseButton.addEventListener("click", pauseTimer);

    stopButton.addEventListener("click", function() {
        clearInterval(timer);
        isGameRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        stopButton.disabled = true;
        messageDisplay.textContent = "Clique em Iniciar para começar.";
        nivelSelect.value = "";
        correctCount = 0;
        wrongCount = 0;
        evenCount = 0;
        correctCountDisplay.textContent = "0 (0%)";
        wrongCountDisplay.textContent = "0";
        evenCountDisplay.textContent = "0";
        timerDisplay.textContent = formatTime(nivelTimes[nivel]);
        randomNumberDisplay.textContent = "";
        remainingTime = 0;
    });

    function startTimer() {
        timer = setInterval(function() {
            remainingTime--;
            timerDisplay.textContent = formatTime(remainingTime);
            if (remainingTime === 0) {
                stopGame();
            }
            generateRandomNumber();
        }, timeToChangeNumber);
    }

    function pauseTimer() {
        clearInterval(timer);
        isGameRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        messageDisplay.textContent = "Jogo pausado";
    }

    randomNumberDisplay.addEventListener("click", function() {
        if (isGameRunning) {
            const randomNumber = parseInt(randomNumberDisplay.textContent);

            if (randomNumber % 2 === 0) {
                randomNumberDisplay.style.color = 'green';
                correctCount++;
            } else {
                randomNumberDisplay.style.color = 'red';
                wrongCount++;
            }

            const percentage = evenCount === 0 ? 0 : ((correctCount / evenCount) * 100).toFixed(0);
            correctCountDisplay.textContent = `${correctCount}`;
            displayPercentage.textContent = `${percentage}%`;
            wrongCountDisplay.textContent = wrongCount;
        }
    });

    function generateRandomNumber() {
        if (isGameRunning) {
            const randomNumber = Math.floor(Math.random() * 100);
            randomNumberDisplay.textContent = randomNumber;
            randomNumberDisplay.style.color = 'black';

            evenCount++;
            evenCountDisplay.textContent = evenCount;
        }
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function stopGame() {
        clearInterval(timer);
        isGameRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        stopButton.disabled = true;
        messageDisplay.textContent = "Clique em Iniciar para começar.";
        nivelSelect.value = "";
        timerDisplay.textContent = formatTime(nivelTimes[nivel]);
        randomNumberDisplay.textContent = "";
        remainingTime = 0;
    }
});
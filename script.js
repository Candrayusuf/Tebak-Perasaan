// script.js
document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const nextButton = document.getElementById('next-button');
    const guessContainer = document.getElementById('guess-container');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');

    // Menambahkan elemen audio
    const senangAudio = document.getElementById('senang-audio');
    const sedihAudio = document.getElementById('sedih-audio');

    // Menampilkan pesan pertama dan tombol setelah klik
    setTimeout(() => {
        message.textContent = "Aku bisa menebak perasaanmu.";
        nextButton.classList.remove('hidden');
    }, 1000);

    nextButton.addEventListener('click', () => {
        nextButton.classList.add('hidden');
        guessContainer.classList.remove('hidden');
    });

    // Ketika pengguna klik "Ya, aku mau"
    yesButton.addEventListener('click', () => {
        document.documentElement.requestFullscreen();
        setTimeout(() => {
            const feelings = ["Senang😊", "Sedih😔"];
            const randomFeeling = feelings[Math.floor(Math.random() * feelings.length)];
            result.textContent = `Perasaanmu: ${randomFeeling}`;
            resultContainer.classList.remove('hidden');
            
            // Memutar musik berdasarkan perasaan
            if (randomFeeling === "Senang😊") {
                senangAudio.play(); // Memutar musik senang
            } else {
                sedihAudio.play(); // Memutar musik sedih
            }
        }, 500);
    });

    // Ketika pengguna klik "Tidak, lain kali saja"
    noButton.addEventListener('click', () => {
        result.textContent = "Yahh, have a good day!";
        resultContainer.classList.remove('hidden');
    });
});

const lyrics = [
    { text: "Cause you're the one that like,", delay: 2100 },
    { text: "I can't deny,", delay: 1100 },
    { text: "every night you're on my mind,", delay: 2030 },
    { text: "so, if i call you tonight,", delay: 2020 },
    { text: "will you pick up,", delay: 2000 },
    { text: "and give me your time?", delay: 2070 },
    { text: "miss you every night", delay: 2050 },
    { text: "miss you all the time", delay: 2050 },
    { text: "no I don't even know", delay: 2050 },
    { text: "Where to start", delay: 1040 },
    { text: "Cause you're the one that i like", delay: 2100 },
    { text: "i can't deny", delay: 1500 },
    { text: "everything i fell inside", delay: 2200},
    { text: "will you tell me i'm the one", delay: 2500 },
    { text: "the one inside of you heart", delay: 3400 },
    { text: "used to brush aside", delay: 2200 },
    { text: "now i can't deny", delay: 2500 },
    { text: "that baby you're my special one", delay: 2700 },
    { text: "cause you're the one that i like.......", delay: 3000 }
];

let currentIndex = 0;
const lyricElement = document.getElementById('lyric');
const lyricContainer = document.getElementById('lyric-container');
const playButton = document.getElementById('playButton');
let isPlaying = false;

function showLyric() {
    if (currentIndex < lyrics.length && isPlaying) {
        const lyric = lyrics[currentIndex];
        const line = document.createElement('div');
        line.classList.add('lyric-line'); // Menambahkan class untuk animasi
        line.textContent = lyric.text;
        lyricElement.appendChild(line);

        // Scroll to the bottom of the container for auto-scrolling effect
        lyricContainer.scrollTop = lyricContainer.scrollHeight;

        // Menandai lirik yang sedang tampil
        setTimeout(() => {
            line.classList.add('selected'); // Menambahkan class selected pada lirik yang aktif
        }, 0);

        // Menambahkan transparansi pada lirik sebelumnya
        if (currentIndex > 0) {
            const pastLine = lyricElement.children[currentIndex - 1];
            pastLine.classList.add('past'); // Menambahkan class past pada lirik sebelumnya
        }

        currentIndex++;

        // Move to next lyric after the delay
        setTimeout(showLyric, lyric.delay);
    }
}

// Event listener for the play button
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        playButton.textContent = 'Pause';
        isPlaying = true;
        lyricElement.innerHTML = ''; // Clear previous lyrics if any
        currentIndex = 0;            // Reset the index
        showLyric();                 // Start showing the lyrics
    } else {
        playButton.textContent = 'Play';
        isPlaying = false;
    }
});

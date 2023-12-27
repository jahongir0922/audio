const musics = [
  {
    nomi: "Billie Eilish - Bellyache",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Billie Eilish - Bellyache",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Charlie Puth - Light Switch",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Coldplay X Selena Gomez - Let Somebody Go",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Pharrell Williams - Happy",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Taylor Swift ft. Kendrick Lamar - Bad Blood",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
];
let music_index = 0;
let main_fon = document.getElementById("main_fon");
let music_img = document.getElementById("music_img");
let marqueeId = document.getElementById("marqueeId");
let audio = document.getElementById("audio");
let play = document.getElementById("play");
let volume = document.getElementById("volume");
let play_going = document.getElementById("play_going");
let current = document.getElementById("current");
let duration = document.getElementById("duration");
let isPlaying = false;
let audio_interval = 0;
let myinterval;
music_info();
function volume_func() {
  audio.volume = volume.value / 100;
}
function play_going_func() {
  audio.currentTime = (audio.duration * play_going.value) / 100;
  // audio.currentTime = (audio.duration * play_going.value) / audio.duration;
}
function music_info() {
  play_going.value = 0;
  audio.volume = volume.value / 100;
  main_fon.src = musics[music_index].rasm();
  music_img.src = musics[music_index].rasm();
  marqueeId.innerHTML = musics[music_index].nomi;
  audio.src = musics[music_index].manzil();
}
audio.addEventListener("canplaythrough", () => {
  duration.innerHTML =
    String(Math.trunc(Math.round(audio.duration) / 60)).padStart(2, "0") +
    ":" +
    String(Math.round(audio.duration) % 60).padStart(2, "0");
});
function audio_going() {
  console.log("object");
  play_going.value = Math.round((audio.currentTime * 100) / audio.duration);
  current.innerHTML =
    String(Math.trunc(Math.round(audio.currentTime) / 60)).padStart(2, "0") +
    ":" +
    String(Math.round(audio.currentTime) % 60).padStart(2, "0");

  if (Math.floor(audio.currentTime) == Math.floor(audio.duration)) {
    clearInterval(myinterval);
    next();
  }
}
function play_func() {
  clearInterval(myinterval);
  myinterval = setInterval(audio_going, 1000);
  if (isPlaying) {
    isPlaying = false;
    play.innerHTML = "play_circle";
    audio.pause();
    console.log("pause");
    clearInterval(myinterval);
  } else {
    isPlaying = true;
    play.innerHTML = "pause_circle";
    audio.play();
    console.log("play");
  }
}
function next() {
  if (music_index < musics.length - 1) {
    music_index += 1;
  } else {
    music_index = 0;
  }
  isPlaying = false;
  music_info();
  play_func();
}
function prev() {
  if (music_index == 0) {
    music_index += musics.length - 1;
  } else {
    music_index -= 1;
  }
  isPlaying = false;
  music_info();
  play_func();
}

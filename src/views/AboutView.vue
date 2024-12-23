<script setup lang="ts">
import { onMounted, ref } from "vue";

const player = ref<YT.Player | null>(null);
const isYTReady = ref(false); // ตัวแปรเพื่อตรวจสอบว่า YT พร้อมหรือยัง

function loadYouTubeAPI() {
  if (!window.YT) {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
    // กำหนด callback ให้ YT API แจ้งว่าโหลดเสร็จแล้ว
    window.onYouTubeIframeAPIReady = () => {
      console.log("YouTube API Ready");
      isYTReady.value = true;
      createPlayer();
    };
  } else {
    isYTReady.value = true;
  }
}

function createPlayer() {
  if (!isYTReady.value) {
    console.error("YouTube API not ready yet");
    return;
  }

  player.value = new YT.Player("youtube-player", {
    events: {
      onReady: () => {
        console.log("Player ready");
      },
    },
    playerVars: {
      listType: "playlist",
      list: "PLow3FGHjhnvYUkW5WE-HG8sgRuSe_rg2R", // ใส่ Playlist ID
      autoplay: 0,
      controls: 1,
      rel: 0,
    },
  });
}

function startPlaylist() {
  if (player.value) {
    player.value.playVideo();
  } else {
    console.error("Player not initialized");
  }
}

loadYouTubeAPI();
</script>

<template>
  <div>
    <button
      @click="createPlayer"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      สร้าง Player
    </button>
    <button
      @click="startPlaylist"
      class="bg-green-500 text-white px-4 py-2 rounded ml-4"
    >
      เล่น Playlist
    </button>
    <div id="youtube-player" style="margin-top: 20px"></div>
  </div>
</template>

<style>
#youtube-player {
  width: 560px;
  height: 315px;
  display: none;
}
</style>

<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="showOverlay"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 w-100"
    >
      <button
        :disabled="loading"
        @click="hideOverlay"
        class="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-700 flex items-center gap-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        <!-- Loading Spinner -->
        <svg
          v-if="loading"
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
          ></path>
        </svg>
        <span>{{ loading ? "กำลังโหลด..." : "กดเพื่อเริ่ม" }}</span>
      </button>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col items-center justify-center">
      <div id="youtube-player"></div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showOverlay = ref(true);
const loading = ref(false);

const hideOverlay = () => {
  if (!loading.value) {
    showOverlay.value = false;
    startPlaylist();
  }
};

const player = ref<YT.Player | null>(null);
const isYTReady = ref(false);

function loadYouTubeAPI() {
  loading.value = true;
  if (!window.YT) {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      console.log("YouTube API Ready");
      isYTReady.value = true;
      createPlayer();
    };
  } else {
    isYTReady.value = true;
    loading.value = false;
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
        loading.value = false;
      },
    },
    playerVars: {
      listType: "playlist",
      list: "PLow3FGHjhnvYUkW5WE-HG8sgRuSe_rg2R",
      autoplay: 0,
      controls: 1,
      rel: 0,
    },
  });
}

function startPlaylist() {
  if (player.value) {
    player.value.setVolume(15);
    player.value.playVideo();
  } else {
    console.error("Player not initialized");
  }
}

loadYouTubeAPI();
</script>

<style>
#youtube-player {
  width: 560px;
  height: 315px;
  display: none;
}
</style>

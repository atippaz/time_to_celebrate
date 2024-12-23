import { ref, onMounted, onUnmounted } from "vue";
export const pluginSymbol = Symbol("song");
export function useYoutubeSong() {
  const player = ref(null);
  const isReady = ref(false);

  // ฟังก์ชันสำหรับการสร้าง Player
  const createPlayer = (elementId, playlistId) => {
    if (window.YT && window.YT.Player) {
      player.value = new YT.Player(elementId, {
        videoId: "", // จะเล่นจาก Playlist
        events: {
          onReady: () => {
            isReady.value = true;
            player.value.playVideo(); // เริ่มเล่นอัตโนมัติ
          },
          onStateChange: handleStateChange,
        },
        playerVars: {
          autoplay: 1, // เล่นอัตโนมัติ
          controls: 0, // ซ่อนปุ่มควบคุม
          loop: 1, // เล่นซ้ำ
          playlist: playlistId, // ใส่ Playlist ID ที่นี่
        },
      });
    }
  };

  // ฟังก์ชันจัดการสถานะ Player (เช่น เล่นเพลงถัดไปเมื่อจบ)
  const handleStateChange = (event) => {
    if (event.data === YT.PlayerState.ENDED) {
      player.value.playVideo(); // เล่นเพลงถัดไปอัตโนมัติ
    }
  };

  // Lifecycle Hooks
  onMounted(() => {
    // โหลด YouTube IFrame API
    console.log("ssd");
    window.onYouTubeIframeAPIReady = () => {
      createPlayer("youtube-player", "PLow3FGHjhnvYUkW5WE-HG8sgRuSe_rg2R"); // ใส่ Playlist ID ของคุณ
    };
    console.log("ssd");

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
  });

  onUnmounted(() => {
    if (player.value) {
      player.value.destroy();
      player.value = null;
    }
  });

  return {
    player,
    isReady,
  };
}

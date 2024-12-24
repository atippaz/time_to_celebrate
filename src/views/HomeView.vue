<script setup lang="ts">
import { ref } from "vue";
const hints = [
  "กล่องปริญญา ที่กล่องจะมีเเถบกระดาษสีฟ้าอยู่ด้านล่าง ลองเอาออกมาดูสิ",
  "กล่องคริสมาสต์ ในกล่องคริสมาสต์จะมีอะไรซ่อนอยู่ที่จดหมายลองเปิดดูสิ",
  "กล่องปีใหม่ จะมีเทปใสเเปะอยู่ที่ตูดของกล่อง ลองเเกะออกดูสิ มีอะไรเกิดขึ้นไหม",
  "กล่องปีใหม่ แกะออกเเล้วสินะ กล่องมันสามารถเเยกชั้นได้นะ ลองเปิดดูดีๆ มันจะมีอะไรซ่อนอยู่ในชั้นล่าง!!",
  "ลำดับการเปิดกล่องเเละตัวเลขที่ได้มีความสัมพันธ์กัน ลองไปเปิดดูนะ",
  "เฉลยเเล้วนะ รหัสมันคือ 108",
];
const isCLick = ref<number[]>([]);
const indexd = ref(0);
const showDialog = ref(false);
const toggleDialog = (idx: number) => {
  indexd.value = idx;
  if (!isCLick.value.includes(idx + 1)) {
    isCLick.value.push(idx + 1);
  }
  showDialog.value = !showDialog.value;
};
</script>

<template>
  <main>
    <section class="py-4 text-left w-full">
      <h1
        class="text-3xl md:text-6xl font-bold uppercase tracking-wide bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        Time To Celebrate
      </h1>
    </section>
    <section
      class="bg-red-600 p-4 flex justify-between items-center rounded-md"
    >
      <div>
        <svg
          fill="#ffffff"
          height="50px"
          width="50px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          stroke="#000000"
          transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M475.763,6.921c-7.668-6.086-17.641-8.312-27.149-6.062L177.046,64.857c-14.457,3.398-24.242,16.297-24.242,31.148v229.577 c-11-3.549-21.168-5.58-32.406-5.58c-53.019,0-96.202,42.98-96.202,95.999S66.981,512,120,512s95.804-42.98,95.804-95.999V233.347 l208-48.941v109.176c-10-3.549-20.669-5.58-31.908-5.58c-53.019,0-95.953,42.98-95.953,95.999S338.855,480,391.874,480 s95.93-42.98,95.93-95.999V32.006C487.804,22.233,483.427,12.991,475.763,6.921z M215.804,167.602v-46.253l208-48.937v46.249 L215.804,167.602z"
            ></path>
          </g>
        </svg>
      </div>
      <div class="flex justify-end flex-col">
        <div>
          <h1 class="text-2xl font-bold text-gray-800 mb-4">
            Playlist (Youtube)
          </h1>
        </div>
        <div>
          <a
            class="text-white underline"
            target="_blank"
            href="https://www.youtube.com/watch?v=pKxQVFjXMgY&list=PLow3FGHjhnvYUkW5WE-HG8sgRuSe_rg2R"
            >ถ้าต้องการกดต้องนี้เลย</a
          >
        </div>
      </div>
    </section>
    <section class="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">คู่มือ</h1>
      <div class="text-gray-700 mb-4">กล่องมีทั้งหมด 5 กล่องคือ</div>
      <ul class="list-decimal list-inside text-gray-700 space-y-2">
        <li><b>กล่องปริญญา </b>(23/12/2024)</li>
        <li><b>กล่องคริสมาสต์ </b>(25/12/2024)</li>
        <li><b>กล่องปีใหม่</b> (1/1/2025)</li>
        <li><b>กล่องสุ่ม?</b> (?/?/2024)</li>
        <li>
          <b>กล่องเก่า</b> (2019-2024) (กล่องนี้ไม่ต้องเเกะก็ได้
          ไม่ได้มีของขวัญด้านใน มีเเต่ของเก่าๆตามชื่อกล่อง)
        </li>
      </ul>
    </section>

    <section class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">ลำดับการเปิดกล่อง</h1>
      <div class="relative pl-10">
        <!-- Timeline -->
        <div class="absolute left-[30px] top-0 h-full w-1 bg-blue-500"></div>
        <!-- Steps -->
        <div class="space-y-6">
          <div class="relative">
            <div
              class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center absolute -left-6"
            >
              1
            </div>
            <p class="ml-4 text-gray-700">กล่องปริญญา</p>
          </div>
          <div class="relative">
            <div
              class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center absolute -left-6"
            >
              2
            </div>
            <p class="ml-4 text-gray-700">กล่องคริสมาสต์</p>
          </div>
          <div class="relative">
            <div
              class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center absolute -left-6"
            >
              3
            </div>
            <p class="ml-4 text-gray-700">กล่องปีใหม่</p>
          </div>
          <div class="relative">
            <div
              class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center absolute -left-6"
            >
              4
            </div>
            <p class="ml-4 text-gray-700">กล่องสุ่ม?</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h1 class="text-xl text-black font-bold">คำใบ้เพิ่มเติม หากต้องการ</h1>

      <p class="text-black">ลองพยายาม มั่วๆก่อนได้น๊าาา</p>
      <div
        v-if="hints.filter((_, idx) => isCLick.includes(idx)).length == 0"
        class="my-4"
      >
        <button
          @click="isCLick.push(0)"
          class="w-full px-6 py-3 bg-blue-500 text-white rounded shadow-md hover:bg-blue-700 transition"
        >
          เริ่มขอคำใบ้
        </button>
      </div>
      <div v-else class="text-center my-4 flex flex-col w-full gap-2">
        <div
          v-for="(_, index) in hints.filter((_, idx) => isCLick.includes(idx))"
        >
          <button
            @click="toggleDialog(index)"
            class="w-full px-6 py-3 bg-blue-500 text-white rounded shadow-md hover:bg-blue-700 transition"
          >
            คำใบ้ที่ {{ index + 1 }}
          </button>
        </div>
      </div>
    </section>

    <div
      v-if="showDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg w-80">
        <h2 class="text-xl font-bold text-gray-800 mb-4">
          คำใบ้ที่ {{ indexd + 1 }}
        </h2>
        <p class="text-gray-700 mb-4">{{ hints[indexd] }}</p>
        <div class="flex justify-end">
          <button
            @click="toggleDialog(-1)"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

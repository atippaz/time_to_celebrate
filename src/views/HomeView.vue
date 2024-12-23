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
const indexd = ref(0);
const showDialog = ref(false);
const toggleDialog = (idx: number) => {
  indexd.value = idx;
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
    <section class="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">คู่มือ</h1>
      <div class="text-gray-700 mb-4">กล่องมีทั้งหมด 5 กล่องคือ</div>
      <ul class="list-decimal list-inside text-gray-700 space-y-2">
        <li><b>กล่องปริญญา</b></li>
        <li><b>กล่องคริสมาสต์</b></li>
        <li><b>กล่องปีใหม่</b></li>
        <li><b>กล่องสุ่ม</b>?</li>
        <li>
          <b>กล่องเก่า</b> (กล่องนี้ไม่ต้องเเกะก็ได้ ไม่ได้มีของขวัญด้านใน)
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
      <div class="text-center my-4 flex flex-col w-full gap-2">
        <div v-for="(_, index) in hints">
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

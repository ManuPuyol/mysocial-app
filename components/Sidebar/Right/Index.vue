<template>
  <div class="flex flex-col">
    <!--Search bar-->
    <div class="relative m-2">
      <div
        class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer"
      >
        <div class="w-6 h-6">
          <MagnifyingGlassIcon @click="handleSearch" />
        </div>
      </div>
      <input
        v-model="search"
        class="flex items-center w-full pl-12 text-black text-sm font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-orange-200 h-9"
        placeholder="Search dev posts"
        type="text"
      />
    </div>

    <!--preview card: whats happening-->
    <SidebarRightPreviewCard title="Whats happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
        :key="whatsHappening"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!--preview card: who to follow-->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="whoToFollow in whoToFollowItems"
        :key="whoToFollow"
      >
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <footer>
      <ul class="mx-2 my-4 text-gray-500">
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline" @click="handleToggleDarkMode"
            >Dark mode</a
          >
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Cookie Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Info</a>
        </li>
        <li class="inline-block mx-2">© 2023 Kraken, Inc.</li>
      </ul>
    </footer>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const search = ref("");
const emitter = useEmitter();
function handleSearch() {
  useRouter().push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
}

const whatsHappeningItems = ref([
  { title: "SpaceX", count: "18.8k Tweets" },
  { title: "#CodingIsFun", count: "18.8k Tweets" },
  { title: "#DragonBall", count: "18.8k Tweets" },
]);

const whoToFollowItems = ref([
  {
    name: "Lolo puyol",
    handle: "@lolopuyol",
    image: "https://picsum.photos/200",
  },
  {
    name: "Violeta Ruíz",
    handle: "@violetaruiz",
    image: "https://picsum.photos/100",
  },
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    image: "https://picsum.photos/500",
  },
]);
function handleToggleDarkMode() {
  emitter.$emit("toggleDarkMode");
}
</script>

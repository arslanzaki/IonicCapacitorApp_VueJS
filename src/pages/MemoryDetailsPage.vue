<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could Not Find A Memory For The Give Id</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
    >
    </memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  components: {
    MemoryOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },

  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  //   watch: {
  //     $route(currentRoute) {
  //       this.memoryId = currentRoute.params.id;
  //     },
  //   },
};
</script>

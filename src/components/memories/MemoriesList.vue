<template>
  <ion-list>
    <memories-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></memories-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import MemoriesListItem from "./MemoriesListItem.vue";
export default {
  props: ["memories"],
  components: {
    IonList,
    MemoriesListItem,
  },
};
</script>

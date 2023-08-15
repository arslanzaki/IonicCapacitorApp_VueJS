import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://uncustomary.org/wp-content/uploads/2019/07/Tips-For-Making-A-Trip-To-The-Mountains-Memorable-Uncustomary-1.jpg",
          title: "A trip into the mountains",
          description: "It was a really nice trip!",
        },
        {
          id: "m2",
          image:
            "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/08/29160025/usa_midatlantic_newjersey_casinopier.jpg",
          title: "Surfing the sea side",
          description: "Feeling the cool breeze!",
        },
        {
          id: "m3",
          image:
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/GettyImages-1247033916_thumb-732x549.jpg",
          title: "Good eating",
          description: "Really tasty!",
        },
      ],
    };
  },

  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },

    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;

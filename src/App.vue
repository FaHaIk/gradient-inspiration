<template>
  <header-comp />
  <div class="content-wrapper">
    <div class="wrapper" v-for="item in gradients" :key="item.name">
      <gradient
        :colorOne="item.colors[0]"
        :colorTwo="item.colors[1]"
        :colorThree="item.colors[2] == undefined ? 'none' : item.colors[2]"
        :name="item.name"
      />
      <!-- {{ item.colors[0] + " : " + (item.colors[1] == undefined ? '#ECECEC' : item.colors[1]) + " : "  + ((item.colors[2] == undefined) ? '#ECECEC' : item.colors[2]) }} -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderComp from "./components/HeaderComp.vue";
import Gradient from "./components/Gradient.vue";

import gradients from "./assets/gradients.json";

export default defineComponent({
  name: "App",
  components: {
    HeaderComp,
    Gradient,
  },
  setup() {
 
    return {

      gradients
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto:wght@500&display=swap");

body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  margin: 10px;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}

@media (min-width: 480px) {
  .content-wrapper {
    margin-left: 5px;
    margin-right: 5px;
  }
  .wrapper {
    width: calc(50% - 10px);
    margin: 5px;
  }
  .ell {
    margin-top: 100px;
  }
  .color-mode-wrapper {
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  .wrapper {
    width: calc(33.3333% - 10px);
    margin: 5px;
  }
}
@media (min-width: 992px) {
  .colorBtn {
    height: 40px;
  }
  .colorBtnTwo {
    height: 40px;
  }
  .wrapper {
    width: calc(25% - 10px);
    margin: 5px;
  }
}
@media (min-width: 1200px) {
  .content-wrapper {
    width: 1180px;
    margin: auto;
  }
  .wrapper {
    width: calc(20% - 10px);
    margin: 5px;
  }
  .gradient {
    height: 150px !important;
  }
  .nameTxt {
    line-height: 150px !important;
  }
}

</style>

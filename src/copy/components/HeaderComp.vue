<template>
  <img class="ell" src="../assets/ellipse.svg" alt="ellipse" />
  <div class="slogan">Gradients for your needs</div>
  <div class="miniTxt">Click on the Gradients, Colors to get the code.</div>
  <div class="color-mode-wrapper">
    <button @click="hexClick" class="col">Hex</button>
    <button @click="rgbClick" class="col">Rgb</button>
    <button @click="hsvClick" class="col">HSV</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComp",
  setup() {

    return {

    };
  },
});
</script>

<style>
.color-mode-wrapper {
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
}
.ell {
  margin-top: 50px;
  margin-bottom: 20px;
}

.slogan {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color:#fefefe;
  color: #2b2c2e;
  margin-bottom: 0px;
  /* margin-top: 50px; */
}

.miniTxt {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #9a9fa8;
  margin-bottom: 30px;
}

.col {
  border: none;
  outline: none;
  background-color: #e4e8f1;
  color: #8c9499;
  padding: 15px;
}
</style>
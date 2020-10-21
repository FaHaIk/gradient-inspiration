<template>
  <div class="header-fixed">
    <img class="ell" src="../assets/ellipse.svg" alt="ellipse" />
    <div class="slogan">Gradients for your needs</div>
    <div class="miniTxt">Click on the Colors to copy the code.</div>
    <div class="color-mode-wrapper">
      <button @click="hexClick" id="btn-one" class="col col-active">Hex</button>
      <button @click="rgbClick" id="btn-two" class="col">Rgb</button>
      <button @click="hslClick" id="btn-three" class="col">Hsl</button>
      <button @click="hsvClick" id="btn-four" class="col">Hsv</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setColorMode } from "../global";

export default defineComponent({
  name: "HeaderComp",
  setup() {
    function hexClick() {
      setColorMode("hex");
      document.querySelectorAll(".col").forEach(function (button) {
        button.classList.remove("col-active");
      });
      document.getElementById("btn-one")!.classList.add("col-active");
    }
    function rgbClick() {
      setColorMode("rgb");
      document.querySelectorAll(".col").forEach(function (button) {
        button.classList.remove("col-active");
      });
      document.getElementById("btn-two")!.classList.add("col-active");
    }
    function hsvClick() {
      setColorMode("hsv");
      document.querySelectorAll(".col").forEach(function (button) {
        button.classList.remove("col-active");
      });
      document.getElementById("btn-four")!.classList.add("col-active");
    }
    function hslClick() {
      setColorMode("hsl");
      document.querySelectorAll(".col").forEach(function (button) {
        button.classList.remove("col-active");
      });
      document.getElementById("btn-three")!.classList.add("col-active");
    }

    return { hexClick, rgbClick, hsvClick, hslClick };
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
  color: #fefefe;
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
.col-active {
  background-color: #babfca;
  color: #6b767c;
}
</style>
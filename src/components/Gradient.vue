<template>
  <div :class="{ tooltip: true, show: isShown }">copied: {{ colorConv }}</div>
  <div class="gradient" :style="{ background: linearGradient }">
    <span class="nameTxt">{{ name }}</span>
  </div>
  <div class="btns" v-if="colorThree != 'none'">
    <button
      @click="copyColor(colorOne)"
      class="colorBtn"
      :style="{ 'background-color': colorOne }"
    ></button>
    <button
      @click="copyColor(colorTwo)"
      class="colorBtn"
      :style="{ 'background-color': colorTwo }"
    ></button>
    <button
      @click="copyColor(colorThree)"
      class="colorBtn"
      :style="{ 'background-color': colorThree }"
    ></button>
  </div>
  <div class="btns" v-else>
    <button
      @click="copyColor(colorOne)"
      class="colorBtnTwo"
      :style="{ 'background-color': colorOne }"
    ></button>
    <button
      @click="copyColor(colorTwo)"
      class="colorBtnTwo"
      :style="{ 'background-color': colorTwo }"
    ></button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { getColorMode } from "../global";
import tinycolor from "tinycolor2";

export default defineComponent({
  name: "Gradient",
  components: {},
  props: {
    colorOne: {
      type: String,
      required: true,
    },
    colorTwo: {
      type: String,
      required: true,
    },
    colorThree: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(0);
    const mode = getColorMode;
    const isShown = ref(false);
    const colorConv = ref("");

    const linearGradient = ref(
      props.colorThree == "none"
        ? "linear-gradient(to right, " +
            props.colorOne +
            ", " +
            props.colorTwo +
            ")"
        : "linear-gradient(to right, " +
            props.colorOne +
            ", " +
            props.colorTwo +
            ", " +
            props.colorThree +
            ")"
    );

    function hideTooltip() {
      isShown.value = false;
    }
    function copyColor(color: string) {
      switch (mode.value) {
        case "hex":
          colorConv.value = tinycolor(color).toHexString();
          break;
        case "rgb":
          colorConv.value = tinycolor(color).toRgbString();
          break;
        case "hsv":
          colorConv.value = tinycolor(color).toHsvString();
          break;
        case "hsl":
          colorConv.value = tinycolor(color).toHslString();
          break;
      }
      navigator.clipboard.writeText(colorConv.value).then(
        function () {
          console.log("success");
          isShown.value = true;
          setTimeout(hideTooltip, 1000);
        },
        function () {
          console.log("error");
        }
      );
    }

    return {
      count,
      copyColor,
      linearGradient,
      mode,
      isShown,
      colorConv,
    };
  },
});
</script>

<style>
.tooltip {
  position: absolute;
  height: 20px;
  background-color: rgb(255, 255, 255);
  line-height: 20px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.2s;
  margin-top: 0px;
  margin-left: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding-left: 5px;
  padding-right: 5px;
}
.show {
  visibility: visible;
  margin-top: 10px;
  margin-left: 10px;
  opacity: 1;
}
.gradient {
  width: 100%;
  height: 100px;
  text-align: center;
}
.btns {
  width: 100%;
}
.colorBtn {
  width: 33.33333333%;
  height: 50px;
  border: none;
  border-radius: 0px;
}
.colorBtnTwo {
  width: 50%;
  height: 50px;
  border: none;
  border-radius: 0px;
}
.nameTxt {
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 100px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}

/* button:focus {
  outline: none;
  box-shadow: inset 0px 0px 0px 2px rgb(0, 0, 0),
    inset 0px 0px 0px 4px rgb(255, 255, 255);
} */
button {
  border-radius: 0px;
}
button:hover {
  /* outline: none; */
  box-shadow: inset 0px 0px 0px 50px rgba(255, 255, 255, 0.295);
}
</style>



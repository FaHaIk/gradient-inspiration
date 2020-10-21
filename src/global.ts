import { ref, computed } from "vue";

const state = ref({ colorMode: "hex" })

function setColorMode(colorMode: string) { 
  state.value.colorMode = colorMode
}

const getColorMode = computed(() => state.value.colorMode)

export {
  getColorMode,
  setColorMode
} 
<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20">
    <circle
      cx="9"
      cy="9"
      r="8"
      :stroke="color"
      stroke-width="1"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DotColor",
  props: {
    color: {
      type: String,
      default: "currentColor",
    },
  },
});
</script>

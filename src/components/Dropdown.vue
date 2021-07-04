<template>
  <div class="dropdown">
    <div
      :class="['dropdown__header', { 'is-active': active }]"
      @click="toggleDropdown">
      <slot />
    </div>

    <div class="dropdown__content">
      <ul>
        <li
          v-for="item in data"
          :key="item.id"
          :class="{ 'is-option-selected': item.id === selection }"
          @click="changeSelection(item.id)">
          <span><dot-color :color="item.color" /></span>
          <span class="text">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DotColor from "./DotColor.vue";

export default defineComponent({
  name: "Dropdown",
  components: { DotColor },
  props: {
    selection: {
      type: String,
      default: null,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const active = ref(false);
    const toggleDropdown = () => (active.value = !active.value);
    const changeSelection = (id: string) => emit("change-selection", id);

    return { active, toggleDropdown, changeSelection };
  },
});
</script>

<style lang="scss" scoped>
.dropdown {
  font-size: 12px;
  margin: 1rem;
  &__header {
    border: 0;
    border-radius: 4px;
    color: black;
    border: 1px solid #38b2ac;
    cursor: pointer;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 50px;
    position: relative;
    text-overflow: ellipsis;
    &.is-active {
      color: #ffffff;
      background-color: #38b2ac;
      + .dropdown__content {
        border: 0;
        padding: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        height: auto;
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__content {
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 15px 10px;
    transition: opacity 0.3s;
    visibility: hidden;
    display: flex;
    flex-direction: column;
  }
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  li {
    display: flex;
    justify-content: flex-start;
    padding: 1rem 0.5rem;
    cursor: pointer;
    .text {
      padding-left: 0.5rem;
    }
    &:hover {
      background-color: rgba(100, 100, 111, 0.2);
    }
    &.is-option-selected {
      background-color: rgba(56, 178, 172, 0.2);
      border-left: 3px solid blue;
    }
  }
}
</style>

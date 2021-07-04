<template>
  <div class="dropdown">
    <div
      :class="['dropdown__header', { 'is-active': active }]"
      @click="toggleDropdown">
      <slot />
      <i class="fa fa-angle-down" aria-hidden="true"></i>
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </div>

    <div class="dropdown__content">
      <ul>
        <li v-for="item in data" :key="item.id">
          <span><dot-color :color="item.color" /></span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DotColor from "@/helpers/DotColor.vue";

export default defineComponent({
  name: "Dropdown",
  components: { DotColor },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const active = ref(false);
    const toggleDropdown = () => (active.value = !active.value);
    return { active, toggleDropdown };
  },
});
</script>

<style lang="scss" scoped>
.dropdown {
  &__header {
    border: 0;
    border-radius: 4px;
    color: white;
    background-color: #38b2ac;
    cursor: pointer;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 50px;
    position: relative;
    text-overflow: ellipsis;
    i.fa {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      transition: opacity 0.3s;
      &.fa-angle-up {
        opacity: 0;
      }
    }
    &.is-active {
      i.fa {
        &.fa-angle-up {
          opacity: 1;
        }
        &.fa-angle-down {
          opacity: 0;
        }
      }
      + .dropdown__content {
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
  padding-left: 1rem;
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
}
</style>

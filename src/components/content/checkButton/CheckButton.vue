<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{checked: ischecked}">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      ischecked: {
        type: Boolean,
        default() {
          true
        }
      }
    }
  }
</script>

<style scoped>
  .check-button img {
    border:  2px solid #aaa;
    border-radius: 50%;
  }
  .check-button .checked {
    background-color: var(--color-high-text);
    border:  2px solid var(--color-high-text);
  }
</style>
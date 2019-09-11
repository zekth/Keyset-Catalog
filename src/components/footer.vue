<template>
  <footer class="footer">
    <p>
      ©
      <a href="https://github.com/zekth">Zekth</a> 2019
      <span>rev: {{ APP_REV }}</span>
    </p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      APP_REV: APP_REV
    };
  }
};
</script>

<template>
  <footer class="footer">
    <p>
      ©
      <a href="https://github.com/zekth">Zekth</a> 2019
      <small>rev: {{ APP_REV }}</small>
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

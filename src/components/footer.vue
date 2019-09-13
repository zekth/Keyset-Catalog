<template>
  <footer class="footer">
    <div class="container">
      <p>
        ©
        <a href="https://github.com/zekth">Zekth</a> 2019
        <small>rev: {{ APP_REV }}</small>
      </p>
    </div>
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

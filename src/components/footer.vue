<template>
  <footer class="footer">
    <div class="container text-center p-4">
      <p>
        ©
        <a href="https://github.com/zekth">Zekth</a>
        {{ new Date().getFullYear() }}
      </p>
      <p style="display:none">rev: {{ APP_REV }}</p>
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

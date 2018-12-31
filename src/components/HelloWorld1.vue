<template>
<v-app>
    <div>
      <v-btn class="green">{{name}}</v-btn>
      <v-btn flat class="green">
        <v-icon>home</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "Window1"
    };
  }
};
</script>

<style scoped>

</style>
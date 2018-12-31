<template>
<v-app>
    <div>
      <v-btn class="pink">{{name}}</v-btn>
      <v-btn flat class="pink">
        <v-icon>mail</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "Window"
    };
  }
};
</script>

<style scoped>

</style>
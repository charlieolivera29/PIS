<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a @click="dashboard()" class="btn btn-link">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    dashboard(){
      this.$router.push({name: 'Dashboard'})
    }
  }
};
</script>

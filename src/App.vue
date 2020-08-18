<template>
  <div id="app" class="container p-5">
    <app-add-user></app-add-user>
    <br /> <br />
    <app-user-list :users="users"></app-user-list>
  </div>
</template>

<script>
import AppAddUser from './components/AddUser'
import AppUserList from './components/UserList'

export default {
  name: 'App',
  components: {
    AppAddUser,
    AppUserList
  },
  data() {
    return {
      users: []
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

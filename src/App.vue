<template>
  <div id="app" class="container p-5">
    <div class="row">
      <div class="col">
        <app-add-user></app-add-user>
      </div>
      <div class="col">
        <app-user-list :users="users"></app-user-list>
      </div>
    </div>
  </div>
</template>

<script>
import AppAddUser from './components/AddUser'
import AppUserList from './components/UserList'

export default {
  methods: {
  },
  name: 'App',
  components: {
    AppAddUser,
    AppUserList
  },
  data() {
    return {
      users: {}
    }
  },
  created() {
    this.$http.get('/user.json', {
      headers: {
        Accept: "application/json"
      }
    })
    .then( res => {
      this.users = res.data;
      console.log(res);
    })
    .catch( err => console.log(err) );
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

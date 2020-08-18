<template>
  <form @submit="trySubmit" class="d-flex flex-column p-3">
    <h3 class="pb-3"> Add User </h3>
    <div class="form-group">
      <label>Username</label>
      <input type="text" v-model="form.username" class="form-control" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="form.email" class="form-control" />
    </div>
    <button class="btn btn-primary"> Save </button>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        username: '',
        email: ''
      }
    }
  }, 
  methods: {
    trySubmit(e) {
      e.preventDefault();

      this.$http.post('/user.json', {...this.form})
        .then( res => {

          console.log(res);

          this.form = {
            username: '',
            email: ''
          };
        })
        .catch( err => console.log(err) );

      console.log( {...this.form} );
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

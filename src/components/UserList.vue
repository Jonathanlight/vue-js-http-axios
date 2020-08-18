<template>
  <div>
    <h3> User list : </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, index) in users" :key="index">
        <pre> {{ user.email }} </pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserLisr',
  props: ['users'],
}
</script>

<style scoped>

</style>

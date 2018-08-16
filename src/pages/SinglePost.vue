<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>
import { posts } from "./../services/Posts";

export default {
  components: {},
  data() {
    return {
      post: {}
    };
  },
  created() {
    if (this.$route.params.id) {
      this.post = posts
        .get(this.$route.params.id)
        .then(response => (this.post = response.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

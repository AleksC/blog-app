<template>
    <div>
        <PostForm @addPost=addPost></PostForm>
    </div>
</template>
<script>
import { posts } from "./../services/Posts";
import PostForm from "./../components/PostForm";

export default {
  components: {
    PostForm
  },
  methods: {
    addPost(post) {
      posts
        .add(post)
        .then(response => {
          this.$router.push("/posts");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<template>
    <div>
        <PostForm @addPost=addPost @editPost=editPost :post="post"></PostForm>
    </div>
</template>
<script>
import { posts } from "./../services/Posts";
import PostForm from "./../components/PostForm";

export default {
  components: {
    PostForm
  },
  data() {
    return {
      post: { title: "", text: "" }
    };
  },
  methods: {
    addPost(post) {
      posts
        .add(post)
        .then(response => {
          this.$router.push("/posts");
        })
        .catch(err => console.log(err));
    },
    editPost(post) {
      posts
        .edit(post.id, post)
        .then(response => {
          this.$router.push("/posts");
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      posts
        .get(id)
        .then(response => {
          this.post = response.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

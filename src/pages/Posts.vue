<template>
    <div>
        <AppPosts @postDeleted=postDeleted :posts="posts"></AppPosts>
    </div>
</template>
<script>
import { posts } from "./../services/Posts";
import AppPosts from "./../components/AppPosts";

export default {
  components: {
    AppPosts
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    postDeleted(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    }
  },
  beforeRouteEnter(to, from, next) {
    posts
      .getAll()
      .then(response => {
        next(vm => {
          vm.posts = response.data;
        });
      })
      .catch(err => console.log(err));
  }
};
</script>

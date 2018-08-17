<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
        <p>{{ post.createdAt | formatDate() }}</p>
    <AddComment @commentAdded=commentAdded></AddComment>
    <Comments :comments="post.comments"></Comments>
    </div>
</template>

<script>
import { posts } from "./../services/Posts";
import AddComment from "./../components/AddComment";
import Comments from "./../components/Comments";
import { dateMixin } from "./../mixins/DateMixin";

export default {
  components: { AddComment, Comments },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    commentAdded(body) {
      body = { text: body, postId: this.post.id };
      posts
        .addComment(body, this.post.id)
        .then(this.$router.push(`/posts/${this.post.id}`))
        .catch(err => console.log(err));
      this.post.comments.push(body);
    }
  },
  created() {
    if (this.$route.params.id) {
      posts
        .get(this.$route.params.id)
        .then(response => (this.post = response.data))
        .catch(err => console.log(err));
    }
  },
  mixins: [dateMixin]
};
</script>

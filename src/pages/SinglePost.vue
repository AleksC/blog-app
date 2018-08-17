<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
        <h5>Posted at: {{ post.createdAt | formatDate() }}</h5>
    <AddComment @commentAdded=commentAdded></AddComment><br>
    <div class="row">
      <div class="col">
      <Comments :comments="post.comments"></Comments>
      </div>
      <div class="col">
      <SuggestedPost :suggestedPost="suggestedPost"></SuggestedPost>
      </div>
    </div>
    
    </div>
</template>

<script>
import { posts } from "./../services/Posts";
import AddComment from "./../components/AddComment";
import Comments from "./../components/Comments";
import SuggestedPost from "./../components/SuggestedPost";
import { dateMixin } from "./../mixins/DateMixin";

export default {
  components: { AddComment, Comments, SuggestedPost },
  data() {
    return {
      post: {},
      suggestedPost: {}
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
    posts
      .get(Math.ceil(Math.random() * 3))
      .then(response => (this.suggestedPost = response.data))
      .catch(err => console.log(err));
  },
  beforeRouteEnter(to, from, next) {
    posts
      .get()
      .then(response => {
        next(vm => {
          vm.post = response.data;
        });
      })
      .catch(err => console.log(err));
    posts
      .get(Math.ceil(Math.random() * 3))
      .then(response => {
        next(vm => {
          vm.suggestedPost = response.data;
        });
      })
      .catch(err => console.log(err));
  },
  mixins: [dateMixin]
};
</script>

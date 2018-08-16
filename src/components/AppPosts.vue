<template>
<div>
    <div v-for="(post, key) in posts" :key="key">
        <h1> {{ post.title }} </h1>
        <h5> {{ post.id }} </h5>
        <p> {{ post.text }}</p>
        <button class="btn btn-success">
            <router-link :to="{ name: 'single-post', params: { id: post.id}}">
                View Post
            </router-link>
        </button>
        <button class="btn btn-warning">
            <router-link :to="{ name: 'edit', params: { id: post.id}}">
                Edit Post
            </router-link>
        </button>
        <button class="btn btn-danger" @click="deletePost(post.id)">Delete Post
        </button>
    </div>
</div>
</template>
<script>
export default {
  props: ["posts"],
  methods: {
    deletePost(id) {
      this.$emit("postDeleted", id);
    }
  }
};
</script>

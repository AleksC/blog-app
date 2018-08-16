<template>
    <div>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="title">Title: </label>
                <input v-model="post.title" type="text" class="form-control" id="title" required minlength=2>
            </div>
            <div class="form-group">
                <label for="text">Text:</label><br>
                <textarea v-model="post.text" cols=100 rows="10" required maxlength=300></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add New Post</button>
        </form>
        <br>
        <button class="btn btn-danger" @click=reset>Reset Fields</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      post: { title: "", text: "" }
    };
  },
  methods: {
    submit() {
      this.$emit("addPost", this.post);
    },
    reset() {
      this.post = { title: "", text: "" };
    }
  }
};
</script>

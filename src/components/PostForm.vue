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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br>
        <button class="btn btn-danger" @click=reset>Reset Fields</button>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["post"],
  methods: {
    submit() {
      this.$route.params.id
        ? this.$emit("editPost", this.post)
        : this.$emit("addPost", this.post);
    },
    reset() {
      this.post = { title: "", text: "" };
    }
  },
  created() {}
};
</script>

<template>
    <form @submit.prevent="submit">
        <div class="form-group">
                <label for="text">Add comment:</label><br>
                <textarea v-model="body" cols=100 rows="10" required maxlength=300></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
export default {
  data() {
    return {
      body: ""
    };
  },
  methods: {
    submit() {
      this.$emit("commentAdded", this.body);
    }
  }
};
</script>

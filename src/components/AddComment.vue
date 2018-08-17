<template>
    <form @submit.prevent="submit">
        <div class="form-group">
                <label for="text">Add comment:</label><br>
                <textarea v-model="body" cols=100 rows="5" required maxlength=300></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6LcihmoUAAAAAMXcCbOHFdA3bPixO_8a3WJL4v_z
"></div>
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
      if (grecaptcha.getResponse()) {
        this.$emit("commentAdded", this.body);
      } else {
        alert("You must validate you're not a robot");
      }
    }
  }
};
</script>

<template>
    <div>
        <h2>Comments:</h2>
        <p v-for="(comment, key) in comments" :key="key">{{ comment.text }} {{  comment.createdAt | diffForHumans() }}</p>
    </div>
</template>
<script>
import { dateMixin } from "./../mixins/DateMixin";

export default {
  props: ["comments"],
  mixins: [dateMixin]
};
</script>

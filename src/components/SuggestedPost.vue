<template>
    <div>
        <h3>Suggested post:</h3> 
        <h3>{{ suggestedPost.title }}</h3>
        <router-link :to="{name: 'single-post', params: {id: suggestedPost.id}}">View Post</router-link>
        <p>{{ suggestedPost.text }}</p>
        <h5>Posted at: {{ suggestedPost.createdAt | formatDate() }}</h5> </div>
</template>
<script>
import { dateMixin } from "./../mixins/DateMixin";

export default {
  props: ["suggestedPost"],
  mixins: [dateMixin]
};
</script>

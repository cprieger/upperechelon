<template>
  <div class="container">
    <h1>The home component</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Example: []
    };
  },
  created: function() {
    // this.fetchData();
  },
  methods: {
    // fetchData: function() {
    //   this.$http
    //     .get("http://localhost:3000/api/feed/posts")
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(data => {
    //       this.posts = data["posts"];
    //     });
    // }
  }
};
</script>
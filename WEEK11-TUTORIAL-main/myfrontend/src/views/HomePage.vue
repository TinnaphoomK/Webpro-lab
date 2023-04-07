<template>
    <div class="container is-widescreen">
        <section class="hero">
            <div class="hero-body">
                <p class="title">My Stories</p>
            </div>
        </section>
        <section class="section" id="app">
            <div class="content">
                <div class="columns">
                    <div class="column is-4 is-offset-2">
                        <input class="input" type="text" name="search" placeholder="ค้นชื่อบทความ">
                    </div>
                    <div class="column is-2">
                        <input class="button" type="submit" value="Search">
                    </div>
                    <div class="column is-2">
                        <router-link to="/blog/create">
                        <input class="button" type="button" value="Create New Blog">
                    </router-link>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="columns is-multiline">
                    <div class="column is-3" v-for="blog in blogs" :key="blog.id">
                        <div class="card">
                            <div class="card-image pt-5">
                                <figure class="image">
                                    <img :src="blog.file_path ? blog.file_path : 'https://bulma.io/images/placeholders/640x360.png'"
                                        alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="title">{{ blog.title }} </div>
                                <div class="content">
                                    <span v-if="blog.content.length > 200">
                                        {{ blog.content.substring(0, 197) + "..." }}
                                    </span>
                                    <span v-else>
                                        {{ blog.content }}
                                    </span>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a class="card-footer-item">Read more...</a>
                                <a class="card-footer-item">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="far fa-heart"></i>
                                        </span>
                                        <span>Like</span>
                                    </span>
                                </a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default{
    data() {
    return {
        blogs: null // add blogs variable
    };
},
created() {
    axios.get("http://localhost:3000/")
        .then((response) => {
          this.blogs = response.data;
          console.log(this.blogs)
        })
        .catch((err) => {
          console.log(err);
        });
}
}
</script>
<template>
    <div class="container is-widescreen">
        <section class="section" v-if="error">
            <div class="container is-widescreen">
                <div class="notification is-danger">
                    {{ error.code }}: {{ error.sqlMessage }}
                </div>
            </div>
        </section>
        <section class="hero" v-else>
            <div class="hero-body">
                <p class="title">
                    {{ data.blog.title }}
                </p>
            </div>
        </section>
        <section class="section" id="app">
            <div class="content">
                <div class="card has-background-light">
                    <div class="card-image pt-5">
                        <div class="columns">
                            <div class="column" v-for="img in data.images" :key="img.id">
                                <figure class="image">
                                    <img :src="'http://localhost:3000' + img.file_path" alt="Placeholder image">
                                </figure>
                            </div>
                        </div>

                    </div>
                    <div class="card-content">
                        <div class="content">
                            {{ data.blog.content }}
                        </div>
                        <div class="container">
                            <p class="subtitle">Comments</p>
                            <div class="box" v-for="comment in data.comments" :key="comment.id">
                                <article class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img :src="comment.file_path ? 'http://localhost:3000' + comment.file_path :
                                                'https://bulma.io/images/placeholders/640x360.png'" alt="Image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                {{ comment.comment }}
                                            </p>
                                            <p class="is-size-7">
                                                {{ comment.comment_date }}
                                            </p>
                                        </div>
                                        <nav class="level is-mobile">
                                            <div class="level-left">
                                                <a class="level-item" aria-label="like">
                                                    <span class="icon is-small">
                                                        <i class="fas fa-heart" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                </article>
                            </div>
                            <div class="columns box">
                                <div class="column is-7">
                                    <input class="input" type="text" name="comment" placeholder="Comment here..." value=""
                                        v-model="comment">
                                </div>
                                <div class="column is-3">
                                    <div id="file-js-example" class="file has-name">
                                        <label class="file-label">
                                            <input class="file-input" type="file" id="file" ref="file"
                                                @change="handleFileUpload()">
                                            <span class="file-cta">
                                                <span class="file-icon">
                                                    <i class="fas fa-upload"></i>
                                                </span>
                                                <span class="file-label">
                                                    Choose a file…
                                                </span>
                                            </span>
                                            <span class="file-name">
                                                {{ filename }}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="column is-2">
                                    <a type="button" class="button is-link" value="submit" @click="submit()">submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item" href="/">To Home Page</a>
                    </footer>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            data: {
                blog: {},
                comment: {},
                images: {},
            },
            error: null,
            comment: null,
            file: null,
            filename: null,
        };
    },
    methods: {
        handleFileUpload() {

            console.log(this.$refs.file.files[0])

            this.file = this.$refs.file.files[0];
        },
        fetch() {
            axios.get(`http://localhost:3000/blogs/${this.$route.params.id}`)
                .then((response) => {
                    this.data = response.data
                    console.log(this.data);
                })
                .catch((err) => {
                    this.error = err
                    console.log(err);
                })
        },
        async submit() {
            var formData = new FormData();
            formData.append("comment_image", this.file);
            formData.append("comment", this.comment)
            await axios.post(`http://localhost:3000/${this.$route.params.id}/comments`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.fetch();
        }
    },
    created() {
        axios.get(`http://localhost:3000/blogs/${this.$route.params.id}`)
            .then((response) => {
                this.data = response.data;
            })
            .catch((err) => {
                this.error = err
                console.log(err);
            });
    }
}
</script>
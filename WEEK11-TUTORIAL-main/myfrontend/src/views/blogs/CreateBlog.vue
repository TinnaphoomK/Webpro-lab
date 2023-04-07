<template>
    <div>
      <section class="hero">
        <div class="hero-body ml-5">
          <p class="title">Create a New Blog</p>
        </div>
      </section>
      <section class="container">
          <div class="content">
            <div class="field">
              <label class="label">Title</label>
              <input class="input" type="text" name="title" placeholder="Blog title" v-model="title">
              <p class="help is-danger">*Required</p>
            </div>
            <div class="field">
              <label class="label">Content</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea" name="content" v-model="content"></textarea>
                <p class="help is-danger">*Required</p>
              </div>
            </div>
            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <div class="select">
                  <select name="status" v-model="status">
                    <option value="01">Drafted</option>
                    <option value="02">Published</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" name="pinned" v-model="pinned">
                  Pin this blog?
                </label>
              </div>
            </div>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" id="file" ref="file" @change="handleFileUpload()">
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
            <div class="field is-grouped mt-3">
              <div class="control">
                <input type="button" class="button is-link" value="submit" @click="submit()">
              </div>
              <div class="control">
                <button class="button is-link is-light" @click="backhome">Back to home</button>
              </div>
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
        title: '',
        content: '',
        status: '01',
        pinned: false,
        file: null,
        filename:null
      }
    },
    methods: {
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
        this.filename = this.$refs.file.files[0].name;
      },
      submit() {
        var formData = new FormData();
        formData.append("blog_image", this.file);
        formData.append("title", this.title)
        formData.append("content", this.content)
        formData.append("status", this.status)
        formData.append("pinned", this.pinned)
  
        axios.post('http://localhost:3000/blogs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          this.$router.push({ name: 'Home' })
          console.log(response) // Success! -> redirect to home page
        })
          .catch(error => {
            alert("please upload file");
            console.log(error)
          });
      },
      backhome(){
        console.log("ken")
        this.$router.push({name:"Home"})
      }
    }
  }
  </script>
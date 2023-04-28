<template>
  <div class="container is-widescreen">
    <section class="section" v-if="error">
      <div class="container is-widescreen">
        <div class="notification is-danger">
          <!-- <%= error.code + ': ' + error.sqlMessage %> -->
          <!---->
          {{ error }}
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <p class="title">Create new Blog</p>
      </div>
    </section>
    <section class="px-6">
      <input class="mb-5" multiple type="file" accept="image/png, image/jpeg, image/webp" @change="selectImages" />

      <div v-if="images" class="columns is-multiline">
        <div v-for="(image, index) in images" :key="image.id" class="column is-one-quarter">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="showSelectImage(image)" alt="Placeholder image" />
              </figure>
            </div>
            <footer class="card-footer">
              <a @click="deleteSelectImage(index)" class="card-footer-item has-text-danger">Delete</a>
            </footer>
          </div>
        </div>
      </div>
      <template v-if="$v.images.$error">
        <p class="help is-danger" v-if="!$v.images.maxImageSize">Images must not exceed 1 MB in size</p>
      </template>

      <div class="field mt-5">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="$v.titleBlog.$model" :class="{ 'is-danger': $v.titleBlog.$error }" class="input" type="text"
            placeholder="Text input" />
        </div>
        <template v-if="$v.titleBlog.$error">
          <p class="help is-danger" v-if="!$v.titleBlog.required">This field is required</p>
          <p class="help is-danger" v-if="!$v.titleBlog.minLength">Title must be at least 10 characters long</p>
          <p class="help is-danger" v-if="!$v.titleBlog.maxLength">Title must not exceed 25 characters</p>
          <p class="help is-danger" v-if="!$v.titleBlog.complexTitle">Title must contain only letters</p>
        </template>
      </div>

      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea v-model="$v.contentBlog.$model" class="textarea" placeholder="Textarea"></textarea>
        </div>
        <template v-if="$v.contentBlog.$error">
          <p class="help is-danger" v-if="!$v.contentBlog.required">This field is required</p>
          <p class="help is-danger" v-if="!$v.contentBlog.minLength">Title must be at least 50 characters long</p>
        </template>
      </div>

      <div class="field">
        <label class="label">Reference</label>
        <div class="control">
          <input class="input" type="url" v-model="$v.reference.$model" placeholder="e.g. https://www.google.com">
        </div>
        <template v-if="$v.reference.$error">
          <p class="help is-danger" v-if="!$v.reference.required">This field is required</p>
          <p class="help is-danger" v-if="!$v.reference.url">Reference must be a valid URL</p>
        </template>
      </div>

      <div class="control mb-3">
        <label class="radio">
          <input v-model="statusBlog" type="radio" name="answer" value="status_private" />
          Private
        </label>
        <label class="radio">
          <input v-model="statusBlog" type="radio" name="answer" value="status_public" />
          Public
        </label>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input v-model="pinnedBlog" type="checkbox" />
            Pinned
          </label>
        </div>
      </div>

      <hr>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">วันที่โพสต์</label>
            <div class="control">
              <input class="input" type="date" v-model="$v.start_date.$model">
            </div>
            <template v-if="$v.end_date.$error">
              <p class="help is-danger" v-if="!$v.end_date.dateRequire">If you fill in the end date, this field is
                required.</p>
            </template>
            <template v-if="$v.start_date.$error">
              <p class="help is-danger" v-if="!$v.start_date.dateValidator">The start date must be before the end date.
              </p>
            </template>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">วันสิ้นสุดโพสต์</label>
            <div class="control">
              <input class="input" type="date" v-model="$v.end_date.$model">
            </div>
            <template v-if="$v.start_date.$error">
              <p class="help is-danger" v-if="!$v.start_date.dateRequire">If you fill in the end date, this field is
                required.</p>
            </template>
            <template v-if="$v.end_date.$error">
              <!-- <p class="help is-danger" v-if="!$v.end_date.dateRequire">If you fill in the start date, this field is required.</p> -->
              <!-- <p class="help is-danger">If you fill in the start date, this field is required.</p> -->
            </template>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="submitBlog" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button @click="$router.go(-1)" class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength, url } from 'vuelidate/lib/validators'

function complexTitle(value) {
  return /^[a-zA-Z]+$/.test(value);
}

function maxImageSize(images) {
  const maxSize = 1 * 1024 * 1024; // 1 MB in bytes
  for (const image of images) {
    if (image.size > maxSize) {
      return false;
    }
  }
  return true;
}

export default {
  data() {
    return {
      blog: {},
      error: null,
      images: [], // array of image
      titleBlog: "",
      contentBlog: "",
      pinnedBlog: false,
      statusBlog: "status_public",
      reference: "",
      start_date: null,
      end_date: null
    };
  },
  validations: {
    titleBlog: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(25),
      complexTitle,
    },
    contentBlog: {
      required,
      minLength: minLength(50),
    },
    reference: {
      required,
      url,
    },
    start_date: {
      dateRequire(start_date, values) {
        let end_date = values.end_date;
        return !(start_date != null && end_date == null)
      },
      dateValidator(start_date, values) {
        let end_date = values.end_date;
        if (start_date != null && end_date != null) {
          return (new Date(start_date) < new Date(end_date));
        }
        return true
      }
    },
    end_date: {
      dateRequire(end_date, values) {
        let start_date = values.start_date;
        return !(start_date == null && end_date != null)
      }
    },
    images: {
      maxImageSize,
    }
  },
  methods: {
    selectImages(event) {
      this.images = event.target.files;
      this.$v.images.$model = this.images;
    },
    showSelectImage(image) {
      // for preview only
      return URL.createObjectURL(image);
    },
    deleteSelectImage(index) {
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
    },
    submitBlog() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let formData = new FormData();
        formData.append("title", this.titleBlog);
        formData.append("content", this.contentBlog);
        formData.append("pinned", this.pinnedBlog ? 1 : 0);
        formData.append("reference", this.reference);
        formData.append("start_date", this.start_date);
        formData.append("end_date", this.end_date);
        formData.append("status", this.statusBlog);
        this.images.forEach((image) => {
          formData.append("myImage", image);
        });

        // Note ***************
        // ตอนเรายิง Postmant จะใช้ fromData
        // ตอนยิงหลาย ๆ รูปพร้อมกันใน Postman จะเป็นแบบนี้

        // title   | "This is a title of blog"
        // comment | "comment in blog"
        // ...
        // myImage | [select file 1]
        // myImage | [select file 2]
        // myImage | [select file 3]

        // จะสังเกตุว่าใช้ myImage เป็น key เดียวกัน เลยต้องเอามา loop forEach
        // พอไปฝั่ง backend มันจะจัด file ให้เป็น Array เพื่อเอาไปใช้งานต่อได้

        axios
          .post("http://localhost:3000/blogs", formData)
          .then((res) => this.$router.push({ name: 'home' }))
          .catch((e) => console.log(e.response.data));
      }
    },
  },
};
</script>

<style></style>
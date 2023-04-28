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
              <a @click="deleteSelectImage(index, image)" class="card-footer-item has-text-danger">Delete</a>
            </footer>
          </div>
        </div>

      </div>
      <template v-if="$v.checkfilesize.$error">
        <p class="help is-danger" v-if="!$v.checkfilesize.checkfile">file upload is not more than 1MB </p>
        <p class="help is-danger" v-if="!$v.checkfilesize.checkuploadfile">please upload files </p>
      </template>

      <div class="field mt-5">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="$v.titleBlog.$model" :class="{ 'is-danger': $v.titleBlog.$error }" class="input" type="text" />
        </div>
        <template v-if="$v.titleBlog.$error">
          <p class="help is-danger" v-if="!$v.titleBlog.required">
            This field is required
          </p>
          <p class="help is-danger" v-if="!$v.titleBlog.minLength">
            Must be at least 10 characters
          </p>
          <p class="help is-danger" v-if="!$v.titleBlog.maxLength">
            Must not exceed 25 characters
          </p>
          <p class="help is-danger" v-if="!$v.titleBlog.alpha">
            Must character
          </p>
        </template>
      </div>

      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <input v-model="$v.contentBlog.$model" :class="{ 'is-danger': $v.contentBlog.$error }" class="input"
            type="text" />
        </div>
        <template v-if="$v.contentBlog.$error">
          <p class="help is-danger" v-if="!$v.contentBlog.required">
            This field is required
          </p>
          <p class="help is-danger" v-if="!$v.contentBlog.minLength">
            Must be at least 50 characters
          </p>
        </template>
      </div>

      <div class="field">
        <label class="label">Reference</label>
        <div class="control">
          <input class="input" type="url" v-model="$v.reference.$model" :class="{ 'is-danger': $v.reference.$error }"
            placeholder="e.g. https://www.google.com">
        </div>
        <template v-if="$v.reference.$error">
          <!-- <p class="help is-danger" v-if="!$v.reference.required">
            This field is required
          </p> -->
          <p class="help is-danger" v-if="!$v.reference.url">
            Must be a url
          </p>
        </template>
      </div>

      <div class="control mb-3">
        <label class="radio">
          <input v-model="$v.statusBlog.$model" :class="{ 'is-danger': $v.statusBlog.$error }" type="radio" name="answer"
            value="status_private" />
          Private
        </label>
        <label class="radio">
          <input v-model="$v.statusBlog.$model" :class="{ 'is-danger': $v.statusBlog.$error }" type="radio" name="answer"
            value="status_public" />
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
            <template v-if="$v.start_date.$error">
              <p class="help is-danger" v-if="!$v.start_date.checkStart">
                Date is invalid
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
            <template v-if="$v.end_date.$error">
              <p class="help is-danger" v-if="!$v.end_date.checkEnd">
                Date is invalid
              </p>
            </template>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="submitBlog()" class="button is-link">Submit</button>
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
import {
  required,
  minLength,
  maxLength,
  url,
  alpha,
} from "vuelidate/lib/validators";
const checkstatus = (value, vm) => {
  console.log(value)
  return (value == "status_public" || value == "status_private")
}
const checkfile = (value, _vm) => {
  return !(value > 1024 * 1024)
}
const checkuploadfile = (value, _vm) => {
  return !(value == 0)
}
function checkStart(value) {

  if (!value && !this.end_date) {
    console.log(!value)
    return true
  }
  if (!value || !this.end_date) {
    console.log(!value)
    return false
  }
  return new Date(value) < new Date(this.end_date)

}

function checkEnd(value) {

  if (!value && !this.start_date) {
    console.log(!value)
    return true
  }
  if (!value || !this.start_date) {
    console.log(!value)
    return false
  }
  return new Date(value) > new Date(this.start_date)

}
export default {
  data() {
    return {
      check: "",
      blog: {},
      error: null,
      images: [], // array of image
      titleBlog: "",
      contentBlog: "",
      pinnedBlog: false,
      statusBlog: "status_public",
      reference: "",
      start_date: '',
      end_date: '',
      checkfilesize: 0
    };
  },
  methods: {
    selectImages(event) {
      this.checkfilsize = 0
      this.images = event.target.files
      this.images.forEach((val) => {
        this.checkfilesize += val.size
      })
      this.$v.checkfilesize.$touch()
      // if(this.checkfilsize > 1024*1024){
      //   alert("image is not more than 1MB")
      //   event.target.value = ''
      //   this.images = []
      // }
    },
    showSelectImage(image) {
      // for preview onlysdfddfdf
      return URL.createObjectURL(image);
    },
    //s
    deleteSelectImage(index, image) {
      console.log(this.images);
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
      this.checkfilesize -= image.size
      this.$v.checkfilesize.$touch()
    },
    submitBlog() {
      this.$v.$touch();
      this.$v.checkfilesize.$touch()
      if (!this.$v.$invalid) {
        const formData = new FormData();
        if (this.start_date != "" && this.end_date != "") {
          formData.append("start_date", this.start_date);
          formData.append("end_date", this.end_date);
        }
        if (this.reference != '') {
          formData.append("reference", this.reference);
        }
        // if(this.checkfilesize < 1024*1024){
        // this.images.forEach((image) => {
        //   formData.append("myImage", image);
        // });
        // }
        formData.append("title", this.titleBlog);
        formData.append("content", this.contentBlog);
        formData.append("pinned", this.pinnedBlog ? 1 : 0);
        // formData.append("reference", this.reference);
        // formData.append("start_date", this.start_date);
        // formData.append("end_date", this.end_date);
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
          .catch((e) => alert(e.response.data));
      }
    }

  },
  validations: {
    titleBlog: {
      required: required,
      minLength: minLength(10),
      maxLength: maxLength(25),
      alpha
    },
    contentBlog: {
      required: required,
      minLength: minLength(50),
    },
    statusBlog: {
      required: required,
      checkstatus
    },
    reference: {
      url
    },
    start_date: {
      checkStart
    },
    end_date: {
      checkEnd
    },
    checkfilesize: {
      checkfile,
      checkuploadfile
    }
  },
};
</script>

<style></style>
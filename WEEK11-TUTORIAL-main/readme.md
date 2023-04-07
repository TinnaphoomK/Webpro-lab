# WEEK11 Tutorial & Exercises
Week 11 - Vue CLI and connecting to the back-end

## Tutorial


### 1. Install Vue CLI

1. Run command เพื่อสร้าง Project Vue และ run project

```sh
# Windows, ให้ใช้ Cmd.exe แทน Powershell
npm install -g @vue/cli 
vue create myfrontend

# Mac
sudo npm install -g @vue/cli
vue create myfrontend
```

เลือก `Default ([Vue 2] babel, eslint)` และกด Enter
```sh
Vue CLI v4.5.12
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 2] babel, eslint) 
  Default (Vue 3 Preview) ([Vue 3] babel, eslint) 
  Manually select features 

```
ไปที่ folder myfrontend เพื่อ ติดตั้ง Bulma และ Axios
```sh
cd myfrontend

npm install bulma axios

npm run serve
```

2. ไปที่ <http://localhost:8080> จะได้แบบนี้


    <img src="image/Screen Shot 2564-03-30 at 22.48.42.png" width="600" />

3. เพื่อความสะดวกในการเขียนโปรแกรม ติดตั้ง VS Code Extension: `Vetur` by Pine Wu
___

### 2. Install Vue-Router

1. ใน folder `myfrontend` พิมพ์คำสั่ง เพื่อติดตั้ง Vue Router Version 3
```sh
npm install vue-router@3
```

2. สร้างไฟล์ `router.js` ใน folder `src`


3. สร้าง folder ชื่อว่า `views` ใน folder `src` และสร้างไฟล์ `HomePage.vue` ใน folder `views`

```javascript
// folder และไฟล์ที่สร้างมาใหม่
src
 |__ router.js
 |__ views
       |__ HomePage.vue
```

4. ในไฟล์ `views/HomePage.vue` ใส่ code นี้ลงไป
```html
<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
</style>
```

5. copy code ไปลงใน `router.js` เพื่อเป็น config ของ router ใน project vue

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomePage.vue') // set home as path '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

6. ที่ไฟล์ `main.js` ให้เพิ่มการเรียกใช้ router
```javascript
import router from './router'

// other code ...

new Vue({
  router,  // add router here
  render: h => h(App),
}).$mount('#app')

```

7. ไปที่ไฟล์ `App.vue` ให้ลบ code เก่าออก และใส่ code นี้เข้าไปแทน โดย tag `<router-view/>` จะเปลี่ยนไปตาม router ที่ตั้งไว้
```html
<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
```

___
### 3. แปลง ejs ที่ทำในสัปดาห์ก่อน ๆ ให้เป็น Vue

เราจะนำ code ที่เราทำในสัปดาห์ก่อน ๆ มาใช้กับ project vue โดยหน้าที่นำมาใช้คือหน้า `views/index.ejs` ใน Week ที่ 10

1. ในไฟล์ `views/HomePage.vue` ให้ import axios เพื่อใช้งานการเรียก api ใน tag script
```javascript
<script>
import axios from "axios";
// other code
```

2. ใน `data()` ให้เพิ่มตัวแปร blogs เพิ่อใช้เก็บค่าผลลัพท์ที่ได้จาก api
```javascript
data() {
    return {
        blogs: null // add blogs variable
    };
  },
```

3. เพิ่ม code ดึง api ใน `create()` เพื่อให้ดึง api แบบอัตโนมัติเมื่อเข้ามาหน้านี้ และให้ลองดูใน console ว่าได้ data ออกมามั้ย
```javascript
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
```

4. หลังจากที่ได้ data เราก็จะ render ออกมา โดยให้ copy ส่วนที่**อยู่ใน** `<body>` จาก `index.ejs` โดยเอามาไว้ในส่วน `<template>` ในไฟล์ `HomePage.vue`
```html
<template>
  <div class="container is-widescreen">
    <!-- other code -->
  </div>
</template>
```

5. จะมี code จาก ejs บางบรรทัด เช่น code ที่ใช้ loop blog ก็ให้ลบออก และใช้ v-for ของ vue มาใช้แทนได้เลย ตัวอย่าง
```html
<% for (let blog of blogs) { %>
    <div class="column is-3">

<!-- change to  -->

<div v-for="blog in blogs" :key="blog.id">
```

> คำเตือนนนนน : เมื่อใช้ v-for ให้ใส่ :key ทุกครั้ง ตามในตัวอย่าง

6. สุดท้าย code ใน `<template>` หลังจากแปลงเป็น vue แล้วจะได้แบบนี้

```html
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
            <input class="button" type="button" value="Create New Blog">
          </div>
        </div>
        </div>
        <div class="content">
          <div class="columns is-multiline">
              <div class="column is-3" v-for="blog in blogs" :key="blog.id">
                <div class="card">
                    <div class="card-image pt-5">
                      <figure class="image">
                        <img :src="blog.file_path ? blog.file_path : 'https://bulma.io/images/placeholders/640x360.png'" alt="Placeholder image">
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
```

7. หากของใครที่หน้าเว็บมัน render ออกมาไม่สวยงาม เพราะว่าเรายังไม่ได้เรียกใช้ bulma ให้ไปที่ไฟล์ `main.js` และเพิ่ม code นี้เข้าไป
```javascript
import 'bulma/css/bulma.css'
```

8. หากใครมีปัญหาเรื่อง icon ไม่แสดง ให้ copy script ดังกล่าวไปไว้ที่ `myfrontend/public/index.html`

```html
<script src="https://kit.fontawesome.com/466f7f0339.js" crossorigin="anonymous"></script>
```


___
### 4. Start the back-end server
1. ไปที่ folder `backend` และสั่งคำสั่ง
```
npm install
```
เพื่อติดตั้ง library ที่เกี่ยวข้อง

2. Run back-end server ด้วยคำสั่ง 
```
npm run serve
หรือ
npx nodemon index.js
```
**หมายเหตุ:** อย่าลืมแก้ไข password ของ database ในไฟล์ config.js

___
### 5. Fix CORS Problems
1. ไปที่ folder `backend` and ติดตั้ง cors
```
npm install cors
```
2. ไปที่ index.js และเพิ่ม code
```javascript
var cors = require('cors')

app.use(cors())
```
**NOTE: แต่ว่าใน folder `backend` ที่เตรียมมาให้นี้ทำการติดตั้ง cors ไว้แล้ว สามารถสั่ง `npm install` ได้เลย**


### 6. Create New Blog Page
เรามาลองเปลี่ยนหน้าสร้าง blog ใหม่จาก `ejs` เป็น `Vue` กันบ้างนะครับ

1. ในโฟลเดอร์ `views/blogs/` สร้างไฟล์ `CreateBlog.vue` โดยทำการ copy code จากสัปดาห์ที่ 10 ในไฟล์ `views/blogs/create.ejs`
```html
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
            <input class="input" type="text" name="title" placeholder="Blog title" value="">
            <p class="help is-danger">*Required</p>
          </div>
          <div class="field">
            <label class="label">Content</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea" name="content"></textarea>
              <p class="help is-danger">*Required</p>
            </div>
          </div>
          <div class="field">
            <label class="label">Status</label>
            <div class="control">
              <div class="select">
                <select name="status">
                  <option value="01">Drafted</option>
                  <option value="02">Published</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" name="pinned">
                Pin this blog?
              </label>
            </div>
          </div>
          <div class="file">
            <label class="file-label">
              <input class="file-input" type="file" name="blog_image">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose an image…
                </span>
              </span>
            </label>
          </div>
          <div class="field is-grouped mt-3">
            <div class="control">
              <input type="button" class="button is-link" value="submit">
            </div>
            <div class="control">
              <button class="button is-link is-light">Back to home</button>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {}
      },
}
</script>
```

2. ทำการเพิ่ม `path` ใหม่สำหรับหน้า create new blog ในไฟล์ `router.js`
```javascript
...
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomePage.vue') 
  },
+  {
+    path: '/blog/create',
+    name: 'Create new blog',
+    component: () => import('./views/blogs/CreateBlog.vue') // set create blog as path '/blog/create'
+  },
]
...
```

3. ปรับเพิ่ม `<router-link>` ในหน้า `HomePage.vue` เมื่อกดจะไปที่ `path` = `/blog/create`
```html
...
  <div class="column is-2">
+    <router-link to="/blog/create">
      <input class="button" type="button" value="Create New Blog">
+    </router-link>
  </div>
...
```

4. เพิ่ม `v-model` ใน input field ในหน้า `CreateBlog.vue` (ยกเว้น `input type="file"`)
```html
...
  <div class="field">
    <label class="label">Title</label>
+   <input class="input" type="text" name="title" placeholder="Blog title" v-model="title">
    <p class="help is-danger">*Required</p>
  </div>
  <div class="field">
    <label class="label">Content</label>
    <div class="control">
+     <textarea class="textarea" placeholder="Textarea" name="content" v-model="content"></textarea>
      <p class="help is-danger">*Required</p>
    </div>
  </div>
  <div class="field">
    <label class="label">Status</label>
    <div class="control">
      <div class="select">
+       <select name="status" v-model="status">
          <option value="01">Drafted</option>
          <option value="02">Published</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <label class="checkbox">
+       <input type="checkbox" name="pinned" v-model="pinned">
        Pin this blog?
      </label>
    </div>
  </div>
...
```
และ ประกาศตัวแปรใน `data()`
```javascript
...
  data() {
      return {
          title: '',
          content: '',
          status: '01',
          pinned: 0,
          file: null
      }
  },
...
```

5. แก้ไข `input type="file"` ให้เรียก method `handleFileUpload()` เมื่อมีการเปลี่ยนค่า
```html
...
<input class="file-input" type="file" id="file" ref="file" @change="handleFileUpload()">
...
```

6. แก้ไขปุ่ม `submit` ให้เรียก method `submit()` เมื่อถูกคลิ้ก
```html
...
<input type="button" class="button is-link" value="submit" @click="submit()">
...
```

7. เพิ่ม method `handleFileUpload()` และ `submit()` ใน `methods`
```javascript
...
  methods: {
      handleFileUpload(){
          this.file = this.$refs.file.files[0];
      },
      submit(){
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
          }).then(response => {
              this.$router.push({path: '/'}) // Success! -> redirect to home page
          })
          .catch(error => {
              console.log(error.message);
          });
      }
  }
...
```
___
## Exercises

1. เมื่อกดปุ่ม Like ของแต่ละ blog ให้ยิง axios เพื่อไปเรียก api `/blogs/addlike/:blogId` ที่ backend และเพิ่มจำนวนยอดไลค์ของ blog ที่กดในหน้า frontend

2. ให้แปลงหน้า blog detail ที่ทำด้วย `ejs` จากสัปดาห์ที่ 10 ให้เป็น version vue + axios โดยให้สร้างไฟล์ `blogs/BlogDetail.vue` และทำการเพิ่มเป็น path `/detail/:id` ใน `router.js` โดย `id` ที่อยู่บน path คือเลขของ blog ที่ใส่เข้ามา จากนั้นเอา `id` ที่ใส่มาใช้ในการยิง api เพื่อ get ข้อมูลจาก backend

3. ต่อเนื่องจากข้อ 2 ให้ปรับ code `ejs` จากสัปดาห์ที่ 10 ในส่วนของการ Add new comment ให้่เป็น version vue + axios

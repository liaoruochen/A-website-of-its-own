<template>
    <div class="navigationBar">
        <nav class="nav">
            <ul class="nav-ul">
                <li class="title">
                    <router-link to="/" class="type">
                        <img src="@/assets/home.png" alt="">
                        <span>Home</span>
                    </router-link>
                </li>
                <li class="title">
                    <router-link to="/articlelist" class="type">
                        <img src="@/assets/label.png" alt="">
                        <span>Article</span>
                    </router-link>
                </li>
                <li class="title">
                    <router-link to="/about" class="type">
                        <img src="@/assets/people.png" alt="">
                        <span>About</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navigationBar {
  width: 100%;
  height: 60px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  /* display: none; */
}

.nav {
  min-width: 320px;
  max-width: 700px;
  height: 50px;
  margin: 0 auto;
}

.nav-ul {
  display: flex;
}

.title {
  flex: 1;
  display: inline-block;
  height: 60px;
}

.title .type {
  display: block;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title span {
  line-height: 60px;
  font-size: 18px;
  margin-left: 10px
}

.title img {
  width: 20px;
  height: 20px;
}
</style>

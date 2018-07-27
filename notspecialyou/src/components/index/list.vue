<template>
    <div class="list-box">
        <ul class="list">
            <li class="list-title">
                <router-link to="/login" class="list-type">
                    <img src="@/assets/home1.png" alt="">
                    <span>Login</span>
                </router-link>
            </li>
            <li class="list-title">
                <router-link to="/articlelist" class="list-type">
                    <img src="@/assets/label1.png" alt="">
                    <span>Article</span>
                </router-link>
            </li>
            <li class="list-title">
                <router-link to="/about" class="list-type">
                    <img src="@/assets/people1.png" alt="">
                    <span>about</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.list-box {
  width: 100%;
}

.list {
  max-width: 450px;
  height: 60px;
  /* background-color: red; */
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
@media screen and (max-width: 800px){
    .list {
        width: 300px
    }
}

.list-title {
  display: inline-block;
  flex: 1;
  position: relative;
}

.list-type {
  display: block;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-type img {
  width: 20px;
  height: 20px;
}

.list-type span {
  font-size: 18px;
  color: #000;
  margin-left: 10px
}
</style>

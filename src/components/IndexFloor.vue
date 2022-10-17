<template>
  <!--楼梯3f-->
  <div class="floor" id="f3">
    <div class="floor_top">
      <img
        src="https://web.codeboy.com/xuezi/img/index/computer_icon.png"
        alt=""
      />
      {{ title }}
    </div>
    <div class="floor_content">
      <div class="food">
        <div class="desc">
          <p class="name">{{ items[0].title }}</p>
          <p class="details">
            {{ items[0].details }}
          </p>
          <p class="price">￥{{ items[0].price }}</p>
          <div id="one" class="view" @click="goto(0)">查看详情</div>
        </div>
        <img :src="`${baseUrl + items[0].pic}`" alt="" />
      </div>
      <div class="food">
        <div class="desc">
          <p class="name">{{ items[1].title }}</p>
          <p class="details">
            {{ items[1].details }}
          </p>
          <p class="price">￥{{ items[1].price }}</p>
          <div id="two" class="view" @click="goto(1)">查看详情</div>
        </div>
        <img :src="`${baseUrl + items[1].pic}`" alt="" />
      </div>
      <div class="food">
        <div class="desc">
          <p class="name">{{ items[2].title }}</p>
          <p class="price">￥{{ items[2].price }}</p>
          <div id="three" class="view" @click="goto(2)">查看详情</div>
        </div>
        <img :src="`${baseUrl + items[2].pic}`" alt="" />
      </div>
      <div class="product">
        <img :src="`${baseUrl + items[3].pic}`" alt="" />

        <h2>{{ items[3].title }}</h2>
        <p>￥{{ items[3].price }}</p>
        <a id="four" @click="goto(3)">查看详情</a>
      </div>
      <div class="product">
        <img :src="`${baseUrl + items[4].pic}`" alt="" />

        <h2>{{ items[4].title }}</h2>
        <p>￥{{ items[4].price }}</p>
        <a @click="goto(4)" id="five">查看详情</a>
      </div>
      <div class="product">
        <img :src="`${baseUrl + items[5].pic}`" alt="" />

        <h2>{{ items[5].title }}</h2>
        <p>￥{{ items[3].price }}</p>
        <a @click="goto(5)" id="fix">查看详情</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["baseUrl"]),
  },
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goto(index) {
      console.log(index);
      const href = this.items[index].href;
      const lid = href.split("?")[1];
      console.log(href);
      // return
      this.$router.push(`/productDetail?${lid}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/item_cat.css"></style>

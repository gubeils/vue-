<template>
  <div v-if="data">
    <!-- banner部分-->
    <swiper
      ref="mySwiper"
      @mouseover.native.capture="stopSwiper"
      @mouseout.native="startSwiper"
      :options="swiperOption"
    >
      <swiper-slide v-for="item in data.carouselItems" :key="item.id">
        <img :src="`${baseUrl + item.img}`" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!--/*楼梯1f*/-->
    <IndexFloor title="首页推荐 /1F" :items="data.recommendedItems" />

    <!--楼梯2f-->
    <IndexFloor title="最新上架 /2F" :items="data.newArrivalItems" />

    <!--楼梯3f-->
    <IndexFloor title="热销单品 /3F" :items="data.topSaleItems" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IndexFloor from "../components/IndexFloor.vue";
export default {
  computed: {
    ...mapState(["baseUrl"]),
  },
  data() {
    return {
      data: null,
      swiperOption: {
        effect: "cube",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    getData() {
      this.axios.get("product/index.php").then(res => {
        console.log(res.data);
        this.data = res.data;
      });
    },
    // 鼠标进入时触发
    stopSwiper() {
      this.$refs.mySwiper.$swiper.autoplay.stop();
      // console.log("鼠标进入");
    },
    // 鼠标离开时触发
    startSwiper() {
      this.$refs.mySwiper.$swiper.autoplay.start();
      // console.log("鼠标离开");
    },
  },
  mounted() {
    this.getData();
  },
  components: { IndexFloor },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 1000px;
  margin: 10px auto;
}
</style>
<style scoped src="../assets/css/item_cat.css"></style>

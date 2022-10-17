<template>
  <div class="product" :id="p.lid">
    <a href="product_details.html?lid=${p.lid}"
      ><img :src="baseUrl+p.pic" :alt="p.title"
    /></a>
    <div>
      <p>
        <span class="price">￥{{p.price}}</span
        ><a
          href="product_details.html?lid=${p.lid}"
          class="title"
          :title="p.title"
          >{{p.title}}</a
        >
      </p>
      <div>
        <span class="reduc lf">-</span
        ><input type="text" value="1" class="lf" /><span class="add lf">+</span>
        <div class="addcart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['baseUrl']),
  },
  props: {
    p: {
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/products.css"></style>

<template>
  <div>
    <!-- banner部分-->
    <div class="store">
      <img src="https://web.codeboy.com/xuezi/img/index/index_guild.png" />
    </div>

    <!--笔记本电脑列表-->
    <div class="store_action">
      <div class="store_action_left">
        <div class="store_action_left_content">
          <div id="plist">
            <div class="salc_top">笔记本电脑</div>
            <div class="salc_content">
              <img
                v-if="!data"
                class="loading"
                src="https://web.codeboy.com/xuezi/img/loading.gif"
              />
              <template v-else>
                <ProductsCell
                  v-for="item in data.data"
                  :key="item.lid"
                  :p="item"
                />
              </template>
            </div>

            <!--分页条-->
            <div class="pages" v-if="data">
              <span @click="pno--" :class="{prvent:pno===1}">上一页</span>
              <span
                v-for="item in data.pageCount"
                :key="item"
                @click="pno = item"
                :class="{active: pno === item}"
              >
                {{ item }}
              </span>
              <span @click="pno++" :class="{prvent:pno===data.pageCount}">下一页</span>
            </div>
          </div>
        </div>
      </div>
      <div class="store_action_right rt">
        <div class="store_action_right_top">
          <p>
            <img
              src="https://web.codeboy.com/xuezi/img/foodstore/foodstore_icon2.png"
              alt=""
            />商家公告
          </p>
          <div>
            <p>本店推出全网最低价套餐，保证比其他平台的价格要低！</p>
            <p>不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！</p>
            <p>晚上10点以后订餐需另加送餐费2元！谢谢合作！</p>
          </div>
        </div>
        <div class="store_action_right_cart">
          <div class="store_action_right_cart_top">
            购物车 <span class="clear rt">清空</span>
          </div>
          <div class="store_action_right_cart_content">
            <div></div>
            <!--<div id="5">-->
            <!--<span>精选双人餐</span>-->
            <!--<div><span class="cart_reduc lf">-</span><input type="text" value="1" class="lf"/><span class="cart_add lf">+</span></div>-->
            <!--<span class="rt pc">￥:<span class="cart_unit_price">20.00</span></span>-->
            <!--</div>-->
          </div>
          <div class="sarc">
            <div class="total_price lf">
              <img
                src="https://web.codeboy.com/xuezi/img/foodstore/foodstore_car_2.png"
                alt=""
              />￥:<span>0.00</span>
            </div>
            <div class="settle lf">
              <a href="cart.html" style="color: #fff">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsCell from "@/components/ProductsCell.vue";
export default {
  props: {
    kw: {
      default: "",
    },
  },
  data() {
    return {
      data: null,
      pno: 1,
    };
  },
  methods: {
    getData() {
      const url = `product/list.php?pno=${this.pno}&kw=${this.kw}`;
      console.log("url", url);
      this.axios.get(url).then(res => {
        console.log(res.data);
        this.data = res.data;

      });
    },
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route(newValue, oldValue) {
      this.pno=1
      this.getData();

    },
    pno() {
      this.getData();
    },
  },
  components: { ProductsCell },
};
</script>

<style lang="scss" scoped>
.pages {
  background-color: #fff;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  // color: #fff;
  user-select: none;

  span {
    width: 40px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ddd;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    &:hover {
      background: #ccc;
    }
    &.active {
      background-color: #0aa1ed;
    }
  }
}
.prvent{
  pointer-events: none;
  opacity: 0.4;
}
</style>
<style src="../assets/css/products.css" scoped></style>

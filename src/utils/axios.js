import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'https://web.codeboy.com/xuezi/data/'

Vue.use(VueAxios, axios)

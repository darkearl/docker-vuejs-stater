import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import Mixins from './mixins'
import {Modal} from './components'
import * as pc from './layouts/pc/default'

import * as mobile from './layouts/mobile/default'


Vue.component('pc-main-layout' ,pc.Main)
Vue.component('pc-login-layout' ,pc.Login)
Vue.component('mobile-main-layout' ,mobile.Main)
Vue.component('mobile-login-layout' ,mobile.Login)

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.mixin(Mixins)
Vue.component('Modal' ,Modal)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
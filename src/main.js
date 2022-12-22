import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "./route"
import headerC from './components/partisial/header.vue'
import heroComponent from './components/partisial/hero.vue'
import bottomcomponent from './components/partisial/bottom-mobile.vue'
import layanancomponent from './components/partisial/layanan.vue'
import cardcomponent from './components/partisial/card.vue'
import axios from 'axios'

const app = createApp(App)
//init component
app.component("headers", headerC)
app.component("hero-section", heroComponent)
app.component("bottom-mobile", bottomcomponent)
app.component('layanan', layanancomponent)
app.component('card', cardcomponent)

app.use(router).mount('#app')

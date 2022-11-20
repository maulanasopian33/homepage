import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "./route"
import headerC from './components/partisial/header.vue'
import heroComponent from './components/partisial/hero.vue'
import bottomcomponent from './components/partisial/bottom-mobile.vue'

const app = createApp(App)
//init component
app.component("headers", headerC)
app.component("hero-section", heroComponent)
app.component("bottom-mobile", bottomcomponent)

app.use(router).mount('#app')

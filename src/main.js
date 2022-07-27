import { createApp } from 'vue';
import App from './App';
import { createPinia } from 'pinia';
import router from './router';
import directives from '@/directives';
import PrimeVue from 'primevue/config';
import '@/assets/css/primevue/MyTheme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
const pinia = createPinia();

directives.forEach(directive => {
	app.directive(directive.name, directive)
});

app.use(pinia)
	.use(router)
	.use(PrimeVue)
	.mount('#app');

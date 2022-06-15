import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import directives from '@/directives';
import PrimeVue from 'primevue/config';
import '@/assets/css/primevue/MyTheme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';




const app = createApp(App);

directives.forEach(directive => {
	app.directive(directive.name, directive)
});

app.use(store)
	.use(router)
	.use(PrimeVue)
	.mount('#app');

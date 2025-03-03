import './assets/styles.css';  // Import CSS

// Import JS files
import './js/navigation.js';
import './js/sticky.js';
import './js/supabase.js';

// Vue setup
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

import { createApp } from 'vue';
import Example from './example/dynamic-form.vue';
import './src/index.less';

const app = createApp(Example);

app.mount(document.querySelector('#app') as HTMLDivElement);

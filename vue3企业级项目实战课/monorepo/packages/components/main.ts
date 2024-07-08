import { createApp } from 'vue';
import Example from './example/message.vue';
import './src/index.less';

const app = createApp(Example);

app.mount(document.querySelector('#app') as HTMLDivElement);

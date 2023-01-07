import { createApp } from 'nativescript-vue';
import App from './components/App.vue';

import ButtonPlugin from '@nativescript-community/ui-material-button/vue';
import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue';

createApp(App).use(ButtonPlugin).use(CardViewPlugin).start();

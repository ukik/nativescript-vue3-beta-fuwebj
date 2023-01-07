import { createApp } from 'nativescript-vue';
import App from './components/App.vue';

import ButtonPlugin from '@nativescript-community/ui-material-button/vue';
import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue';
import ActivityIndicatorPlugin from '@nativescript-community/ui-material-activityindicator/vue';
import BottomNavigationPlugin from '@nativescript-community/ui-material-bottom-navigation/vue';
import BottomNavigationBarPlugin from '@nativescript-community/ui-material-bottomnavigationbar/vue';
import { install as installBottomSheet } from '@nativescript-community/ui-material-bottomsheet';
import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
// import { install } from "@nativescript-community/ui-material-bottomsheet";
// install();
// import {
//   installMixins,
//   themer,
// } from '@nativescript-community/ui-material-core';
import FloatingActionButtonPlugin from '@nativescript-community/ui-material-floatingactionbutton/vue';
import ProgressPlugin from '@nativescript-community/ui-material-progress/vue';
import RipplePlugin from '@nativescript-community/ui-material-ripple/vue';
import SliderPlugin from '@nativescript-community/ui-material-slider/vue';
import SpeedDialPlugin from '@nativescript-community/ui-material-speeddial/vue';
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';
import TextFieldPlugin from '@nativescript-community/ui-material-textfield/vue';
import TextViewPlugin from '@nativescript-community/ui-material-textview/vue';

createApp(App)
  .use(ButtonPlugin)
  .use(CardViewPlugin)
  .use(ActivityIndicatorPlugin)
  .use(BottomNavigationPlugin)
  .use(BottomNavigationBarPlugin)
  .use(BottomSheetPlugin)
  .use(FloatingActionButtonPlugin)
  .use(ProgressPlugin)
  .use(RipplePlugin)
  .use(SliderPlugin)
  .use(SpeedDialPlugin)
  .use(TabsPlugin)
  .use(TextFieldPlugin)
  .use(TextViewPlugin)
  .start();

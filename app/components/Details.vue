<script lang="ts" setup>
import { ref, $navigateBack, $navigateTo } from 'nativescript-vue';
import Cards from './Cards.vue';
import Home from './Home.vue';

const items = ref(
  Array(10000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`)
);

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function saveInput() {
  console.log('Saving data');
  $navigateTo(Home, {
    clearHistory: true,
    // transition: {
    //   name: 'flip',
    //   duration: 200,
    //   curve: 'easeIn',
    // },
  });
}

function getBack() {
  console.log('getBack');
  $navigateBack();
}
const processChange = debounce(() => saveInput());
const processBack = debounce(() => getBack());
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout class="w-full" columns="*,*" rows="auto, *">
      <Label
        col="0"
        text="Go Back"
        @tap="processBack"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />
      <Label
        col="1"
        text="Go Home"
        @tap="processChange"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />

      <ContentView colSpan="2" row="1" class="bg-[#65adf1] rounded-t-3xl">
        <ListView
          :items="items"
          separatorColor="transparent"
          class="bg-transparent"
        >
          <template #default="{ item, index }">
            <GridLayout columns="*, auto" class="px-4">
              <GridLayout columns="auto,*" rows="auto,auto">
                <Image
                  loadMode="async"
                  rowSpan="2"
                  col="0"
                  src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png"
                  stretch="none"
                />
                <Label
                  col="1"
                  row="0"
                  :text="item"
                  class="text-3xl pt-3 text-white"
                />
                <Label
                  col="1"
                  row="1"
                  :text="index"
                  class="text-3md py-1 text-white"
                />
              </GridLayout>
              <ContentView col="1" class="w-5 h-5 rounded-full bg-white" />
            </GridLayout>
          </template>
        </ListView>
      </ContentView>
    </GridLayout>
  </Page>
</template>

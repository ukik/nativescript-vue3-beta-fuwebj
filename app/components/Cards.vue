<script lang="ts" setup>
import { ref, $navigateBack, $navigateTo } from 'nativescript-vue';
import Details from './Details.vue';
import Home from './Home.vue';
const items = ref(
  Array(10000)
    .fill(0)
    .map((_, index) => `Item Card ${index + 1}`)
);

function onLabelLoaded(args: EventData) {
  // vertical align android
  const lbl = args.object as Label;
  if (global.isAndroid) {
    lbl.android.setGravity(17); // vertical center
  }
}

function debounce(func, timeout = 100) {
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
  $navigateTo(Details);
  // $navigateTo(Details, {
  //   transition: {
  //     name: 'slideLeft',
  //     duration: 10,
  //     curve: 'easeIn',
  //   },
  // });
}
const processChange = debounce(() => saveInput());
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, *">
      <Label
        text="Go Back"
        @tap="
          $navigateTo(Home, {
            clearHistory: true,
            transition: {
              name: 'slideLeft',
              duration: 100,
              curve: 'easeIn',
            },
          })
        "
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />

      <ContentView row="1" class="bg-[#65adf1] rounded-t-3xl___">
        <ListView
          :items="items"
          separatorColor="transparent"
          class="bg-transparent"
        >
          <template #default="{ item, index }">
            <GridLayout
              @tap="processChange"
              columns="auto, *"
              rows="auto,auto,200,50,auto"
              class="p-2 border-b-2 border-white"
            >
              <Image
                class="mr-2 rounded-full"
                loadMode="async"
                rowSpan="2"
                col="0"
                height="40"
                width="40"
                src="https://cdn.quasar.dev/img/avatar2.jpg"
                stretch="fill"
              />
              <Label col="1" row="0" :text="item" class="text-lg text-white" />
              <Label col="1" row="1" :text="index" class="text-xs text-white" />

              <Image
                class="w-full mt-1 rounded-md"
                loadMode="async"
                colSpan="2"
                rowSpan="2"
                row="2"
                src="https://cdn.quasar.dev/img/mountains.jpg"
                stretch="fill"
              />

              <Label
                colSpan="2"
                row="3"
                text=""
                backgroundColor="#000000"
                opacity="0.5"
                height="50"
                class="w-full rounded-b-lg"
              />
              <Label
                @loaded="onLabelLoaded"
                verticalAlign="middle"
                colSpan="2"
                row="3"
                text="Title X"
                backgroundColor="transparent"
                opacity="1"
                class="text-xl text-center text-white w-full rounded-b-lg"
              />

              <Label
                textWrap="true"
                colSpan="2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                row="4"
                class="w-full pt-1 text-white"
              />
            </GridLayout>
          </template>
        </ListView>
      </ContentView>
    </GridLayout>
  </Page>
</template>

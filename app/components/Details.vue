<script lang="ts" setup>
import Cards from './Cards.vue';
import { ref, $navigateBack } from 'nativescript-vue';

const items = ref(
  Array(10000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`)
);
</script>

<script lang="ts">
export default {
  methods: {
    onItemTap(event) {
      // console.log(event.index);
      // console.log(event.item);
      this.$navigateTo(Cards, {
        clearHistory: false,
        // transition: {
        //   name: 'flip',
        //   duration: 200,
        //   curve: 'easeIn',
        // },
      });
    },
  },
};
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout class="w-full" columns="*,*" rows="auto, *">
      <Label
        col="0"
        text="Go Back"
        @tap="$navigateBack"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />
      <Label
        col="1"
        text="Go Cards"
        @tap="onItemTap"
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

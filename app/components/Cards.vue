<script lang="ts" setup>
import { ref, $navigateBack } from 'nativescript-vue';

const items = ref(
  Array(10000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`)
);
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, *">
      <Label
        text="Go Back"
        @tap="$navigateBack"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />

      <ContentView row="1" class="bg-[#65adf1] rounded-t-3xl">
        <ListView
          :items="items"
          separatorColor="transparent"
          class="bg-transparent"
        >
          <template #default="{ item, index }">
            <GridLayout
              columns="*, auto"
              rows="auto,auto,167,auto,"
              class="px-4"
            >
              <Image
                loadMode="async"
                rowSpan="2"
                col="0"
                src="https://cdn.quasar.dev/img/avatar2.jpg"
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

              <Image
                loadMode="async"
                colSpan="2"
                span="2"
                src="https://cdn.quasar.dev/img/mountains.jpg"
                stretch="none"
              />
              <!-- <ContentView col="1" class="w-5 h-5 rounded-full bg-white" /> -->
            </GridLayout>
          </template>
        </ListView>
      </ContentView>
    </GridLayout>
  </Page>
</template>

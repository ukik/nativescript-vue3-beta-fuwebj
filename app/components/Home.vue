<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  $navigateTo,
} from 'nativescript-vue';
import Details from './Details.vue';
import Cards from './Cards.vue';

const counter = ref(0);
const message = computed(() => {
  return `Blank {N}-Vue app: ${counter.value}`;
});

function logMessage() {
  console.log('You have tapped the message!');
}

let interval: any;
onMounted(() => {
  console.log('mounted');
  interval = setInterval(() => counter.value++, 100);
});

onUnmounted(() => {
  console.log('unmounted');
  clearInterval(interval);
});
</script>

<template>
  <Page>
    <ActionBar>
      <Label text="Home" class="font-bold text-lg" />
    </ActionBar>

    <GridLayout rows="*, auto, auto, *" class="px-4">
      <Label
        row="1"
        class="text-xl align-middle text-center text-gray-500"
        :text="message"
        @tap="logMessage"
      />

      <Button
        row="2"
        @tap="
          $navigateTo(Cards, {
            transition: {
              name: 'slideLeft',
              duration: 200,
              curve: 'easeIn',
            },
          })
        "
        class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
        horizontalAlignment="center"
      >
        View Details Hore
      </Button>
    </GridLayout>
  </Page>
</template>

<template>
  <div>
    <div>Message: {{ msg }}</div>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
    <div :id="id">{{ id }}</div>
    <div :id>{{ id }}</div>
    <div>
      <span>disabled: </span>
      <button v-for="item in disableList" :key="item" :disabled="item">v:{{ item }}</button>
    </div>
    <div v-bind="objectOfAttrs">{{ objectOfAttrs }}</div>
    <div v-for="(v, k) in objectOfAttrs" :key="k" :[k]="v" >{{ k }}: {{ v }}</div>
    <div>{{ computedMsg }}</div>
    <div v-pre>{{ this will not be compiled }}</div>
    <div>
      <span>{{ count }}</span>
      <button @click="increment">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const msg = 'Hello World'
const rawHtml = '<span style="color: red">This should be red.</span>'
const id = 'testId'
const disableList = [true, false, '', null, undefined, 0, 1, 2]
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
}

// const computedMsg = computed<string>((name, debug) => {
const computedMsg = computed<string>(() => {
  // console.log('-->a: ', {name, debug});
  return 'v'
})

const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  }, set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

console.log(`-->V:`, computedMsg.value);

const count = ref(0)
const increment = () => {
  count.value += 1
}
</script>

<style lang="scss" scoped></style>

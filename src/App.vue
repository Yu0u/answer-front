<script setup lang="ts">
import { computed } from 'vue'
import { useCountStrore } from '@/store'
import { storeToRefs } from 'pinia'
const countStore = useCountStrore()

const countComputed = computed(() => countStore.count)
const { doubleCount } = storeToRefs(countStore)
</script>

<template>
  <div class="flex fixed w-screen justify-center iterms-center text-center">
    <span>当前数值{{ countComputed }}</span>
    <br />
    <span>双倍数值{{ doubleCount }}</span>
    <br />
    <el-button type="primary" round @click="countStore.countAdd">
      +1
    </el-button>
    <br />
    <el-button type="primary" round @click="countStore.countReduce">
      -1
    </el-button>
    <br />
    <el-button type="primary"></el-button>
  </div>
</template>

<style scoped></style>

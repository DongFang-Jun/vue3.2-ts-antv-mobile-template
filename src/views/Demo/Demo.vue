<script setup lang="ts">
import useStore from "@/stores/index";
import { demo } from '@/apis/demo/demo';
import { useMouse } from "@/composable/demo"
import { showSuccessToast } from "vant";


const test = () => {
  demo({ demo: '12' }).then(res => {
    console.log(res)
  })
}
test()



let { x, y } = useMouse()


// 防抖测试
const debounceClick = () => {
  showSuccessToast("防抖按钮触发的事件")
}

// 节流测试
const throttleClick = () => {
  showSuccessToast("节流按钮触发的事件")
}

// store
const { demoStore } = useStore()

// state
const number = demoStore.number
console.log(number)

// getter
const numberGetter = demoStore.getNumber
console.log(`getter值为${numberGetter}`)

// getter携带参数
const numberGetterWithParam = demoStore.getNumberWithParam(10)
console.log(`getter参数值为${numberGetterWithParam}`)

// action
demoStore.setNumber('测试').then((res: string) => {
  console.log(res)
})

</script>

<template>
  <div class="container">
    <span>composable示例（类似mixins）: {{ x }}, {{ y }}</span>
    <div class="test-button">
      <van-button type="primary" v-debounce:1000="debounceClick">防抖测试</van-button>
      <van-button type="primary" v-debounce:1000="throttleClick">节流测试</van-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  color: red;

  .test-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    button {
      margin-bottom: 20px;
    }
  }


}
</style>

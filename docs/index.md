---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JuRuoWiki"
  text: "蒟蒻的人生导航"
  tagline: 为自由而沉淀 欢迎大家访问
  image:
   src: /juruo.png # /相当于public文件夹了,直接拿到里面的图片
   alt: 背景图
  actions:
    - theme: brand
      text: 个人主页
      link: /个人主页
    - theme: alt
      text: To do
      link: /代办

features:
  - title: 人生目标
    icon: 🎯
    details: 自洽 健康 成长
  - title: 小感悟
    icon : 🧐
    details: 事缓则圆 人缓则安 语迟则贵
  - icon: 🧩
    title: 技能学习
    details: 网安 做饭 摄影

lastUpdated: false
# comment: false
---

<Confetti />

<script setup lang="ts">
import {ref,onMounted} from 'vue'

const timerNum=ref(0)
const timer=ref(null)

onMounted(()=>{
  timer.value=setInterval(()=>{
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const time = `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`
    const dom = document.querySelector('.tagline')
    if(dom){
      dom.innerHTML = time
    }else{
      timerNum.value+=1
    if(timerNum.value>5){
      clearInterval(timer.value)
      timer.value=null
    }
    }
  },1000)
})
</script>

<style module>
  :root{
    --vp-c-indigo-1:'#567bf3'!important;
  }
</style>
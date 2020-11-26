<template>
  <div id="app">
    <router-view/>
    <tabBar>
      <tabBarItem path='/text1'>
        <img src="./assets/img/a.png" alt="a" slot="icon">
        <div slot="alias">test1</div>
      </tabBarItem>
      <tabBarItem path='/text2' activeColor="DarkCyan">
        <img src="./assets/img/b.png" alt="b" slot="icon">
        <div slot="alias">test2</div>
      </tabBarItem>
      <tabBarItem path='/text3' activeColor="green">
        <img src="./assets/img/c.png" alt="c" slot="icon">
        <div slot="alias">test3</div>
      </tabBarItem>
      <tabBarItem path='/text4' activeColor="orange">
        <img src="./assets/img/d.png" alt="d" slot="icon">
        <div slot="alias">test4</div>
      </tabBarItem>
    </tabBar>
  </div>
</template>

<script>
import tabBar from '@/pages/tabBar'
import tabBarItem from '@/pages/item'


export default {
  name: 'App',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>

<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
import tabBarItem from '@/pages/item'

export default {
  name:'tabBar',
  components:{
    tabBarItem,
  }

}
</script>

<style>
.tabBar{
  background: #f1f1f1;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 10px rgba(119, 136, 153, .3);
}
</style>
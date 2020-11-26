<template>
  <div class="item">
    <div :style="isStyle" :class="{active:isActive}" @click='itemClick'>
      <slot name="icon"></slot>
      <slot name="alias"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'item',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path == this.path
    },
    isStyle(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style>
.item{
  flex:1;
  text-align: center;
  height: 49px;
  padding-top: 4px;
}
.item img{
  width: 25px;
}
.active{
  text-shadow: 2px 2px 10px rgba(119, 136, 153, .8);
  font-weight: bold;
  font-size: large;
}
</style>
<template>
    <div>
        <h1>this is mall huhdu page</h1>
        <Loading :show="show" :text="text"></Loading>
    </div>
</template>

<script>
    import {Loading} from 'vux';
    export default {
        components: {
            Loading
        },
        data() {
          return {
              show: true,
              text: '厉害了'
          }
        },
        mounted() {

        }
    }
</script>

<style>

</style>
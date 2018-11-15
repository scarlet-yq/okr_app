<template>
    <div>
        this is mine page
        <h1>haha{{userInfo.code}}</h1>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        mounted() {
            /*console.log("state", this.$store.state);
            console.log("mapetters", this.$store.state.user.userInfo);*/
        },
        computed:  {
            ...mapGetters({
                userInfo: 'userInfo'
            })
        }
    }
</script>

<style>

</style>
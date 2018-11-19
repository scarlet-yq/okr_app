<template>
    <div>
        this is mine page
        <h1>haha{{userInfo.name}}</h1>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../../store/types';
    export default {
        mounted() {
            this.$store.dispatch(types.DO_GET_USER_INFO)
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
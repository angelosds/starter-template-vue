<template>
    <div>
        <MainHeader />
        <router-view></router-view>
        <MainFooter />
    </div>
</template>

<script lang="babel">
    import MainHeader from './parts/header/header';
    import MainFooter from './parts/footer/footer';

    export default {
        components: {
            MainHeader,
            MainFooter,
        },
        name: 'app',
    };
</script>

<style lang="stylus" src="./stylus/style.styl"></style>

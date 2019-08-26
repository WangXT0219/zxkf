<template>
    <div id="goTop">
        <div class="toTop" v-if="goTopShow" @click="goTop">
            <p>回顶部</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "goTop",
    data() {
        return {
            scrollTop: "",
            goTopShow: false
        };
    },
    watch: {
        scrollTop(val) {
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            } else {
                this.goTopShow = false;
            }
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            }
        },
        goTop() {
            let timer = null,
                _that = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
                if (_that.scrollTop > 0) {
                    _that.scrollTop -= 50;
                    document.body.scrollTop = document.documentElement.scrollTop =
                        _that.scrollTop;
                    timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(timer);
                    _that.goTopShow = false;
                }
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>
 
<style scoped>
.toTop{
    position: fixed;
    width: .9rem;
    height: .9rem;
    background-image: url(../../../public/zhengzu/toTop.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    font-size: .2rem;
    color: #fff;
    bottom: 1.28rem;
    right: .3rem;
    animation: .7s opacity2 0s;
    -webkit-animation: .7s opacity2 0s;
}
.toTop>p{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    text-align: center;
}
</style>

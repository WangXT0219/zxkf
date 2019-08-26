<template>
  <div id="c-slider">
    <div id="test1">
      <div class="slider">
        <div class="ruler" id="ruler" ref="ruler">
          <div class="date clearfix">
            <div v-if="(startStep==0)&&(endStep==51)">不限</div>
            <div class="fl" v-else-if="(startStep!=0)&&(endStep==51)">{{startStep*100}}以上</div>
            <div class="fl" v-else-if="true">{{startStep*100}}-{{endStep*100}}</div>
            
          </div>
          <div ref="bar" class="bar startbar" @touchstart="startTouchstart" @touchmove="startTouchmove"></div>
          <div ref="endbar" class="bar endbar" @touchstart="endTouchstart" @touchmove="endTouchmove"></div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-c-slicer',
  data () {
    return {
      $ruler: '', // 滑竿
      $bar: '', // 左侧滑块
      $endbar: '', // 右侧滑块
      startX: '', // 左侧滑块位置
      endX: '', // 右侧滑块位置
      step: '', // 滑竿在限定范围内可以分多少步
      intervalStart: 0, 
      intervalEnd: 51,
      startStep: 0,
      endStep: 51,
      amountW: '' //  滑竿多长距离
    }
  },
  created() {
    const vm = this;
    vm.$nextTick(() => {
      vm.initSlider();
    })
  },
  updated() {
    if(this.startStep!=0||this.endStep!=51){
      this.$emit('update:sliderConfirm',true)
    }
    if(this.startStep==0&&this.endStep==51){
      this.$emit('update:sliderConfirm',false)
    }
  },
  props:["sliderConfirm"],
  methods: {
    initSlider(){
      const vm = this;
      vm.$ruler = this.$refs.ruler;
      vm.$bar = this.$refs.bar;
      vm.$endbar = this.$refs.endbar;
      vm.amountW = vm.$ruler.clientWidth - vm.$bar.clientWidth; // 滑竿多长距离
      // console.log(vm.amountW*100)
      // console.log(vm.intervalEnd)
      // console.log(vm.intervalStart)
      vm.step = (vm.amountW / (vm.intervalEnd - vm.intervalStart)); // 总共多少步
      // console.log(vm.step);
    },
    startTouchstart(e) {
      const vm = this;
      vm.startX = e.touches[0].pageX; // 开始滑动时滑块的位置
    },
    startTouchmove(e) {
      const vm = this;
      let slidedis = e.touches[0].pageX - vm.$ruler.offsetLeft; // 滑动距离=当前滑块x距离-最开始滑块距离
      if (slidedis < 0 || slidedis > vm.amountW) {
        return;
      }
      let ste = Math.round(slidedis / vm.step);
      if ((ste + vm.intervalStart) >= vm.endStep) {
        return;
      }
      vm.startStep = ste + vm.intervalStart;
      vm.$bar.style.left = (ste * vm.step) + 'px';
      console.log(vm.startStep);
    },
    endTouchstart(e) {
      const vm = this;
      vm.endX = e.touches[0].pageX; //开始滑动时滑块的位置
    },
    endTouchmove(e) {
      const vm = this;
      let slidedis = e.touches[0].pageX - vm.$ruler.offsetLeft; //滑动距离=当前滑块x距离-最开始滑块距离
      if (slidedis < 0 || slidedis > vm.amountW) {
        return;
      }
      let ste = Math.round(slidedis / vm.step);
      if (vm.startStep >= (ste + vm.intervalStart)) {
        return;
      }
      vm.endStep = ste + vm.intervalStart;
      if(vm.endStep==24){
        vm.$endbar.style.left = ''
        vm.$endbar.style.right = '0px'
      }else{
        vm.$endbar.style.left = (ste * vm.step) + 'px'
      }
    }
  }
}
</script>

<style scoped>
	#c-slider .clearfix:after {
	content: "";
	display: block;
	clear: both;
	}
	#c-slider .slider {
	margin: auto;
	width: 80%;
  padding-bottom:.34rem;
	}
	#c-slider .slider .date {
	color: #ee3943;
	font-size: 0.3rem;
	margin-top: 1rem;
  display: flex;
  position:absolute;
  left:.3rem;
  top:-1.7rem;
	}
	/* #c-slider .slider .date .fl {
	float: left;
	}
	#c-slider .slider .date .fr {
	float: left;
	} */
	#c-slider .slider .ruler {
	background:#ee3943;
	height: .08rem;
	position: relative;
	margin-top: 1rem;
	}
	#c-slider .slider .ruler .bar {
	position: absolute;
	top: -0.3rem;
	height: .6rem;
	width: .6rem;
	border-radius: 100%;
	background: #fff;
	font-size: 0.3rem;
	line-height: 0.65rem;
	text-align: center;
	box-shadow: 1px 1px 2px 1px #999;
	}
	#c-slider .slider .ruler .startbar {
	left: 0;
	}
	#c-slider .slider .ruler .endbar {
	right: 0;
	}
</style>
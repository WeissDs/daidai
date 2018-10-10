#VUE中导入vue-awesome-swiper

##下载swiper.js
    npm install vue-awesome-swiper --save
    
##2.在main.js中全局引入swiper.js
    import VueAwesomeSwiper from 'vue-awesome-swiper' 
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper)
    
##3.在模板中配置相关内容
    
    <template>
    
    　　<swiper :options="swiperOption">
    　　　　<swiper-slide v-for="item in imglist">
    　　　　　　<img :src="rootLink+ '/resources/img/' + item.imgPath"/>
    　　　　</swiper-slide>
    　　　　<div class="swiper-pagination" slot="pagination"></div>
    　　</swiper>
    
    </template>
    
    <script>
    
    import axios from 'axios'
    export default {
    　　name: 'carrousel',
    　　data() {
    　　　　return {
    　　　　　　rootLink: 'http://119.23.28.239:8080',
    　　　　　　imglist:[],
    　　　　　　swiperOption: {
    　　　　　　　　autoplay: 3000,  //l轮播间隔时间
    　　　　　　　　loop: true,　　//是否自动轮播
    　　　　　　　　pagination : '.swiper-pagination', //轮播图中下标点显示
    　　　　　　　　paginationClickable :true　　 //轮播图中下标点显示
    　　　　　　}
    　　　　　}
    　　},
    　　mounted() {
    　　　　var vm = this;
    　　　　axios.get(vm.rootLink + '/train/homePage/banner?type=上面')
    　　　　.then(function (data) {
    　　　　　　vm.imglist = data.data.data
    　　　　})
    　　}
    }
    </script>
    
    
    
##同事案例

    <template>
            <div class="album">
                <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img :src="imgUrl0" ></swiper-slide>
                <swiper-slide><img :src="imgUrl1" ></swiper-slide>
                <swiper-slide><img :src="imgUrl2" ></swiper-slide>
                <swiper-slide><img :src="imgUrl3" ></swiper-slide>
                <swiper-slide><img :src="imgUrl4" ></swiper-slide>
                <swiper-slide><img :src="imgUrl5" ></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
                </swiper>  
            </div>
    </template>
    <script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import $ from 'jquery';
    export default {
        name: 'conpondetails',
        data() {
            return {
                // 轮播图相关配置
                swiperOption: {
            // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
                    autoplay: true,
            // direction : 'vertical', //设置为横向轮播还是纵向轮播
                    effect: 'effect', // 设置图片切换时的样式
                    grabCursor: false, // 设置鼠标移到图片上会不会成为手抓形状
                    setWrapperSize: true, // 设置布局 自动补齐高度
                    autoHeight: true, // 自动高度
            // paginationType:"bullets",
                    pagination: {
                        el: '.swiper-pagination',  // 设置滚动样式  下面的小点点
                        clickable: true // 点击小点点会转到相应的图片
                    },
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
            // scrollbar:'.swiper-scrollbar',
                    observeParents: true
                },
                ok: true,
                imgUrl1: '',  // 店铺商品展示轮播图
                imgUrl2: '',  // 店铺商品展示轮播图
                imgUrl3: '',  // 店铺商品展示轮播图
                imgUrl4: '',  // 店铺商品展示轮播图
                imgUrl5: '',  // 店铺商品展示轮播图
                imgUrl0: '',  // 店铺商品展示轮播图
                albumImg: '本店暂无图片',
                shopAllInfo: {
                    shopName: '', // 店铺名称
                    startUsingTime: '', // 优惠券开始使用时间
                    expireTime: '', // 优惠券失效时间
                    city: '', // 所在城市
                    street: '', // 所在街区具体地点
                    tel: '', // 联系电话
                    mobileNbr: '', // 手机
                    logoUrl: '', // 店铺图标
                    couponType: '', // 优惠券类型 0-N元购 1-抵扣券 2-折扣券 3-实物券 6-体验券
                    type: '', // 商店类型 1-美食；2-咖啡；3-健身；4-娱乐；5-服装；6-其他；
                    status: '', // 用户优惠券状态 1-可使用；2-已使用；4-已过期； 5-待使用；
                    // shopOpeningTime: '', // 商店开门时间
                    // shopClosedTime: '', // 商店关门时间
                    discountPercent: '10', // 打折数额
                    insteadPrice: '0', // 抵用金额
                    availablePrice: '0', // 达到多少金额可用
                    batchCouponCode: '', // 优惠券按编码
                    batchNbr: '' // 优惠券批次号
    
                }
            };
        },
    
        methods: {
            goBack () {
                this.$router.go(-1);
            //     window.history.length > 1
            // ? this.$route.;go(-1)
            // : this.$router.push('/');
            },
            getCoupon () {
                // alert('成功领取优惠券');
                console.log(this.$data.shopDecoration[0].imgUrl);
                console.log(this.$data.albumImg);
            }
        },
        created() {
            let that = this;
            // 获取用户装饰信息
            // $.ajax({
            //     url: 'http://hfq.huift.com.cn/Api/Client',
            //     type: 'POST',
            //     data: '{"id":19,"jsonrpc":"2.0","method":"getUserCouponInfo","params":{"userCouponCode":"9ea33c37-77cc-2de9-c0b0-68d0ef31a219"}}',
            //     contentType: 'application/json',
            //     dataType: 'json',
            //     success: function(data) {
            //         that.$data.shopDecoList = data.result.shopDecoList;
            //         that.$data.albumImg = '<img src="' + 'http://hfq.huift.com.cn' + that.$data.shopDecoList[0].imgUrl + '" alt="">';
            //         console.log('商户装饰信息');
            //         console.log(that.$data.shopDecoList);
            //     }
            // });
            // 获取优惠券详情
            $.ajax({
                url: 'http://hfq.huift.com.cn/Api/Client',
                type: 'POST',
                data: '{"id":19,"jsonrpc":"2.0","method":"getUserCouponInfo","params":{"userCouponCode":"9ea33c37-77cc-2de9-c0b0-68d0ef31a219"}}',
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    that.$data.shopDecoration = data.result.shopDecoration;
                    that.$data.shopAllInfo = data.result;
                    console.log(that.$data.shopDecoration);
    
                    // that.$data.albumImg = '<img src="' + 'http://hfq.huift.com.cn' + that.$data.shopDecoration[0].imgUrl + '" alt="">';
                    that.$data.imgUrl0 = 'http://hfq.huift.com.cn' + that.$data.shopDecoration[0].imgUrl;
                    that.$data.imgUrl1 = 'http://hfq.huift.com.cn' + that.$data.shopDecoration[1].imgUrl;
                    that.$data.imgUrl2 = 'http://hfq.huift.com.cn' + that.$data.shopDecoration[2].imgUrl;
                    that.$data.imgUrl3 = 'http://hfq.huift.com.cn' + that.$data.shopDecoration[3].imgUrl;
                    that.$data.imgUrl4 = 'http://hfq.huift.com.cn' + that.$data.shopDecoration[4].imgUrl;
                    that.$data.imgUrl5 = 'http://hfq.huift.com.cn' + that.$data.shopDecoration[5].imgUrl;
                    // console.log(that.$data.shopAllInfo);
                }
            });
        },
        components: {
            swiper,
            swiperSlide
        }
    };
    </script>
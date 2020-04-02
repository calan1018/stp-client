<template>
    <div class="Footer" style="text-align: center; background-color: black;">
        <!-- <div>
            사용자 약관 | 이용정책 | 
            <div @click="fn_privacy">개인정보처리방침</div> | 
            회사소개 | 연계서비스
        </div> -->

<div id="copyright" class="container">
	<p>&copy; 사용자 약관 | 이용정책 | 
            개인정보처리방침 | 
            회사소개 | 연계서비스 </p>
</div>

        <!-- <div v-show="is_privavy" style="position: absolute; top:100px; left:200px; background-color: #FFFFFF; width:800px; height:600px; overflow: auto;">
           <PrivavyPopup />
           <button @click="fn_privacy">닫기</button>
        </div> -->
    </div>
</template>

<script>

// import PrivavyPopup from "@/components/template/PrivavyPopup.vue";

// export default {
//     name: "Footer",
//     components: {PrivavyPopup},
//     data: function(){
//         return {
//             is_privavy: false
//         }
//     },
//     methods: {
//         fn_privacy() {
//             this.is_privavy = !this.is_privavy;
//         }
//     }
// }
</script>
<template>
    <div class="container" style="padding-top : 20px;" >
        <div class="row" style="margin-top:50px;">
        <!-- 내 이력 -->
        <div class="col-md-3">
          <div class="row" style="margin-top:50px;">
            <div class="col-lg-12 col-sm-6 col-12 main-section text-center">
              <div class="row">
                <div class="col-lg-12 col-sm-12 col-12 profile-header"></div>
              </div>
              <div class="row user-detail">
                <div class="col-lg-12 col-sm-12 col-12">
                  <img src="../../html/images/demo1.png" class="rounded-circle img-thumbnail" />
                                  
                  <h5 style="margin-top: 10px;">
                    {{userName ? userName + ' 님' : '홍길동 님' }} 
                  </h5>                                
                  <span>{{userEmail ? '('+userEmail+')' : 'test@google.com' }}</span>
                  <br />
                  <span>{{userPhone ? userPhone : '010-0000-0000' }}</span>
                  
                  <hr />
                  <!-- <span>P2P 투자 : {{fluctuationP2pInvest}}</span>
                  <br />
                  <span>P2P 상환 : {{fluctuationP2pRepay}}</span>
                  <br />
                  <span>S-Point : {{fluctuationSpoint}}</span> -->

                </div>
              </div>
              <div class="row user-social-detail">
                <div class="col-lg-12 col-sm-12 col-12">
                  <a href="#" style="color:white; font-size: 15px;">내 정보 수정</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 차트 -->
        <div class="col-md-4" style="vertical-align:middle;">
          <PieChart />
          <!-- <ChartTable /> -->
        </div>
        <!-- 오른족 테이블 -->
        <div class="col-md">
          <div class="row">
            <div style="text-align : center;">
              <span>
                <span style="color:red;">{{userName}}</span>
                <span>{{userName ? userName + ' 님' : '홍길동' }} 님의 월렛 내의 자산이 2019년 11월 28일,</span>
                <br />
                <span style="color:red;">대비 118,121원</span> 증가 되었습니다.
              </span>
            </div>
          </div>
          <br />

          <div class="row">
            <table class="rtable" style="width:400px;">
              <thead>
                <tr>
                  <th style="width:10%;">종류</th>
                  <th>예치금액</th>
                  <th>증감액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>P2P 투자금액</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>P2P 투자금액</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>P2P 해외 송금액</td>
                  <td>740 ($)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>S·POINT</td>
                  <td>150,000</td>
                  <td>35,000</td>
                </tr>
                <tr>
                  <td>Total Amount</td>
                  <td>18,500,000 (P)</td>
                  <td>5,000,000 (P)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row">
            <div style="text-align : center;">
              <span>* ※ 당월 고객님의 자산은 다음과 같이 <span style="color:red;">증감</span>하였으며<br>실제 거래량과 차이가 있을 수 있습니다.</span>
            </div>
          </div>
          <br />
        </div>
      </div>
        <!-- 하단 테이블 -->
        <div class="row">
        <button
          type="button"
          class="btn btn-light"
          style="margin-top:5px;"
          data-_but="btn-xs"
        >
          <i class="fa fa-credit-card-alt"></i> 최근 거래 내역
        </button>

        <table class="rtable" style="width:1300px; margin-top:10px;">
          <thead>
            <tr>
              <th style="text-align : center;" >거래일시</th>
              <th style="width:30%; text-align : center;" >적요</th>
              <th style="text-align : center;" >통화</th>
              <th style="text-align : center;" >거래금액</th>
              <th style="text-align : center;" >잔액</th>
              <th style="text-align : center;" >구분</th>
              <th style="text-align : center; ">고유거래번호</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in transactionList" :key="item.guid">
              <td>{{ item.updateDt }}</td>
              <td style="text-align : left;">{{ item.title }}</td>
              <td>{{ item.crrncyCd }}</td>
              <td style="text-align : right;">{{ fn_stringByMoney(item.amount) }}</td>
              <td style="text-align : right;">{{ fn_stringByMoney(item.balance) }}</td>
              <td>{{ item.trnsctnStNm }}</td>
              <td>{{ item.refId }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>   

    
    
</template>

<script>

import PieChart from "./PieChart.vue";
import ChartTable from "./ChartTable.vue";

import { userInfoApi } from "@/api/userInfo";


export default {
    name: "container",
    data: function() {
    return {

      userName: "",
      userEmail: "",
      userPhone: "",
      totalSpoint: "",
      totalRealEstate: "",
      totalMovableProperty: "",
      fluctuationP2pInvest: "",
      fluctuationP2pRepay: "",
      fluctuationSpoint: "",
      emailAdr: "",
      //is_totalinfo: false,
      uuidList: [],
      spointList: [],
      invertList: [],
      transactionList: [],

      uuidList_tbl_off:true

    };
  },  
  created() {      
       this.fn_searchUid();
      // this.fn_test();
  },
  methods: {
    
    async fn_searchUid() {
       
      // this.uid = "01075888862";    
                 
      await userInfoApi("01075888862").then(function(response) {    
        
        console.log(" 이전바식1 : " + response.data.result.list[0].fullname);

        // var test = res;
        // const obj = JSON.parse(test);
        
        // console.log('data : ' + obj);
        // console.log('data : ' + obj.data.result.totBal.amount);

        // var resultList = res.data.result.list;
        // var resultTotBal = res.data.result.totBal;        
        // var resultData = data.result[0];        
        // this.userName = resultData.fullname;
        // this.userEmail = resultData.email;
        // this.userPhone = resultData.phoneNo;        
        // this.uidList = data.result;

        // this.is_totalinfo = true;

      }.bind(this));
    
    },
    fn_test() {
      // alert("click : " + val);      
      // http.get("/app/member/getSeyfertMemberInfoList", {
      //       params: {
      //           email: '',
      //           phoneNo: '01075888862', //"01075888862,01065498765,01044544901" 
      //           limit: '100'
      //       }
      //   })
      //   .then(response => {          
      //     console.log(" 이전바식 : " + response.data.result.list[0].fullname);
      //   })
      //   .catch(error => {
      //     alert("errer : " + error.response.data);          
      //   });
    },
    fn_searchGuid(val) {
      // alert("click : " + val);
      
      http
        .get("/app/member/getSeyfertList", {
          params: {
            dstMemGuid: val //"WTM6vkjEZbdUg64uLkcuuV"
          }
        })
        .then(response => {
          this.transactionList = response.data.result;
          // alert("성공");
          for (let i = 0; i < this.transactionList.length; i++) {
            this.transactionList[i].updateDt = this.transactionList[i].updateDt.replace("T", " ");
          }
          // alert("result~~ : " + this.transactionList[0].trnsctnSt);
          
        })
        .catch(error => {
          alert("errer : " + error.response.data);
          
        });
    },
    fn_stringByMoney(val) {
      let moneyValue = val.toString().replace(/,/g, "");
      while (/(-?[0-9]+)([0-9]{3})/.test(moneyValue)) {
        moneyValue = moneyValue.replace(/(-?[0-9]+)([0-9]{3})/, "$1,$2");
      }
      return moneyValue;
    },
    IsJsonString(str) {
      try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
      } catch (e) {
        return false;
      }
    }
  },   
  components: {
    // Top,
    PieChart
    
    // ChartTable
  }
};
</script>


<style scoped>
body{
    background: rgb(14, 103, 182);
    padding-top: 15px;
}
.container{
    width: 1000px;
    text-align: left;

}
.main-section{
	/* border:1px solid #138496; */
	background-color: #fff;
}
.profile-header{
	background-color: #17a2b8;
	height:0px;
}
.user-detail{
	margin:-50px 0px 10px 0px;
}
.user-detail img{
	height:100px;
	width:100px;
}
.user-detail h5{
	margin:10px 0px 5px 0px;
}
.user-social-detail{
	padding:13px 0px;
	background-color: #17a2b8;
}
.user-social-detail a i{
	color:#fff;
	font-size:23px;
	padding: 0px 5px;
}

</style>

<style>
/*!
// CSS only Responsive Tables
// http://dbushell.com/2016/03/04/css-only-responsive-tables/
// by David Bushell
*/
.rtable {
  /*!
  // IE needs inline-block to position scrolling shadows otherwise use:
  // display: block;
  // max-width: min-content;
  */
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  border-collapse: collapse;
  border-spacing: 0;
}

.rtable,
.rtable--flip tbody {
  -webkit-overflow-scrolling: touch;
  background: radial-gradient(left, ellipse, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0 center, radial-gradient(right, ellipse, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
  background-size: 10px 100%, 10px 100%;
  background-attachment: scroll, scroll;
  background-repeat: no-repeat;
}

.rtable td:first-child,
.rtable--flip tbody tr:first-child {
  background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, white), to(rgba(255, 255, 255, 0)));
  background-image: linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 100%);
  background-repeat: no-repeat;
  background-size: 20px 100%;
}

.rtable td:last-child,
.rtable--flip tbody tr:last-child {
  background-image: -webkit-gradient(linear, right top, left top, color-stop(50%, white), to(rgba(255, 255, 255, 0)));
  background-image: linear-gradient(to left, white 50%, rgba(255, 255, 255, 0) 100%);
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 20px 100%;
}

.rtable th {
  font-size: 11px;
  text-align: left;
  text-transform: uppercase;
  background: #f2f0e6;
}

.rtable th,
.rtable td {
  padding: 6px 12px;
  border: 1px solid #d9d7ce;
}

.rtable--flip {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  background: none;
}

.rtable--flip thead {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  min-width: -webkit-min-content;
  min-width: -moz-min-content;
  min-width: min-content;
}

.rtable--flip tbody {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
}

.rtable--flip tr {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: -webkit-min-content;
  min-width: -moz-min-content;
  min-width: min-content;
  -ms-flex-negative: 0;
      flex-shrink: 0;
}

.rtable--flip td,
.rtable--flip th {
  display: block;
}

.rtable--flip td {
  background-image: none !important;
  border-left: 0;
}

.rtable--flip th:not(:last-child),
.rtable--flip td:not(:last-child) {
  border-bottom: 0;
}

/*!
// CodePen house keeping
*/
body {
  margin: 0;
  padding: 25px;
  color: #494b4d;
  font-size: 14px;
  line-height: 20px;
}

h1, h2, h3 {
  margin: 0 0 10px 0;
  color: #1d97bf;
}

h1 {
  font-size: 25px;
  line-height: 30px;
}

h2 {
  font-size: 20px;
  line-height: 25px;
}

h3 {
  font-size: 16px;
  line-height: 20px;
}

table {
  margin-bottom: 30px;
}

a {
  color: #ff6680;
}

code {
  background: #fffbcc;
  font-size: 12px;
}

    
</style>
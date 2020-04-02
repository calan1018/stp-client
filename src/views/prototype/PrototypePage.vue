<template>
  <div class="container" style="padding-top : 20px;">

  <div v-if="spinner === '0'" >
    <spinner />
  </div>


    <div style="margin-top : 20px; ">
      <ul>
        <li>
          <div class="row" style="margin-left : 0px;">
            <h1 class="display-4 text-primary text-xs-center p-b-1 m-b-1">회원 거래 정보 검색</h1>
          </div>

          <b-input-group class="mt-3" style="width:30%;">
            <b-form-input placeholder="이메일, UID, 전화번호 입력" v-model="uid" ></b-form-input>
            <b-input-group-append>
              <b-button variant="primary" @click="fn_searchUid" id="uidSendButton">{{"검색"}}</b-button>
            </b-input-group-append>
          </b-input-group>
        </li>
      </ul>
    </div>

    <div v-show="isbody" >    

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
          <!-- 하단 테이블 -->
      <div class="row">
        <div class="container" style="padding-top : 20px;">
          <div class="row">
            <button
              type="button"
              class="btn btn-light"
              style="margin-top:5px;"
              data-_but="btn-xs"
            >
              <i class="fa fa-credit-card-alt"></i> 계정보기
            </button>
            <table class="rtable" style="width:1200px; margin-top:10px;">
              <thead>
                <tr>
                  <th style="text-align : center;">통합계정명</th>
                  <th style="width:10%; text-align : center;" >입금전용계좌</th>
                  <th style="text-align : center;" >출금전용계좌</th>
                  <th style="text-align : center;" >신규발급일</th>
                  <th style="text-align : center;" > 최종거래일</th>
                  <th style="text-align : center;" >잔액(원)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td v-on:click="fn_searchGuid('WTM6vkjEZbdUg64uLkcuuV')">
                    WTM6vkjEZbdUg64uLkcuuV
                  </td>
                  <td>전북은행 - JB204951F147Z</td>
                  <td>하나은행 - 204-910-124785</td>
                  <td>2019-10-23 10:45:53</td>
                  <td>2019-10-23 10:45:53</td>
                  <td>118,121</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row">
            <button
              type="button"
              class="btn btn-light"
              style="margin-top:5px;"
              data-_but="btn-xs"
            >
              <i class="fa fa-credit-card-alt"></i> 과거 계정(UID) 보기
            </button>

            <table class="rtable" style="width:1200px; margin-top:10px;">
              <thead>
                <tr>
                  <th style="text-align : center;">통합계정명</th>
                  <th style="text-align : center;">플랫폼명</th>
                  <th style="width:10%; text-align : center;">이름</th>
                  <th style="text-align : center;">출금전용계좌</th>
                  <th style="text-align : center;">최종거래일</th>
                  <th style="text-align : center;">잔액(원)</th>
                </tr>
              </thead>
              <tbody>
                <!--  <tr>
                  <td>Ui1bdQby7HMpCUJJyVYeFS</td>
                  <td>칵테일펀드</td>
                  <td>SC제일은행 | 69416000688993</td>
                  <td>하나은행 | 204-910-124785</td>
                  <td>2019-09-10 12:12:47</td>
                  <td>118,121</td>
                </tr>-->
                <tr v-for="item in uidList" :key="item.guid">
                  <td v-on:click="fn_searchGuid(item.guid)">{{ item.guid }}</td>
                  <td>{{ item.merchantFullname }}</td>
                  <td>{{ item.fullname }}</td>
                  <!-- <td>{{ item.vaBnkNm ? item.vaBnkNm +' -' : '' }} {{ item.virtualAccntNo }}</td> -->
                  <td>{{ item.bnkNm ? item.bnkNm + ' -' : '' }} {{ item.accntNo }}</td>
                  <td>{{ item.balanceUpdateDt }}</td>
                  <td style="text-align : right;">{{ fn_stringByMoney(item.moneyPair.amount) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

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

  </div>
</template>

<script>
import PieChart from "../myInfo/PieChart.vue";
import ChartTable from "../myInfo/ChartTable.vue";
import http from "@/api/http";

import spinner from "../../components/Spinner.vue";


export default {
  name: "container",
  data: function() {
    return {

      //로딩바
      spinner: "1",     

      userName: "",
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
   
  },
  methods: {
    
    fn_searchUid() {
           
      if(this.uid == ""){
        this.uid = "pdw21@naver.com";
      }
      
      this.spinner = "0";
      
      http.get("/app/member/getSeyfertMemberInfoList", {
        params: {
            email: '',
            phoneNo: this.uid, //"01075888862,01065498765,01044544901" 
            limit: '100'
          }
      })
      .then(response => {             

        var resultData = response.data.result[0];
        
        this.userName = resultData.fullname;
        this.userEmail = resultData.email;
        this.userPhone = resultData.phoneNo;        
        this.uidList = response.data.result;         

        this.isbody = true;
        this.spinner = "1";
      })      
      .catch(error => {        
        this.spinner = "1";
        alert("errer : " + error.response.data);
      });
      //this.is_totalinfo = true;
    },
    fn_searchGuid(val) {
      // alert("click : " + val);
      this.spinner = "0";
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
          this.spinner = "1";
        })
        .catch(error => {
          alert("errer : " + error.response.data);
          this.spinner = "1";
        });
    },
    fn_stringByMoney(val) {
      let moneyValue = val.toString().replace(/,/g, "");
      while (/(-?[0-9]+)([0-9]{3})/.test(moneyValue)) {
        moneyValue = moneyValue.replace(/(-?[0-9]+)([0-9]{3})/, "$1,$2");
      }
      return moneyValue;
    }
  },
  components: {
    // Top,
    PieChart,
    spinner
    // ChartTable
  }
};
</script>

<style scoped>
h1 {
  border-bottom: 4px solid #0275d8;
  font-size: 30px;
  margin-bottom: 5px;
}
</style>
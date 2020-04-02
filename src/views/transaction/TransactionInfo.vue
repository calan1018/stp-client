<template>
  <div class="container" style="padding-top : 20px;">
    <div class="row">
      <h1 class="display-4 text-primary text-xs-center p-b-1 m-b-1">
        거래 내역
      </h1>
    </div>

    <!-- <div class="s007">
      <form>
        <div class="inner-form">
                           
          <div class="advance-search">            
            <div class="row">
              <div class="col-md-2">
                <ul>
                    <li>조회기간</li>
                    <li>조회내용</li>
                    <li>적요검색</li>
                    <li>정렬방식</li>                    
                </ul>
              </div>
              <div class="col-md">
                  2
              </div>
            </div>
            <div class="row third">
              <div class="input-field">
                <button class="btn-search">Search</button>
                <button class="btn-delete" id="delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div> -->

    <div class="row">
      <button
        type="button"
        class="btn btn-light"
        style="margin-top:5px;"
        data_but="btn-xs"
      >
        <i class="fa fa-credit-card-alt"></i> 계정보기
      </button>
      <table class="rtable" style="width:1200px; margin-top:10px;">
        <thead>
          <tr>
            <th>통합계정명</th>
            <th style="width:10%;">입금전용계좌</th>
            <th>출금전용계좌</th>
            <th>신규발급일</th>
            <th>최종거래일</th>
            <th>잔액(원)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DAZC1547C8972</td>
            <td>전북은행 | JB204951F147Z</td>
            <td>하나은행 | 204-910-124785</td>
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
        data_but="btn-xs"
      >
        <i class="fa fa-credit-card-alt"></i> 과거 계정(UID) 보기
      </button>

      <table class="rtable" style="width:1200px; margin-top:10px;">
        <thead>
          <tr>
            <th>통합계정명</th>
            <th>플랫폼명</th>
            <th style="width:10%;">입금전용계좌</th>
            <th>출금전용계좌</th>
            <th>최종거래일</th>
            <th>잔액(원)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ui1bdQby7HMpCUJJyVYeFS</td>
            <td>칵테일펀드</td>
            <td>SC제일은행 | 69416000688993</td>
            <td>하나은행 | 204-910-124785</td>
            <td>2019-09-10 12:12:47</td>
            <td>118,121</td>
          </tr>
          <tr>
            <td>Ui1bdQby7HMpCUJJyVYeFS</td>
            <td>칵테일펀드</td>
            <td>SC제일은행 | 69416000688993</td>
            <td>하나은행 | 204-910-124785</td>
            <td>2019-09-10 12:12:47</td>
            <td>118,121</td>
          </tr>
          <tr>
            <td>Ui1bdQby7HMpCUJJyVYeFS</td>
            <td>칵테일펀드</td>
            <td>SC제일은행 | 69416000688993</td>
            <td>하나은행 | 204-910-124785</td>
            <td>2019-09-10 12:12:47</td>
            <td>118,121</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
h1 {
  border-bottom: 4px solid #0275d8;
  font-size: 30px;
  margin-bottom: 5px;
}
</style>

<style src="../../html/search/css/main.css"></style>

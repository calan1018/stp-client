<template>
    <div class="container" style="padding-top : 20px;" >
        <div class="row">
            <h1 class="display-4 text-primary text-xs-center p-b-1 m-b-1">통합 계정 정보</h1>                        
        </div>
        <div class="jumbotron" style="margin-top : 10px; text-align : left; padding : 10px;">
			고객님은 데일링펀딩 을 포함해 총 6 개 의 P2P금융플랫폼 이용하고 계십니다.<br>
            데일리펀드 / 칵테일펀드 / 프로핏펀딩 / 크레딧펀드 / 비에프펀딩 / 주머니펀드 <br>
            <br>
            최근 6개월 이내에 이용자 비밀번호 변경기록이 없습니다.
            <br>
            최종 비밀번호 등록(변경)일 : 2019-10-23
            <br>
            안전한 인터넷 뱅킹 사용을 위하여 정기적으로 이용자 비밀번호를 변경해 주시기 바랍니다.
		</div>

        <div class="row">
            <button type="button" class="btn btn-light" style="margin-top:5px;" data_but="btn-xs"><i class='fa fa-credit-card-alt'></i> 계정보기</button>
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

            <button type="button" class="btn btn-light" style="margin-top:5px;" data_but="btn-xs"><i class='fa fa-credit-card-alt'></i> 과거 계정(UID) 보기</button>

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
# KB IT's Your Life 2기 DOKB(도깨비)

![dokb_2](https://user-images.githubusercontent.com/81637903/200171457-d4805a08-10ef-4196-b69e-a32141b552ad.PNG)

## 개발기간

2022.10.3 - 2022.11.6 (1개월)

<br/>
<br/>

## 추진배경

### 1. 금융 IT플랫폼 환경을 활용 못하는 맹인을 위한 서비스 필요

- 금융 비대면서비스가 확대대고 있지만, 장애인의 이용률은 많이 낮음.

### 2. 장애인들의 개인정보 유출의 위험성 대두

- 일반인을 위한 금융 IT 플랫폼을 장애인이 함께 사용하다보니 금융업무 중 타인에게 도움을 요청하는 과정에서 개인정보 유출 우려

### 3. 디지털점포 등장, 그에따른 맹인의 온라인 접근성 한계

- “AI·스마트 기기는 시각장애인 사용 어려워, 앱보다 ARS 가 더 수월...”
- 접근성 높일 국가적 지원 필요

### 4. 온라인 환경을 사용할 수 없음 무조건 지점방문을 해야함.

<br/>
<br/>

## 기대효과

- 소외된 계층들에게 보다 편리한 서비스를 제공
- 잠재적 고객 확보
- 사회공헌적 활동으로 인한 기업 이미지 향상

<br/>
<br/>

## 기술

- 간단한 회원가입 및 로그인 기술 구현.
- STT, TTS 기술로 음성 입력 및 명령을 통한 페이지 이동 서비스 구현.
- 사진 대조를 통한 간단한 본인인증으로 비대면 계좌 개설 서비스 구현.
- 근처의 KB국민은행 지점 검색 서비스 구현.
- 쉬운 접근성과 쉽게알아 볼 수 있는 화면 UI 구현.

<br/>
<br/>

## FE를 React로 사용한 이유

- 이전에 경험해본적 있는 언어고 다루기 수월할 것이라고 판단됐다.
- 리액트는 대화형 UI를 작성하기에 유리하다. STT, TTS와 같이 데이터가 변경되었을 때 효율적으로 렌더링을 수행할 수 있도록 한다.
- 캡슐화된 컴포넌트가 스스로 상태를 관리하고 복잡한 UI도 효과적으로 구성할 수 있음

<br/>
<br/>

## 아키텍처구조에 따른 기술스택

<img width="1680" alt="" src="https://user-images.githubusercontent.com/81637903/200171317-7398573b-86fc-4d76-8d9c-e53572a791a0.png">

<br/>
<br/>

## 구현 화면

<img width="1680" alt="create" src="https://user-images.githubusercontent.com/81637903/200171484-980acb5d-3513-4997-81e8-3832433ad42c.png">
<img width="1680" alt="find" src="https://user-images.githubusercontent.com/81637903/200171486-86546902-6efe-410d-982b-4e963cf03fec.png">
<img width="1680" alt="login" src="https://user-images.githubusercontent.com/81637903/200171488-9c01e08f-96e7-40cd-bd7b-e879708c9f95.png">
<img width="1680" alt="lookup" src="https://user-images.githubusercontent.com/81637903/200171490-2845f09a-b3c2-422a-99cb-8106382f3446.png">
<img width="1680" alt="main" src="https://user-images.githubusercontent.com/81637903/200171493-6178bfa4-7398-4051-91b2-927dbef15cf4.png">
<img width="1680" alt="predict" src="https://user-images.githubusercontent.com/81637903/200171495-4eb48b94-b4bc-40d5-b342-f9dae7f3d816.png">
<img width="1680" alt="predict_result" src="https://user-images.githubusercontent.com/81637903/200171497-899be4f2-59e9-45a9-83ca-835fae729f3b.png">
<img width="1680" alt="transfer" src="https://user-images.githubusercontent.com/81637903/200171499-2b059a8a-dc20-44a7-b642-f62848a41746.png">

<br/>
<br/>

##

<br/>
<br/>

### back-end github : https://github.com/gkssk4163/DoKB

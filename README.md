# 👉Random-Korean-Pros-Cons-OpenAPI👈

## 만든이유❓

한국어로 만들어진 성격 API가 없기에 직접 만들어본 Serverless API입니다.

---

## 사용방법❓

korean-personality-api.vercel.app/api/personality
위 링크에 get 요청을 하시면 됩니다.

응답 예시

```
"긍정적인"
```

---

korean-personality-api.vercel.app/api/search_personality?value=원하는 성격

요청 및 응답

요청

```
korean-personality-api.vercel.app/api/search_personality?value=긍정적인
```

응답

```
"긍정적인"
```

---

## 앞으로 할일

- ~~배포 링크로 만들기 (현 링크는 임시 배포링크, 기능이 추가되거나 변경되어서 재배포를 하면 링크가 변함)~~

---

## 기여 방법

프로젝트를 포크 후 `/api/_personality_list.ts`에 추가 혹은 수정하고 싶은 것을 수정하시고 PR을 보내주세요.

---

## 실행법

### Local

```bash
git clone https://github.com/blueheart753/korean-pros-cons-api.git
```

Install the Vercel CLI:

```bash
npm i -g vercel
```

Then run the app at the root of the repository:

```bash
vercel dev
```

# 1. 빌드 단계
FROM node:18-alpine
WORKDIR /app
# package.json과 package-lock.json 복사
COPY package*.json ./
RUN npm install
# Next.js 앱 빌드
COPY . .
RUN npm run build
# 포트 설정 (Next.js 기본 포트)
EXPOSE 3000
# 실행
CMD ["npm", "start"]
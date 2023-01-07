FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal

COPY . .

EXPOSE 5000

CMD ["node", "index.js","--db", "'mongodb+srv://Ivanwagu:warugunung@cluster0.ul1fdaa.mongodb.net/?retryWrites=true&w=majority'"]

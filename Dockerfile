FROM node:18-alpine as builder

WORKDIR /app

# Копируем только зависимости
COPY package*.json ./
RUN npm ci --silent

# Копируем исходный код
COPY . .

# Сборка проекта
RUN npm run build

# Финальный образ
FROM nginx:alpine

# Удаляем дефолтные файлы nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем собранные файлы
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (если нужен)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
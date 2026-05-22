FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json .
RUN npm ci

# Copiar codigo y construir
COPY . .
RUN npm run build

# ── PRODUCCION ───────────────────────────────────────
FROM nginx:alpine

# Copiar build al servidor nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuracion nginx para React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

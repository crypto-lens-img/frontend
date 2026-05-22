# Frontend Service

## Responsabilidad
Dashboard web para visualizar datos del mercado crypto en tiempo real.
Conecta con el API Gateway via HTTP REST y WebSocket.
Dark mode por defecto con identidad visual propia.

## Paleta de colores
- Fondo principal:    #0F1117
- Fondo secundario:   #1A1D2E
- Fondo cards:        #252838
- Texto principal:    #FFFFFF
- Texto secundario:   #8B92B2
- Alcista:            #00C076  (verde Binance)
- Bajista:            #FF3B69  (rojo Binance)
- Lateral:            #F0B90B  (amarillo Binance)
- Acento principal:   #6C63FF  (identidad CryptoLens)

## Pantallas
- /login y /register: autenticacion
- /dashboard: vista principal con watchlist, grafica y panel de senal
- /analysis/:symbol: analisis detallado con backtesting
- /chat: asistente LLM con historial
- /alerts: gestion de alertas
- /news: noticias y sentimiento
- /profile: perfil y preferencias

## Componentes reutilizables clave
- PriceCard: precio + variacion + senal
- SignalBadge: badge alcista/bajista/lateral con color
- CandleChart: grafica TradingView configurable
- SentimentGauge: velocimetro de sentimiento y confianza
- NewsCard: titular + fuente + sentiment badge
- AlertForm: formulario de creacion de alerta
- LLMChat: componente de chat reutilizable

## Stack
- React + Vite + Tailwind: base del proyecto
- TradingView Lightweight Charts: graficas financieras profesionales
- Zustand: gestion de estado global
- React Query: peticiones HTTP y cache automatica
- WebSocket nativo: precio en tiempo real y alertas

## Comunicacion con el backend
- Base URL API: https://api.cryptolens.duckdns.org/v1
- WebSocket precio: wss://api.cryptolens.duckdns.org/v1/ws/price/{symbol}
- WebSocket alertas: wss://api.cryptolens.duckdns.org/v1/ws/alerts/{user_id}
- JWT en header Authorization: Bearer {token} en todas las peticiones

## Estructura de carpetas esperada
frontend/
  src/
    components/
      ui/
      charts/
      chat/
    pages/
      Dashboard.jsx
      Analysis.jsx
      Chat.jsx
      Alerts.jsx
      News.jsx
      Profile.jsx
      Login.jsx
      Register.jsx
    store/
      useAuthStore.js
      useCryptoStore.js
    hooks/
      useWebSocket.js
      useMarketData.js
    services/
      api.js
    styles/
      globals.css
  index.html
  vite.config.js
  tailwind.config.js
  package.json
  Dockerfile
  .env.example

## Variables de entorno necesarias
- VITE_API_BASE_URL
- VITE_WS_BASE_URL

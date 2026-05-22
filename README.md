# 💹 Frontend

Dashboard web de CryptoLens. Visualización de datos crypto en tiempo real con gráficas financieras profesionales y asistente de IA integrado.

## Responsabilidad

Interfaz de usuario dark mode que conecta con el API Gateway via REST y WebSocket. Muestra señales del modelo ML, indicadores técnicos, noticias y permite interactuar con el asistente LLM.

## Pantallas

| Ruta | Descripción |
|---|---|
| /dashboard | Vista principal con watchlist, gráfica y señal actual |
| /analysis/:symbol | Análisis detallado con backtesting |
| /chat | Asistente LLM con historial persistente |
| /alerts | Gestión de alertas configurables |
| /news | Feed de noticias con análisis de sentimiento |
| /profile | Perfil y preferencias del usuario |

## Stack

- `React` + `Vite` + `Tailwind` — base del proyecto
- `TradingView Lightweight Charts` — gráficas financieras profesionales
- `Zustand` — gestión de estado global
- `React Query` — peticiones HTTP y caché automática
- `WebSocket nativo` — precio en tiempo real y alertas

## Paleta dark mode

```
Fondo:     #0F1117  #1A1D2E  #252838
Alcista:   #00C076
Bajista:   #FF3B69
Lateral:   #F0B90B
Acento:    #6C63FF
```

## Configuración

```bash
cp .env.example .env
npm install
npm run dev
```

## Parte de CryptoLens

[crypto-lens-img](https://github.com/crypto-lens-img) · [api-gateway](https://github.com/crypto-lens-img/api-gateway) · [ml-engine](https://github.com/crypto-lens-img/ml-engine) · [llm-service](https://github.com/crypto-lens-img/llm-service)

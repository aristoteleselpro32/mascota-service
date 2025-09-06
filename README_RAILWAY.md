# Despliegue en Railway — mascota-service

## 1) Requisitos
- Node.js 18+ (solo local)
- Cuenta en Railway

## 2) Variables de entorno (en Railway → Variables)
Crea estas variables (**no subas tu `.env` real al repo**):
- `SUPABASE_URL`
- `SUPABASE_API_KEY`
- `MONGO_URI`
- (Railway define `PORT` automáticamente)

Puedes usar `.env.example` como referencia local.

## 3) Subir el proyecto
Opción A — **GitHub (recomendado)**
1. Sube esta carpeta a un repositorio de GitHub.
2. En Railway: **New Project → Deploy from GitHub Repo** y conecta tu repo.
3. Railway detectará Node y ejecutará `npm start`.

Opción B — **Dockerfile**
1. Deja el `Dockerfile` que ya viene listo.
2. En Railway: **New Project → Deploy from GitHub Repo** (con Dockerfile) o **Deploy → From Repository** con Docker.
3. Railway construirá la imagen y ejecutará `npm start` dentro del contenedor.

## 4) Health Check
Hay una ruta de salud:
```
GET / → 200 OK
```
y las APIs en:
```
/api/mascotas/*
```

## 5) Notas
- El servidor ahora escucha en `process.env.PORT` (requerido por Railway).
- Asegúrate de configurar el **MongoDB Atlas** y credenciales de **Supabase** como variables en Railway.
- No expongas secretos en el código ni en el repo.

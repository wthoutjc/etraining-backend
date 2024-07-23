# Backend

## Descripción

Este es el backend de la aplicación de gestión de cursos y usuarios. Está construido con NestJS y utiliza Prisma para la interacción con la base de datos MySQL.

## Requisitos

- Node.js 20.x
- Docker
- MySQL

## Instalación

1. Clona el repositorio:

```sh
git clone <URL_DEL_REPOSITORIO>
cd backend
```

2. Instala las dependencias:

```sh
pnpm install
```

3. Configura las variables de entorno creando un archivo .env en la raíz del proyecto y agregando tus valores:

```env
DATABASE_URL=mysql://USER:PASSWORD@localhost:3306/DATABASE
SECRET_KEY=your_jwt_secret
TOKEN_EXPIRATION=
```

4. Ejecuta las migraciones de la base de datos:

```sh
pnpm prisma:deploy
```

```sh
pnpm prisma generate
```

5. Ejecuta las semillas para poblar la base de datos con datos iniciales:

```sh
pnpm prisma db seed
```

## Docker

Puedes construir y ejecutar la aplicación usando Docker.

1. Construye la imagen de Docker:

```sh
docker build -t nestjs-app .
```

2. Ejecuta el contenedor:

```sh
docker run -p 5000:5000 --env-file .env nestjs-app

```

## Uso

La aplicación expone varios endpoints para la gestión de cursos y usuarios. Puedes usar herramientas como Postman o cURL para interactuar con estos endpoints.

- Autenticación

Para autenticarse, envía una solicitud POST a /auth/login con las credenciales:

```sh
curl --location 'http://127.0.0.1:5000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "<tu-primer-user>",
    "password": "cualquier-password"
}'
```

Esto devolverá un token JWT que debe ser usado en las siguientes solicitudes.

Endpoints

- POST /auth/login: Autenticar usuario.
- GET /courses: Obtener la lista de cursos.
- POST /courses: Crear un nuevo curso.
- GET /users: Obtener la lista de usuarios.
- POST /users: Crear un nuevo usuario.

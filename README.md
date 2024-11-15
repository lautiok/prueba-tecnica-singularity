## 📝 Prueba Técnica Singularity

En esta prueba técnica utilicé React para crear un sistema de login y una página de Home. A continuación, detallo el proceso de desarrollo

🔐 Login

- Comencé por el login, siguiendo el diseño proporcionado en Adobe XD.
- Implementé la lógica para capturar los datos del formulario (📧 correo electrónico y 🔑 contraseña).
- Creé un hook personalizado para validar los datos ingresados.
- Utilicé un contexto para gestionar la autenticación, enviando los datos del formulario al servidor a través de la API proporcionada para esta prueba técnica.
- En el contexto, además de realizar la solicitud al servidor, gestioné posibles errores, estados de carga (loading ⏳) y la información del usuario una vez autenticado.

🏠 Página Home

- Desarrollé la estructura de la página, incluyendo las secciones: Header, Location, Blog, Service, About Us y Franchise Login.
- Cada enlace en el nav redirige a la sección correspondiente, utilizando React Router DOM para el enrutamiento.
- Para la sección de Blog, implementé un slider/carrusel con la librería Swiper 📜.

## 🛠️ Instalación

Clonar el repositorio desde GitHub.

```bash
    git clone https://github.com/lautiok/prueba-tecnica-singularity
```

Instalar las dependencias

```bash
    npm install
```

En la raíz del proyecto encontrarás un archivo .env.example. Debes eliminar la extensión .example para que quede solo como .env. En este archivo se encuentra la variable con la URL de la API para el login.

Ejecutar el proyecto con el comando

```bash
    npm run dev
```

El proyecto se abrirá en http://localhost:5173

## 📋 Usabilidad

- Al abrir la página principal (/), se visualizará la sección Home, con el Header en la parte superior. El nav incluye enlaces a cada una de las secciones de la página.

- Para acceder al Login, puedes utilizar el enlace http://localhost:5173/login o hacer clic en Franchise Login en el nav, que redirige a la página de autenticación.

## 🧪 Datos de Prueba

Para probar la aplicación, utiliza el siguiente usuario ficticio:

```bash
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

## ✅ Validaciones

En el frontend, he implementado validaciones básicas:

- 📧 El correo electrónico es obligatorio y debe ser válido.
- 🔑 La contraseña es obligatoria y debe tener más de 6 caracteres.

Aunque en esta prueba las validaciones y la captura de datos del formulario son manuales, podría mejorarse usando librerías como react-hook-form junto con Zod para una gestión más eficiente.

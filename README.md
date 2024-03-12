## Tutorial de chatbot de IA con tecnología WhatsApp ChatGPT 🤖 🤖

**Convierta su número de WhatsApp en un potente chatbot con IA impulsado por ChatGPT en minutos con este tutorial utilizando la [API WaliChat](https://wali.chat).**

[![Abrir en Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/walichat/whatsapp-chatgpt-bot)

Tenga un potente chatbot de IA ejecutándose en minutos en su computadora o servidor y ajústelo fácilmente para cubrir sus propios casos de uso comercial.

Si sigue este tutorial, podrá tener un chatbot de IA similar a ChatGPT completamente funcional ejecutándose en minutos en su computadora o servidor en la nube y que se comporta como un asistente virtual de atención al cliente para un propósito comercial específico.

Puede [personalizar e instruir fácilmente a la IA](#personalización) para ajustar su comportamiento, función, propósito y límites de conocimiento.
Además, el bot de IA reconocerá la conversación en función de los mensajes anteriores que haya tenido con el usuario en WhatsApp, proporcionando respuestas más precisas y específicas del contexto.

El chatbot podrá entender y hablar muchos idiomas y ha sido entrenado para comportarse como un asistente virtual de atención al cliente especializado en determinadas tareas.

También puede aumentar fácilmente el conocimiento específico del dominio sobre su negocio en tiempo real [mediante el uso de acciones de función](/config.js#L38-L80) que permiten que el robot de IA se comunique arbitrariamente con sus funciones de código o API remotas para recuperar y alimentar la IA con información personalizada.

👉 *[Lea el tutorial del blog aquí](https://medium.com/@walichat/build-a-whatsapp-chatgpt-powered-ai-chatbot-for-your-business-595a60eb17da)*

👉 *[Ejecute el programa bot directamente desde su navegador web](https:///pr.new/walichat/whatsapp-chatgpt-bot)* 🤩 💻

> 🤩 🤖 [**WaliChat es una solución completa en la nube API de WhatsApp. ¡Regístrese gratis y comience en minutos!**](https://wali.chat)

<a href="https://wali.chat">
  <img src="https://wali.chat/images/screenshots/main-chat.webp" width="100%" style="box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%) ! importante"/>
</a>

### Contenido

- [Cómo funciona](#como-funciona)
- [Demostración](#demostracion)
- [Funciones](#funciones)
- [Configuración del bot](#comportamiento-del-robot)
- [Requisitos](#requisitos)
- [Estructura del proyecto](#estructura-proyecto)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Personalización](#personalización)
- [Uso](#uso)
- [Preguntas](#preguntas)

### Demostración

![demostración](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*p-noYzcPwiaX4w8wYzJCyQ.jpeg)

### Cómo funciona

1. Inicia un servicio web que se conecta automáticamente a la API de WaliChat y a su número de WhatsApp.
2. Crea un túnel usando Ngrok para poder recibir eventos de Webhook en su computadora (o puede usar una URL de webhook dedicada si ejecuta el programa bot en su servidor en la nube).
3. Registra el webhook endoint automáticamente para recibir mensajes entrantes.
4. Procesa y responde a los mensajes recibidos utilizando un [modelo de IA impulsado por ChatGPT](https://openai.com/chatgpt) entrenado con instrucciones personalizadas.
5. Puedes comenzar a jugar con el bot AI enviando mensajes al número de WhatsApp conectado a WaliChat.

### Características

Este tutorial proporciona una implementación completa de un chatbot de IA con tecnología ChatGPT en Node.js que:

- Proporciona un chatbot con todas las funciones en su número de WhatsApp conectado a [WaliChat](https://wali.chat)
- Responde automáticamente a cualquier mensaje entrante de usuarios arbitrarios
- Puede comprender cualquier texto en lenguaje natural y responder en más de 90 idiomas humanos diferentes
- Permite que cualquier usuario solicite hablar con un humano, en cuyo caso el chat se asignará a un agente y se saldrá del flujo del bot.
- El comportamiento del bot AI se puede ajustar fácilmente en el [archivo de configuración] (config.js)

### Comportamiento del robot

El bot de IA siempre responderá a los mensajes entrantes según los siguientes criterios:

- El chat pertenece a un usuario (los chats grupales siempre se ignoran)
- El chat no está asignado a ningún agente dentro de WaliChat
- El chat no tiene ninguna de las etiquetas de la lista negra (ver config.js)
- El número de usuario del chat no ha sido incluido en la lista negra (ver config.js)
- El chat o contacto no ha sido archivado ni bloqueado
- Si un chat no está asignado a un agente, el bot se hará cargo de él nuevamente y responderá automáticamente a los nuevos mensajes entrantes.

### Requisitos

- [Node.js](https://nodejs.org) >= v16 ([descárgalo aquí](https://nodejs.org/en/download))
- [WhatsApp](https://whatsapp.com) Número personal o comercial
- [Clave API de OpenAI](https://platform.openai.com/account/api-keys) - [Regístrese gratis](https://platform.openai.com/signup)
- [WaliChat](https://wali.chat) Clave API - [Regístrese gratis](https://app.wali.chat/register)
- [Conecte su WhatsApp](https://app.wali.chat/create) Número personal o comercial a WaliChat
- [Regístrese para obtener una cuenta gratuita de Ngrok](https://dashboard.ngrok.com/signup) para crear un túnel de webhook (solo si ejecuta el programa en su computadora local)

### Estructura del proyecto

```
\
  |- bot.js -> el código fuente del bot en un solo archivo
  |- config.js -> archivo de configuración para personalizar las credenciales y el comportamiento del bot
  |- actiones.js -> funciones para realizar acciones a través de la API de WaliChat
  |- server.js -> inicializa el servidor web para procesar eventos de webhook
  |- main.js -> inicializa el servidor bot y crea el túnel webhook (cuando corresponda)
  |- store.js -> el código fuente del bot en un solo archivo
  |- paquete.json -> manifiesto del paquete node.js requerido para instalar dependencias
  |- node_modules -> donde se instalarán las dependencias del proyecto, administradas por npm
```

### Instalación

Si tiene [git](https://git-scm.org) instalado, ejecute el siguiente comando desde la Terminal:

```git
clon de git https://github.com/walichat/whatsapp-chatgpt-bot.git
```

Si no tiene `git`, descargue las fuentes del proyecto [usando este enlace](https://github.com/walichat/whatsapp-chatgpt-bot/download) y descomprímalo.

### Configuración

Abra su terminal favorita y cambie el directorio a la carpeta del proyecto donde se encuentra `package.json`:

```
cd ~/Descargas/whatsapp-chatgpt-bot/
```

Desde esa carpeta, instale las dependencias ejecutando:
```git
instalación npm
```

Con su editor de código preferido, abra el archivo [`config.js`](config.js) y siga los pasos a continuación.

#### Configure su clave API de WaliChat

Ingrese su clave API [WaliChat](https://wali.chat)
([regístrese aquí gratis](https://app.wali.chat/register)) y [obtenga la clave API aquí](https://app.wali.chat/apikeys):

```js
// Requerido. Especifique la clave API de WaliChat que se utilizará
// Puedes obtenerlo aquí: https://app.wali.chat/apikeys
apiKey: env.API_KEY || 'INGRESE LA CLAVE API AQUÍ',
```

#### Configure su clave API de OpenAI

Ingrese su clave API [OpenAI](https://openai.com)
([regístrese aquí gratis](https://platform.openai.com/signup)) y [obtenga la clave API aquí](https://platform.openai.com/account/api-keys):

```js
// Requerido. Especifique la clave API de OpenAI que se utilizará
// Puedes registrarte gratis aquí: https://platform.openai.com/signup
// Obtenga su clave API aquí: https://platform.openai.com/account/api-keys
openaiKey: env.OPENAI_API_KEY || 'INGRESE LA CLAVE API DE OPENAI AQUÍ',
```

#### Configure su token Ngrok (opcional)

Si necesita ejecutar el programa en su computadora local, el programa debe crear un túnel usando [Ngrok](https://ngrok.com) para procesar eventos de webhook para los mensajes entrantes de WhatsApp.

[Regístrese para obtener una cuenta gratuita de Ngrok](https://dashboard.ngrok.com/signup) y [obtenga su token de autenticación como se explica aquí](https://ngrok.com/docs/agent/#authtokens).

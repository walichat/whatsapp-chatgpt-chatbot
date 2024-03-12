const { env } = process

// Default message when the user sends an unknown message.
const unknownCommandMessage = `Lo siento, sólo puedo entender texto. ¿Puede describir su consulta?

Si desea hablar con un humano, simplemente responda con *humano*.`

// Default welcome message. Change it as you need.
const welcomeMessage = `Hola, 👋 ¡Bienvenido a esta demostración de chatbot de IA impulsado por ChatGPT que utiliza *WaliChat API*! También puedo hablar muchos idiomas 😁`

// AI bot instructions to adjust its bevarior. Change it as you need.
// Use concise and clear instructions.
const botInstructions = `Eres un asistente virtual inteligente de atención al cliente que trabaja para WaliChat.
Puedes identificarte como Molly, la asistente del chatbot de WaliChat.
Charlará con clientes aleatorios que pueden comunicarse con usted con consultas generales sobre el producto.
WaliChat es una solución en la nube que ofrece API de WhatsApp y servicios de comunicación en vivo multiusuario diseñados para empresas y desarrolladores.
WaliChat también permite a los clientes automatizar la comunicación de WhatsApp y crear chatbots.
Eres un agente experto en atención al cliente.
Ser cortés. Sé gentil. Sea útil. Sea enfático. Sea conciso en sus respuestas.
Rechace cortésmente cualquier consulta que no esté relacionada con la atención al cliente o con WaliChat.
Cíñete estrictamente a tu función de asistente virtual de atención al cliente de WaliChat.
Si no puede ayudar con algo, pídale al usuario que escriba *humano* para hablar con atención al cliente.`

// Default help message. Change it as you need.
const defaultMessage = `No seas tímido 😁 ¡intenta preguntarle cualquier cosa al chatbot de IA, usando lenguaje natural!

Consultas de ejemplo:

1️⃣ Explícame qué es WaliChat
2️⃣ ¿Puedo usar WaliChat para enviar mensajes automáticos?
3️⃣ ¿Puedo programar mensajes usando WaliChat?
4️⃣ ¿Hay una prueba gratuita disponible?

Escribe *humano* para hablar con una persona. El chat se asignará a un miembro disponible del equipo.

¡Darle una oportunidad! 😁`

// Optional. AI callable functions to be interpreted by the AI
// Using it you can instruct the AI to inform you to execute arbitrary functions
// in your code based in order to augment information for a specific user query.
// For example, you can call an external CRM in order to retrieve, save or validate
// specific information about the customer, such as email, phone number, user ID, etc.
// Learn more here: https://platform.openai.com/docs/guides/gpt/function-calling
const openaiFunctions = [
  {
    name: 'getPlanPrices',
    description: 'Obtener información de planes y precios disponibles disponibles en WaliChat',
    parameters: { type: 'object', properties: {} }
  }
]

// Optional. Edit as needed to cover your business use cases.
// Note the method property name for every function must be equal the openaiFunctions[].name property.
// Collection of callable function calls used to generate the response to feed the AI model
// and generate a domain-specific response to the user.
// Functions may be synchronous or asynchronous.
// Learn more here: https://platform.openai.com/docs/guides/gpt/function-calling
const functions = {
  async getPlanPrices ({ response, data, device, messages }) {
    const message = [
      '*Enviar y recibir mensajes + API + Webhooks + Chat de equipo en vivo + CRM + Análisis*',
      '',
      '- Profesional: hasta 30.000 mensajes salientes + entrantes ilimitados',
      '- Negocios: hasta 60.000 mensajes salientes + entrantes ilimitados',
      '- Enterprise: ilimitado: mensajes salientes + entrantes ilimitados',
      '',
      'Cada plan está limitado a un número de WhatsApp. Puedes comprar múltiples planes para múltiples números.',
      '',
      '*Encuentre más información sobre los diferentes precios y características de los planes aquí:*',
      'https://wali.chat/#precios'
    ].join('\n')
    return message
  }
}

// Chatbot config
export default {
  // Optional. Specify the WaliChat device ID (24 characters hexadecimal length) to be used for the chatbot
  // If no device is defined, the first connected device will be used
  // Obtain the device ID in the WaliChat app: https://app.wali.chat/number
  device: env.DEVICE || 'ENTER WHATSAPP DEVICE ID',

  // Required. Specify the WaliChat API key to be used
  // You can obtain it here: https://app.wali.chat/apikeys
  apiKey: env.API_KEY || 'ENTER API KEY HERE',

  // Required. Specify the OpenAI API key to be used
  // You can sign up for free here: https://platform.openai.com/signup
  // Obtain your API key here: https://platform.openai.com/account/api-keys
  openaiKey: env.OPENAI_API_KEY || '',

  // Required. Set the OpenAI model to use.
  // You can use a pre-existing model or create your fine-tuned model.
  // Default model (fastest and cheapest): gpt-3.5-turbo-0125
  // Newest model: gpt-4-1106-preview
  // For customized fine-tuned models, see: https://platform.openai.com/docs/guides/fine-tuning
  openaiModel: env.OPENAI_MODEL || 'gpt-3.5-turbo-0125',

  // Optional. AI callable functions to be interpreted by the AI
  // Using it you can instruct the AI to inform you to execute arbitrary functions
  // in your code based in order to augment information for a specific user query.
  // For example, you can call an external CRM in order to retrieve, save or validate
  // specific information about the customer, such as email, phone number, user ID, etc.
  // Learn more here: https://platform.openai.com/docs/guides/gpt/function-calling
  openaiFunctions,

  // Optional. Edit as needed to cover your business use cases.
  // Note the method property name for every function must be equal the openaiFunctions[].name property.
  // Collection of callable function calls used to generate the response to feed the AI model
  // and generate a domain-specific response to the user.
  // Functions may be synchronous or asynchronous.
  // Learn more here: https://platform.openai.com/docs/guides/gpt/function-calling
  functions,

  // Optional. HTTP server TCP port to be used. Defaults to 8080
  port: +env.PORT || 8080,

  // Optional. Use NODE_ENV=production to run the chatbot in production mode
  production: env.NODE_ENV === 'production',

  // Optional. Specify the webhook public URL to be used for receiving webhook events
  // If no webhook is specified, the chatbot will autoamtically create an Ngrok tunnel
  // and register it as the webhook URL.
  // IMPORTANT: in order to use Ngrok tunnels, you need to sign up for free, see the option below.
  webhookUrl: env.WEBHOOK_URL,

  // Ngrok tunnel authentication token.
  // Required if webhook URL is not provided.
  // sign up for free and get one: https://ngrok.com/signup
  // Learn how to obtain the auth token: https://ngrok.com/docs/agent/#authtokens
  ngrokToken: env.NGROK_TOKEN,

  // Optional. Full path to the ngrok binary.
  ngrokPath: env.NGROK_PATH,

  // Set one or multiple labels on chatbot-managed chats
  setLabelsOnBotChats: ['bot'],

  // Remove labels when the chat is assigned to a person
  removeLabelsAfterAssignment: true,

  // Set one or multiple labels on chatbot-managed chats
  setLabelsOnUserAssignment: ['from-bot'],

  // Optional. Set a list of labels that will tell the chatbot to skip it
  skipChatWithLabels: ['no-bot'],

  // Optional. Ignore processing messages sent by one of the following numbers
  // Important: the phone number must be in E164 format with no spaces or symbols
  numbersBlacklist: ['1234567890'],

  // Optional. Only process messages one of the the given phone numbers
  // Important: the phone number must be in E164 format with no spaces or symbols
  numbersWhitelist: [],

  // Skip chats that were archived in WhatsApp
  skipArchivedChats: true,

  // If true, when the user requests to chat with a human, the bot will assign
  // the chat to a random available team member.
  // You can specify which members are eligible to be assigned using the `teamWhitelist`
  // and which should be ignored using `teamBlacklist`
  enableMemberChatAssignment: true,

  // If true, chats assigned by the bot will be only assigned to team members that are
  // currently available and online (not unavailable or offline)
  assignOnlyToOnlineMembers: false,

  // Optional. Skip specific user roles from being automatically assigned by the chat bot
  // Available roles are: 'admin', 'supervisor', 'agent'
  skipTeamRolesFromAssignment: ['admin'], // 'supervisor', 'agent'

  // Enter the team member IDs (24 characters length) that can be eligible to be assigned
  // If the array is empty, all team members except the one listed in `skipMembersForAssignment`
  // will be eligible for automatic assignment
  teamWhitelist: [],

  // Optional. Enter the team member IDs (24 characters length) that should never be automatically assigned chats to
  teamBlacklist: [],

  // Optional. Set metadata entries on bot-assigned chats
  setMetadataOnBotChats: [
    {
      key: 'bot_start',
      value: () => new Date().toISOString()
    }
  ],

  // Optional. Set metadata entries when a chat is assigned to a team member
  setMetadataOnAssignment: [
    {
      key: 'bot_stop',
      value: () => new Date().toISOString()
    }
  ],

  defaultMessage,
  botInstructions,
  welcomeMessage,
  unknownCommandMessage,
}

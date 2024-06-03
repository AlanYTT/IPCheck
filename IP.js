
const dnsSync = require('dns-sync');
const readlineSync = require('readline-sync');
const axios = require('axios');

const decorateText = (text, color = '') => {
  const colors = {
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    reset: '\x1b[0m'
  };
  return `${colors[color]}${text}${colors.reset}`;
};

const credits = decorateText('⭐️ Creado por alanYTT ⭐️', '>
const decoration = '~~~~~~~~~~~~';

console.log(decoration);
const domain = readlineSync.question('🔍 Inserta un nombre>

try {
  const ips = dnsSync.resolve(domain);
  console.log(decoration);
  console.log('🌐 Direcciones IP ancladas al dominio', decora>
  console.log(decorateText('IP numérica:', 'cyan'), decora>

  // Hey tu no modifiques nada podria haber errores incluso si modificas mensajes!
  const option = readlineSync.keyInYN('🔎 ¿Quieres ver más>
  if (option) {
    // Obtener información geográfica del servidor utiliza>
    const getIPInfo = async () => {
      const ipInfoResponse = await axios.get(`https://ipap>
      const ipInfo = ipInfoResponse.data;
      console.log('🌍 Ubicación del servidor:', `${ipInfo.>
    };
    getIPInfo();

    // bro no robes código es malo>

  }

} catch (error) {
  console.error('❌ Error al resolver el dominio:', error.>
  console.log(decoration);
}

console.log(credits);
console.log(decorateText('📺 YouTube: @alanYTT', 'red'));
console.log(decoration);

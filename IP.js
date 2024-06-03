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

const credits = decorateText('⭐️ Creado por alanYTT ⭐️', 'red'); // Cambiado el nombre
const decoration = '~~~~~~~~~~~~';

console.log(decoration);
const domain = readlineSync.question('🔍 Inserta un nombre de dominio: ');

try {
  const ips = dnsSync.resolve(domain);
  console.log(decoration);
  console.log('🌐 Direcciones IP ancladas al dominio', decorateText(domain, 'cyan'), ':', decorateText(Array.isArray(ips) ? ips.join(', ') : ips, 'yellow'));
  
  // No modifiques nd o falla 
  console.log(decorateText('IP numérica:', 'cyan'), decorateText(Array.isArray(ips) ? ips[0] : ips, 'yellow'));

  // no bajes re enferma
  const option = readlineSync.keyInYN('🔎 ¿Quieres ver más información sobre este dominio?');
  if (option) {
    // Bro que miras
    const getIPInfo = async () => {
      const ipInfoResponse = await axios.get(`https://ipapi.co/${ips[0]}/json/`);
      const ipInfo = ipInfoResponse.data;
      console.log('🌍 Ubicación del servidor:', `${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country_name} (${ipInfo.latitude}, ${ipInfo.longitude})`);
    };
    getIPInfo();
    
    // bro no mires te enferma
    
  }

} catch (error) {
  console.error('❌ Error al resolver el dominio:', error.message);
  console.log(decoration);
}

console.log(credits);
console.log(decorateText('📺 Canal de YouTube: @alanYTT', 'red')); // Actualizado el canal de YouTube
console.log(decoration);

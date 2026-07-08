import json
import urllib.request
import urllib.error


COUNTRY_TO_LANG = {
    'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'UA': 'ru',
    'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en',
    'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'SG': 'zh',
    'IN': 'hi',
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es', 'VE': 'es',
    'FR': 'fr', 'BE': 'fr', 'CH': 'fr',
    'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'MA': 'ar', 'QA': 'ar', 'KW': 'ar',
    'BD': 'bn',
    'PT': 'pt', 'BR': 'pt',
    'PK': 'ur',
    'ID': 'id',
    'DE': 'de', 'AT': 'de',
    'JP': 'ja',
    'KE': 'sw', 'TZ': 'sw',
    'TR': 'tr',
    'VN': 'vi',
    'KR': 'ko',
}


def handler(event: dict, context) -> dict:
    """Определяет страну и рекомендуемый язык интерфейса по IP-адресу посетителя"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    request_context = event.get('requestContext', {})
    identity = request_context.get('identity', {})
    source_ip = identity.get('sourceIp', '') or event.get('headers', {}).get('X-Forwarded-For', '').split(',')[0].strip()

    country = ''
    lang = 'ru'

    if source_ip and not source_ip.startswith(('127.', '10.', '192.168.')):
        try:
            url = f'http://ip-api.com/json/{source_ip}?fields=countryCode'
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=3) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                country = data.get('countryCode', '')
                if country in COUNTRY_TO_LANG:
                    lang = COUNTRY_TO_LANG[country]
        except Exception:
            pass

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'country': country, 'lang': lang}),
    }

# v2

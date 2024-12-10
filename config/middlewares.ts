export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'",
            'https://cdn.ckeditor.com',
            'cdn.jsdelivr.net',
            'blob:',
            'https:',
          ],
          'frame-src': [
            "'self'",
            'youtube.com',
            'www.youtube.com',
            'vimeo.com',
            '*.vimeo.com',
            'facebook.com',
            'www.facebook.com',
            'https://www.youtube.com',
            'https://www.dailymotion.com',
          ],
          'connect-src': ["'self'", 'https:', 'blob:', '*.strapi.io'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
            'lh3.googleusercontent.com', // google avatars
            'platform-lookaside.fbsbx.com', // facebook avatars
            'dl.airtable.com', // strapi marketplace
            'strapi.io',
            's3.amazonaws.com',
            'cdn.jsdelivr.net',
          ],
          'style-src': ["'self'", "'unsafe-inline'"],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
            'lh3.googleusercontent.com', // google avatars
            'platform-lookaside.fbsbx.com', // facebook avatars
            'dl.airtable.com', // strapi marketplace
          ],
          'font-src': ["'self'"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
]

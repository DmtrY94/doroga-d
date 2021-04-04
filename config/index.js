import ru from '../lang/ru-UA.js'
import ua from '../lang/uk-UA.js'

export const I18N = {
  locales: [
    {
      code: 'ru',
      iso: 'ru-UA',
      name: 'й'
    },
    {
      code: 'ua',
      iso: 'uk-UA',
      name: 'ї'
    }
  ],
  defaultLocale: 'ru',
  vueI18n: {
    fallbackLocale: 'ru',
    messages: { ru, ua }
  }
}
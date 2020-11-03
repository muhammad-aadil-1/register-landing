const config = {
  skrill: {
    SKRILL_PAY_TO_EMAIL: process.env.SKRILL_PAY_TO_EMAIL,
    SKRILL_STATUS_URL: process.env.SKRILL_STATUS_URL,
    SKRILL_CURRENCY: process.env.SKRILL_CURRENCY,
    SKRILL_PAYMENT_METHODS: process.env.SKRILL_PAYMENT_METHODS,
    SKRILL_RECEIPENT_DESCRIPTION: process.env.SKRILL_RECEIPENT_DESCRIPTION,
    SKRIL_LOGO: process.env.SKRIL_LOGO,
    SKRIL_LANGUAGE: process.env.SKRIL_LANGUAGE,
    SKRIL_DETAIL1_DESCRIPTION: process.env.SKRIL_DETAIL1_DESCRIPTION,
    SKRIL_DETAIL1_TEXT: process.env.SKRIL_DETAIL1_TEXT,
  },
  paysafeKeys: {
    sdk : process.env.PAYSAFE_SDK,
    publicApiKey: process.env.PAYSAFE_PUBLIC_API_KEY,
    
  },
  QUBEPAY_CHECKOUT_URL: process.env.QUBEPAY_CHECKOUT_URL,
  CASHU_CHECKOUT_URL: process.env.CASHU_CHECKOUT_URL,
  apiHost: process.env.API_HOST,
  englishLanguage: process.env.ENLIGSH_LANGUAGE || 'en-us',
  arabicLanguage: 'ar-ae',
}
console.log('config ', config.QUBEPAY_CHECKOUT_URL)
export default config

import { config } from '../constants';
const locales = {
  [config.englishLanguage]: {
    titleLabel: "Title",
    title: [
      {key: 1, value: 'Mr.'},
      {key: 2, value: 'Mrs.'},
      {key: 3, value: 'Miss.'},
      {key: 4, value: 'Ms.'},
      {key: 5, value: 'Dr.'},
      {key: 6, value: 'Prof.'}
    ],
    firstName: "First Name",
    lastName: "Last Name",
    home: "Home",
    opening_account: "Opening Account",
    download: "Download",
    proceed: "Proceed",
    full_name: "Full Name",
    email: "Email",
    amount: "Amount",
    account: "Account",
    deposit: "Deposit",
    phone: "Phone",
    country: "Country of Residence",
    btnSignUp: "Register Now",
    success_msg: "Account has been created.",
    error_msg: "Somthing went wrong! Kindly try again.",
    enterLabel: "Enter your ",
    selectCountryLabel: "Select your country of residence",
    isRequired: " is required",
    isNotValid: " is not valid",
    demoAccountTitle: "Create Demo Account",
    tryDemo: 'Try Demo'
  },
  [config.arabicLanguage]: {
    titleLabel: "المسمى",
    title: [
        {key: 1, value: "السيد"},
        {key: 2, value: "مدام"},
        {key: 3, value: "الانسة"},
        {key: 4, value: "السيدة"},
        {key: 5, value: ".د"},
        {key: 6, value: ".أ"}
    ],
    home: "الرئيسية",
    firstName: "الاسم الاول",
    lastName: "الاسم الاخير",
    opening_account: "فتح الحسابات",
    download: "تحميل",
    proceed: "متابعة",
    full_name: "الاسم",
    email: "البريد الالكتروني",
    amount: "المبلغ",
    account: "الحساب",
    deposit: "ايداع",
    phone: "رقم الهاتف",
    country: "دولة الاقامة",
    btnSignUp: "فتح حساب",
    success_msg: "تم انشاء الحساب , الرجاء التحقق من البريد الالكتروني",
    error_msg: "حدث خطأ , الرجاء المحاولة مرة اخرى",
    enterLabel: " ادخل ",
    selectCountryLabel: "اختيار دولة الاقامة",
    isRequired: " يرجى ادخال ",
    isNotValid: " غير صحي ",
    demoAccountTitle: "فتح حساب تجريبي",
    tryDemo: 'جرب العرض'
  },
}

export default function trans(key, language) {
  return locales[language][key] || key
}

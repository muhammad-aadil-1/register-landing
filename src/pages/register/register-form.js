import React, { useState, useRef, useEffect } from 'react';

import {
  Container,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Snackbar,
  CircularProgress
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { Formik } from 'formik';
import * as Yup from 'yup';
//import ReCAPTCHA from "react-google-recaptcha";
import trans from './../../constants/trans';

const registerClient = async (data) => {
  const method = "POST";
  const fullUrl = "https://api.pro.we.01.currentdesk.com:444/registration/lead";
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  let headers = {
    'Content-Type': 'application/json',
    Authorization: "Basic YXBpQGFjY3VpbmRleC5jb206VFJncnk5Q0pvSjoxNjQ="
  };
  
  const options = {
    method,
    headers
  };
  
  const leadData = {
    "lead-title-id": data.title,
    "lead-first-name": data.firstName,
    "lead-last-name": data.lastName,
    "lead-email": data.email,
    "lead-telephone": data.phone,
    "account-demo-status": true,
    "lead-residence-country-id": data.countryResidency + 1,   //country code array index start from 1
    "lead-language-id": 1,
    "account-trading-platform-id": 9,
    "account-category-id": 1,
    "account-currency-id": 5,
    "trading-average-deal-size-id": 6,
    "account-preference-id": 417,
    "trading-experience-id": 7,
    "financial-initial-deposit-id": 289
  };

  options.body = JSON.stringify(leadData);
  
  try {
    const response = await fetch(proxyUrl + fullUrl, options);

    return response;
  } catch (error) {
    return error;
  }
}

const leadClientTitle = (lan) => trans("title", lan);

const phoneRegExp = /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validationSchema = (lan) => {
  const getText = (text) => trans(text, lan) + trans("enterLabel", lan);
  const isRequired = (text) => lan === "en-us" ? trans(text, lan) + trans("isRequired", lan) : trans("isRequired", lan) + trans(text, lan);
  const isNotValid = (text) =>  trans(text, lan) + trans("isNotValid", lan);
  const selectCountryLabel =  trans("selectCountryLabel", lan);

  return Yup.object({
    firstName: Yup.string(getText("firstName"))
      .required(isRequired("firstName")),
    lastName: Yup.string(getText("lastName"))
      .required(isRequired("lastName")),
    countryResidency: Yup.string(selectCountryLabel)
      .required(isRequired('country')),
    phone: Yup.string(getText("phone"))
      .required(isRequired("phone"))
      .matches(phoneRegExp, isNotValid('phone')),
    email: Yup.string(getText("email"))
      .required(isRequired("email"))
      .email(isNotValid('email')),
    declarations: Yup.string('Accept declarations.'),
    //captcha: Yup.bool().oneOf([true], 'Captcha must be checked.')
  });
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Form = (props) => {
  const {
    values: {
      title,
      firstName,
      lastName,
      countryResidency,
      phone,
      email
    },
    errors,
    touched,
    phoneCode,
    infoBar,
    successRes,
    errorBar,
    language,
    handleSubmit,
    handleChange,
    setFieldTouched,
    setFieldValue,
    activeSubmit,
    setCaptcha,
    setPhoneCode,
    countryCallingCode
  } = props;

  const myhandleChange = (e) => {
    setFieldTouched(e.target.name);
    handleChange(e);
  }
  const phoneRef = useRef();

  useEffect(() => {
    const selCountry = countryCallingCode.find(
      (cc) => cc.id === countryResidency
    );
    if (selCountry) {
      setPhoneCode("+" + selCountry.calling_code);
    }
  }, [countryResidency]);

  const handleBlur = (field) => {
    setFieldTouched(field);
  }

  const onChangeCaptcha = (value) => {
    setCaptcha(value ? true:false)
  }
  
  return (
    <Container className={`py-4 ${language === "ar-ae" && "input-rtl"}`}>
      <h4 style={{textAlign: "center", color: "#11467c"}}>{trans("demoAccountTitle", language)}</h4>
      <form onSubmit={handleSubmit}>
      <TextField
          fullWidth
          className="mb-2"
          id="title"
          select
          label={trans("titleLabel", language)}
          name="title"
          onBlur={() => { handleBlur('title') }}
          value={title}
          onChange={handleChange}
          helperText={
            touched.title
              ? errors.title
              : ''
          }
          error={
            touched.title ? Boolean(errors.title) : false
          }
          variant="standard">
          {leadClientTitle(language).map((el, index) => (
            <MenuItem value={el.key} key={index}>
              {el.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="standard"
          className="mb-2"
          name="firstName"
          helperText={touched.firstName ? errors.firstName : ''}
          error={touched.firstName ? Boolean(errors.firstName) : false}
          label={trans("firstName", language)}
          value={firstName}
          onChange={myhandleChange}
          onBlur={() => { handleBlur('firstName') }}
          fullWidth
        />
        <TextField
          variant="standard"
          className="mb-2"
          name="lastName"
          helperText={touched.lastName ? errors.lastName : ''}
          error={touched.lastName ? Boolean(errors.lastName) : false}
          label={trans("lastName", language)}
          value={lastName}
          onChange={handleChange}
          onBlur={handleChange}
          onBlur={() => { handleBlur('lastName') }}
          fullWidth
        />
        <TextField
          fullWidth
          className="mb-2"
          id="country"
          select
          label={trans("country", language)}
          name="countryResidency"
          onBlur={() => { handleBlur('countryResidency') }}
          value={countryResidency}
          onChange={handleChange}
          helperText={
            touched.countryResidency
              ? errors.countryResidency
              : ''
          }
          error={
            touched.countryResidency ? Boolean(errors.countryResidency) : false
          }
          variant="standard">
          {countryCallingCode.map((cc, index) => (
            <MenuItem value={cc.id} key={index}>
              {cc.name}
            </MenuItem>
          ))}
        </TextField>
        <div dir="ltr">
          <TextField
            variant="standard"
            className="mb-2"
            name="phone"
            inputRef={phoneRef}
            onBlur={() => { handleBlur('phone') }}
            helperText={touched.phone ? errors.phone : ''}
            error={touched.phone ? Boolean(errors.phone) : false}
            label={trans("phone", language)}
            fullWidth
            value={phone}
            onChange={handleChange}
            InputProps={{
            startAdornment: <InputAdornment position="start">{phoneCode}</InputAdornment>,
            }}
          />
        </div>
        <TextField
          variant="standard"
          className="mb-4"
          name="email"
          helperText={touched.email ? errors.email : ''}
          error={touched.email ? Boolean(errors.email) : false}
          label={trans("email", language)}
          onBlur={() => { handleBlur('email') }}
          fullWidth
          value={email}
          onChange={handleChange}
        />
        {/* <ReCAPTCHA
          sitekey="Your client site key"
          onChange={(v) => onChangeCaptcha(v)}
        /> */}
        <div className="text-center">
          {errorBar === true && 
            <div style={{color: "red"}}>{trans("error_msg", language)}</div>
          }
          {successRes === true && 
            <div style={{color: "green"}}>{trans("success_msg", language)}</div>
          }

          {activeSubmit ?
            <Button
              type="submit"
              size="large"
              color="primary"
              style={{ background: successRes ? "#e5e5e5":"#11467c", color: "#fff", borderRadius: "10px"}}
              disabled={successRes}
            >
              {trans("btnSignUp", language)}
            </Button> :
            <CircularProgress
              variant="indeterminate"
              size={40}
              thickness={4}
              value={100}
            />
          }
        </div>
      </form>
    </Container>
  );
};

const LivePreviewExample = (props) => {
  const { language, countryList } = props;
  const [activeSubmit, setActiveSubmit] = useState(true)
  const [infoBar, setInfoBar] = useState(false);
  const [successRes, setSuccessRes] = useState(false);
  const [errorBar, setErrorBar] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+971");

  const countryCallingCode = countryList.map((e, index) => {
    const country = e.text ? e.text.split("="):[];

    return {id: index, calling_code: (country[0] ? country[0]:""), name: (country[1] ? country[1]:"") }
  });

  const submit = async (data) => {
    setActiveSubmit(false);

    try {
      const formData = Object.assign({}, data);

      formData.phone = phoneCode + formData.phone;

      const resp = await registerClient(formData);
      
      if (resp.status === 200) {
        setInfoBar(true);
        setSuccessRes(true);
        setActiveSubmit(true);
      } else {
        setErrorBar(true);
        setActiveSubmit(true);
      }
    } catch (error) {
      setErrorBar(true);
      setActiveSubmit(true);
    }
  };

  const handleInfoBarClose = () => {
    setInfoBar(false);
  }

  const handleErrorBarClose = () => {
    setErrorBar(false);
  }

  const values = {
    title: 1,
    firstName: '',
    lastName: '',
    countryResidency: 231,
    phone: '',
    email: '',
    declarations: 'I agree',
    captcha: captcha
  };

  return (
    <>
      <Formik
        validateOnMount={false}
        validateOnChange={false}
        validate={false}
        validateOnBlur={true}
        initialValues={values}
        validationSchema={validationSchema(language)}
        onSubmit={submit}>
        {(props) => <Form 
                      activeSubmit={activeSubmit} 
                      setCaptcha={setCaptcha} 
                      phoneCode={phoneCode}
                      setPhoneCode={setPhoneCode}
                      infoBar={infoBar}
                      errorBar={errorBar}
                      successRes={successRes}
                      language={language}
                      countryCallingCode={countryCallingCode}
                      {...props} 
        />}
      </Formik>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        autoHideDuration={6000}
        open={infoBar}
        onClose={handleInfoBarClose}
      >
        <Alert severity="success">{trans("success_msg", language)}</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        autoHideDuration={6000}
        open={errorBar}
        onClose={handleErrorBarClose}
      >
        <Alert severity="error">{trans("error_msg", language)}</Alert>
      </Snackbar>
    </>
  );
};

export default LivePreviewExample;

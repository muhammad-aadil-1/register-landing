import React from "react"
import Helmet from 'react-helmet';

import signUpBg from "./../../images/sign-up-bg.png"
import { config } from '../../constants'

const getText = (array, split = false) => {
    const obj = array[0] ? array[0] : {text: ""};

    return typeof obj === 'object' ? split ? obj.text.split('<br>') : obj.text : "";
}

const CarouselTop = (props) => {
    const text1 = getText(props.form_bg_content_1, true);
    const text2 = getText(props.form_bg_content_2, true);
    const text3 = getText(props.form_bg_content_3);
    const text4 = getText(props.form_bg_text_bottom);

    const iconText1 = getText(props.icon_text_1, true);
    const iconText2 = getText(props.icon_text_2, true);
    const iconText3 = getText(props.icon_text_3, true);
    const iconText4 = getText(props.icon_text_4, true);

    return (
        <div style={bg}>
            <section className="content-block">
                <div className="container">
                    <div className="row marTop40">
                        <div className="col-md-7">
                            <div style={{marginTop: "100px", width: "100%"}}>
                                <div style={{fontSize: "36px", color: "#fff", fontWeight: "bold"}}>
                                    {text1[0]}
                                    <br/>
                                    {text1[1] && text1[1]}
                                </div>
                            </div>

                            <div className="marTop40" style={{width: "100%"}}>
                                <div style={{color: "#fff"}}>
                                    <h6 style={{color: "#fff"}}>{text2[0]}</h6>
                                    <h6 style={{color: "#fff"}}>{text2[1] && text2[1]}</h6>
                                    <p style={{fontSize: "12px"}}>{text3}</p>
                                </div>

                            </div>

                            <div className="marTop40" style={{width: "100%", color: "#fff", marginBottom: "25px"}}>
                                <p style={{fontSize: "18px"}}>{text4}</p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div style={{display: "block", float: "left", marginLeft: "-10px"}}>
                                            <img src={props.bottom_icon1.url} style={{width: "50px"}}/>
                                        </div>
                                        <div style={{
                                            display: "block",
                                            float: "left",
                                            fontSize: "11px",
                                            paddingTop: "15px"
                                        }}>
                                            {iconText1[0]}
                                            <br/>
                                            {iconText1[1] && iconText1[1]}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div style={{display: "block", float: "left"}}>
                                            <img src={props.bottom_icon2.url} style={{width: "50px"}}/>
                                        </div>
                                        <div style={{
                                            display: "block",
                                            float: "left",
                                            fontSize: "11px",
                                            paddingTop: "15px"
                                        }}>
                                            {iconText2[0]}
                                            <br/>
                                            {iconText2[1] && iconText2[1]}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div style={{
                                            display: "block",
                                            float: "left",
                                            marginLeft: "-20px",
                                            marginRight: "10px"
                                        }}>
                                            <img src={props.bottom_icon3.url} style={{width: "50px"}}/>
                                        </div>
                                        <div style={{
                                            display: "block",
                                            float: "left",
                                            fontSize: "11px",
                                            paddingTop: "15px"
                                        }}>
                                            {iconText3[0]}
                                            <br/>
                                            {iconText3[1] && iconText3[1]}
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div style={{display: "block", float: "left"}}>
                                            <img src={props.bottom_icon4.url} style={{width: "50px"}}/>
                                        </div>
                                        <div style={{
                                            display: "block",
                                            float: "left",
                                            fontSize: "11px",
                                            paddingTop: "15px"
                                        }}>
                                            {iconText4[0]}
                                            <br/>
                                            {iconText4[1] && iconText4[1]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                        <div id="div-register" style={formWrap}></div>
                            <Helmet>
                                <script>
                                   {`
                                     (function (e, x, n, t, i, w, g) {e['ExinitiRegisterWidget'] = i; e[i] = e[i] || function(){(e[i].q=e[i].q||[]).push(arguments) }; e[i].l=1*new Date();w = x.createElement(n), g = x.getElementsByTagName(n)[0];w.async = 1;w.src = t; w.id = e[i].l;g.parentNode.insertBefore(w,g);})(window, document, 'script', 'https://exiniti.blob.core.windows.net/public/rw.js', 'wx');
                                     wx('render', 'div-register', 'RegisterDemo');
                                   `}
                                </script>
                            </Helmet>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CarouselTop

const bg = {
    overflow: "hidden",
    width: "100%",
    backgroundImage: "url(" + signUpBg + ")"
};

const formWrap = {
    position: "relative",
    float: "left",
    borderRadius: "10px",
    width: "100%",
    height: "100%"
};

const form = {
    background: 'none',
    height: "100vh",
}

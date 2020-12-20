import React, {useEffect} from "react"
import Helmet from 'react-helmet';

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

    const lang = (props.language === 'ar-ae') ? 'ar-ae' : 'en-gb';
    
    const bg = {
        overflow: "hidden",
        width: "100%",
        backgroundRepeat: "no-repeat",
        minHeight: "980px",
        // backgroundImage: "url(" + props.background_banner_image.url + ")",
        backgroundPosition: "bottom center"
    };

    function getForm(){
        if(window.wx) {
            window.wx('render', 'div-register', 'RegisterDemo', lang, props.referral , 'style_url');
        } else {
            setTimeout(()=> {
               getForm();
            }, 1000);
        }
    }

    useEffect(() =>{
        getForm();
    }, [props.language]);

    return (
        <div style={bg}>
            <section className="content-block">
                <div className="container">
                    <div className="row marTop40">
                        <div className="col-md-7">
                            <div style={{width: "100%", marginBottom:"20px"}}>
                                <div style={{fontSize: "30px", lineHeight:"36px", color: "#244a88", fontWeight: "bold"}}>
                                    { lang === 'ar-ae'? 'سجل حساب تجريبي' : 'REGISTER DEMO ACCOUNT'}
                                </div>
                            </div>

                            <div style={{width: "100%"}}>
                                <div style={{color: "#1a1a1a"}}>
                                    <h6 style={{fontSize: "18px", fontWeight:"200"}}>{text2[0]}<br/>{text2[1] && text2[1]}</h6>
                                    <p style={{fontSize: "12px"}}>{text3}</p>
                                </div>

                            </div>

                            {/* <div className="marTop40" style={{width: "100%", color: "#fff", marginBottom: "25px"}}>
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
                            </div>*/}
                         </div>
                        <div className="col-md-5">
                            <div id="div-register" style={formWrap}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CarouselTop

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

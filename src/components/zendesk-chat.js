// import React from "react";
// import Zendesk from "react-zendesk";
// import { Helmet } from "react-helmet";

// const ZENDESK_KEY = process.env.ZENDESK_KEY;
// const ZendeskChat = (props) => {

//     const setting = {
//         color: {
//             theme: "#000"
//         },
//         launcher: {
//             chatLabel: {
//             "en-US": "Need Help"
//             }
//         },
//         // contactForm: {
//         //     fields: [
//         //     { id: "description", prefill: { "*": "My pre-filled description" } }
//         //     ]
//         // },
//         chat: {
//             suppress: false,
//             notifications: {
//               mobile: {
//                 disable: true
//               }
//             }
//         }
//     };

//   const {cbForm} = props;
//     return (
//         <>
//           <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded', ZENDESK_KEY)} />
//         </>
//       );
//   };

// export default ZendeskChat;

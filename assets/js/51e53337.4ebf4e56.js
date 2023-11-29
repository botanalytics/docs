"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8346],{31093:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>V,frontMatter:()=>i,metadata:()=>l,toc:()=>N});var a=e(85893),s=e(3905),o=e(36451);const i={sidebar_position:2,sidebar_label:"Responses",hide_title:!0},r="Amazon Alexa Responses",l={id:"integration/rest-api/channels/Amazon-Alexa/Responses/responses",title:"Amazon Alexa Responses",description:"Please refer to response objects in Amazon Alexa's documentation.",source:"@site/docs/integration/rest-api/channels/Amazon-Alexa/Responses/responses.mdx",sourceDirName:"integration/rest-api/channels/Amazon-Alexa/Responses",slug:"/integration/rest-api/channels/Amazon-Alexa/Responses/",permalink:"/docs/integration/rest-api/channels/Amazon-Alexa/Responses/",draft:!1,unlisted:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/rest-api/channels/Amazon-Alexa/Responses/responses.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Responses",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Requests",permalink:"/docs/integration/rest-api/channels/Amazon-Alexa/Requests/"},next:{title:"Webhook",permalink:"/docs/integration/rest-api/channels/Facebook Messenger/Webhook/"}},c={},N=[{value:"Example of single message payload in JSON format",id:"example-of-single-message-payload-in-json-format",level:3},{value:"Example of multiple messages payload in JSON format",id:"example-of-multiple-messages-payload-in-json-format",level:3}];function d(t){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"amazon-alexa-responses",children:"Amazon Alexa Responses"}),"\n",(0,a.jsx)(o.Z,{}),"\n",(0,a.jsxs)(n.p,{children:["Please refer to ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-and-response-json-reference.html#response-format",children:"response objects"})})," in Amazon Alexa's documentation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl --include \\\n--request POST \\\n--header "Authorization: Token BOTANALYTICS_CHANNEL_TOKEN" \\\n--header "Content-Type: application/json"\n--data "{\n   \'messages\': [\n      {\n         \'message\': {\n           \n         }\n      }\n   ]\n}" \\\nhttps://api.beta.botanalytics.co/v2/messages\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Field Descriptions"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"messages"})," (array): An array containing messages.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"message"})," (object): Represents an individual message."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["Please note that the ",(0,a.jsx)(n.code,{children:"message object"})," within ",(0,a.jsx)(n.code,{children:"messages"})," array above has the Amazon Alexa's native response object format plus ",(0,a.jsx)(n.code,{children:"request"})," field which is the request that response is created for and which is required for each response message object."]})]}),"\n",(0,a.jsx)(n.h3,{id:"example-of-single-message-payload-in-json-format",children:"Example of single message payload in JSON format"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "messages": [\n    {\n    \t "message": {\n\t\t    "outputSpeech":\n\t\t    {\n\t\t        "type": "SSML",\n\t\t        "ssml": "<speak>Here\'s your fact: A year on Mercury is just 88 days long.</speak>"\n\t\t    },\n\t\t    "shouldEndSession": false,\n\t\t    "timestamp": 1611014050053,\n\t\t    "request": {\n\t\t      "version": "1.0",\n\t\t      "session": {\n\t\t        "new": false,\n\t\t        "sessionId": "amzn1.echo-api.session.ec389df4-8963-4e1a-b7db-daf029249990",\n\t\t        "application": {\n\t\t          "applicationId": "amzn1.ask.skill.1c491832-7b2e-4247-8300-a5f6f8041df3"\n\t\t        },\n\t\t        "user": {\n\t\t          "userId": "amzn1.ask.account.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t        }\n\t\t      },\n\t\t      "context": {\n\t\t        "Extensions": {\n\t\t          "available": {}\n\t\t        },\n\t\t        "System": {\n\t\t          "application": {\n\t\t            "applicationId": "amzn1.ask.skill.1c491832-7b2e-4247-8300-a5f6f8041df3"\n\t\t          },\n\t\t          "user": {\n\t\t            "userId": "amzn1.ask.account.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t          },\n\t\t          "device": {\n\t\t            "deviceId": "amzn1.ask.device.AE3SAOAZ23RI24BCEO54JULKAGKRHXQHO7MINX5QX3NWNS7LBEC4J4XHPHWCWIL7PJJFVKC6NLV7JE26AKWVDKKBGMK42ZHU5KMAPY5QRY6AGGG5PRQOQMQNAFNOEO6UGCVPJDRHECGWAOFYCUCJFP6ERA7VI6KGDAN6HMSCA3QUVHZEMGPEC",\n\t\t            "supportedInterfaces": {}\n\t\t          },\n\t\t          "apiEndpoint": "https://api.amazonalexa.com",\n\t\t          "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjIxYzczMzgyLTQ0YTMtNDMzYS04NWFjLTgwNGExN2UzYTNmMCIsImV4cCI6MTYxMDg0MzMzOSwiaWF0IjoxNjEwODQzMDM5LCJuYmYiOjE2MTA4NDMwMzksInByaXZhdGVDbGFpbXMiOnsiY29udGV4dCI6IkFBQUFBQUFBQUFBQTVqdWRqamt0Sjd5Q2JIdHJOSXhUS2dFQUFBQUFBQUIvb2JGUzQySG10SFUzeTRXZ05RRjBLVmM2MWE2OVc0ZU5VSGVrMEhMR0J0YTRvK1QwS2pjdkZvbXNpSTNJNmQzanB1NVEyeThhSmhnYjRnZ3pkbGVkY3NBN3pqZSszR01FYnIvSVVyRTJqOFEzVWpmb1huczNjYUlwTTVjWjFaQXY3OGR5QnJmK05ET1dDVUNPZ1ozeDkxY0tQN0V1dFlmLzNnZU5hQ21kVTIvNE9SZEQ1OHZwZ0pJdENwQnpZZ3lnc1o3elZBVEtQRlJWMThIMzhHekkxMmNDMXhxL2NMSWRncGNPeTBONFFRTFZlS3pVQzlQUmpnNEdOOVlWa3JaOVlDTnpMN0paY0RWd0VUa1JXVmlIQ1ZqWWR4UmtUcXpYM2djQWpJUnJMdWYyemg2c3dFWWZ0b2ZBZzBGVFZCUjdheGtpQkRsdE1aMjRYeGFiUkgrTDYyZW1xRWdicE5WSWRVa0xYV1R2NWFnRjNkUXJtVnN1eGNNMm4xdWNiQXRLVHFSQWR0TnhNamRRIiwiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUUzU0FPQVoyM1JJMjRCQ0VPNTRKVUxLQUdLUkhYUUhPN01JTlg1UVgzTldOUzdMQkVDNEo0WEhQSFdDV0lMN1BKSkZWS0M2TkxWN0pFMjZBS1dWREtLQkdNSzQyWkhVNUtNQVBZNVFSWTZBR0dHNVBSUU9RTVFOQUZOT0VPNlVHQ1ZQSkRSSEVDR1dBT0ZZQ1VDSkZQNkVSQTdWSTZLR0RBTjZITVNDQTNRVVZIWkVNR1BFQyIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFIVElFTjNEVlVFQkpVNjRPVko2QTZCWjZBUkJEWUZSRDJWRVZPR0JSTkxNUktMV1gzWEhMVkdHM1pOVVRZVUxOVVlBMlNMSzJSM1AzSkJFSU01RkFWSE1MMlZOS1hLTlNYWFpUTjRYVllVUDU2N1JOTEwzSkc2S1hPWUlXR1M2VDVLSUZCQlJRWElXNzY2T1VBWkFCTUNHWlUySjJMRVE2VjNYSElXTUpTT1pBWU1NTU1NTkhFRVVHNkY3WVNVN1U1WFZPVlRCUkhYWDdTWSJ9fQ.K_1l7hD9qcYo500qaW_wyQwhzrD73eICZ_S-F4Kf4pkYoPNz_qPV62fplQA4J3uNMTAg-KZRjSDbgLu2XWhnjMO4kNod5U4aTs91qRTQ-BRksCNwMmVihcSOhuNx49cAuL2M1gW9Te8Zi6z590S0x02Xnipkm27sWyRK9-tF5ScFM347ccSbdG_SjlHT1fUuwR3pngeArdFG0ABWYUejrwX_qosRoU61MDIOGmFqIHfaFnSSyhAP5Rh0ewb6M2dcIE7U_2Ep0mIhlxMaU61gCKkFZrAqgDEQ_zBItUvFyvNm7qox-SaqsqTJmhi8rVOk119JEz0gJHtf3RM9IAKNvA",\n\t\t          "unit": {\n\t\t            "unitId": "amzn1.ask.unit.AEIRFWKIPA5SVFEVMW5XVGL5ET6CCJ7AJ5NMCTRUFXD3MIHESUD2GM5BOPDGCXDKMCA3KW65LPNTJO7SWMMOK3FUIMQYVDDKLMZV22PJMF7AYYACAS77FWH6AX6SGCFGPM"\n\t\t          }\n\t\t        }\n\t\t      },\n\t\t      "request": {\n\t\t        "type": "IntentRequest",\n\t\t        "requestId": "amzn1.echo-api.request.e0275bd3-af29-4722-add8-94f3fb7c00d4",\n\t\t        "timestamp": "2021-01-18T13:38:53Z",\n\t\t        "locale": "en-US",\n\t\t        "intent":\n\t\t        {\n\t\t          "name":"RecommendationIntent",\n\t\t          "confirmationStatus":"NONE",\n\t\t          "slots":{\n\t\t            "I_Am":{\n\t\t              "name":"I_Am",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "bloodTolerance":{\n\t\t              "name":"bloodTolerance",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "I_Want":{\n\t\t              "name":"I_Want",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "personality":{\n\t\t              "name":"personality",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            }\n\t\t          }\n\t\t        },\n\t\t        "dialogState": "STARTED"\n\t\t      }\n\t\t    }\n\t\t  }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"example-of-multiple-messages-payload-in-json-format",children:"Example of multiple messages payload in JSON format"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "messages": [\n    {\n    \t "message": {\n\t\t    "outputSpeech":\n\t\t    {\n\t\t        "type": "SSML",\n\t\t        "ssml": "<speak>Here\'s your fact: A year on Mercury is just 88 days long.</speak>"\n\t\t    },\n\t\t    "shouldEndSession": false,\n\t\t    "timestamp": 1611014050053,\n\t\t    "request": {\n\t\t      "version": "1.0",\n\t\t      "session": {\n\t\t        "new": false,\n\t\t        "sessionId": "amzn1.echo-api.session.ec389df4-8963-4e1a-b7db-daf029249990",\n\t\t        "application": {\n\t\t          "applicationId": "amzn1.ask.skill.1c491832-7b2e-4247-8300-a5f6f8041df3"\n\t\t        },\n\t\t        "user": {\n\t\t          "userId": "amzn1.ask.account.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t        }\n\t\t      },\n\t\t      "context": {\n\t\t        "Extensions": {\n\t\t          "available": {}\n\t\t        },\n\t\t        "System": {\n\t\t          "application": {\n\t\t            "applicationId": "amzn1.ask.skill.1c491832-7b2e-4247-8300-a5f6f8041df3"\n\t\t          },\n\t\t          "user": {\n\t\t            "userId": "amzn1.ask.account.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t          },\n\t\t          "device": {\n\t\t            "deviceId": "amzn1.ask.device.AE3SAOAZ23RI24BCEO54JULKAGKRHXQHO7MINX5QX3NWNS7LBEC4J4XHPHWCWIL7PJJFVKC6NLV7JE26AKWVDKKBGMK42ZHU5KMAPY5QRY6AGGG5PRQOQMQNAFNOEO6UGCVPJDRHECGWAOFYCUCJFP6ERA7VI6KGDAN6HMSCA3QUVHZEMGPEC",\n\t\t            "supportedInterfaces": {}\n\t\t          },\n\t\t          "apiEndpoint": "https://api.amazonalexa.com",\n\t\t          "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjIxYzczMzgyLTQ0YTMtNDMzYS04NWFjLTgwNGExN2UzYTNmMCIsImV4cCI6MTYxMDg0MzMzOSwiaWF0IjoxNjEwODQzMDM5LCJuYmYiOjE2MTA4NDMwMzksInByaXZhdGVDbGFpbXMiOnsiY29udGV4dCI6IkFBQUFBQUFBQUFBQTVqdWRqamt0Sjd5Q2JIdHJOSXhUS2dFQUFBQUFBQUIvb2JGUzQySG10SFUzeTRXZ05RRjBLVmM2MWE2OVc0ZU5VSGVrMEhMR0J0YTRvK1QwS2pjdkZvbXNpSTNJNmQzanB1NVEyeThhSmhnYjRnZ3pkbGVkY3NBN3pqZSszR01FYnIvSVVyRTJqOFEzVWpmb1huczNjYUlwTTVjWjFaQXY3OGR5QnJmK05ET1dDVUNPZ1ozeDkxY0tQN0V1dFlmLzNnZU5hQ21kVTIvNE9SZEQ1OHZwZ0pJdENwQnpZZ3lnc1o3elZBVEtQRlJWMThIMzhHekkxMmNDMXhxL2NMSWRncGNPeTBONFFRTFZlS3pVQzlQUmpnNEdOOVlWa3JaOVlDTnpMN0paY0RWd0VUa1JXVmlIQ1ZqWWR4UmtUcXpYM2djQWpJUnJMdWYyemg2c3dFWWZ0b2ZBZzBGVFZCUjdheGtpQkRsdE1aMjRYeGFiUkgrTDYyZW1xRWdicE5WSWRVa0xYV1R2NWFnRjNkUXJtVnN1eGNNMm4xdWNiQXRLVHFSQWR0TnhNamRRIiwiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUUzU0FPQVoyM1JJMjRCQ0VPNTRKVUxLQUdLUkhYUUhPN01JTlg1UVgzTldOUzdMQkVDNEo0WEhQSFdDV0lMN1BKSkZWS0M2TkxWN0pFMjZBS1dWREtLQkdNSzQyWkhVNUtNQVBZNVFSWTZBR0dHNVBSUU9RTVFOQUZOT0VPNlVHQ1ZQSkRSSEVDR1dBT0ZZQ1VDSkZQNkVSQTdWSTZLR0RBTjZITVNDQTNRVVZIWkVNR1BFQyIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFIVElFTjNEVlVFQkpVNjRPVko2QTZCWjZBUkJEWUZSRDJWRVZPR0JSTkxNUktMV1gzWEhMVkdHM1pOVVRZVUxOVVlBMlNMSzJSM1AzSkJFSU01RkFWSE1MMlZOS1hLTlNYWFpUTjRYVllVUDU2N1JOTEwzSkc2S1hPWUlXR1M2VDVLSUZCQlJRWElXNzY2T1VBWkFCTUNHWlUySjJMRVE2VjNYSElXTUpTT1pBWU1NTU1NTkhFRVVHNkY3WVNVN1U1WFZPVlRCUkhYWDdTWSJ9fQ.K_1l7hD9qcYo500qaW_wyQwhzrD73eICZ_S-F4Kf4pkYoPNz_qPV62fplQA4J3uNMTAg-KZRjSDbgLu2XWhnjMO4kNod5U4aTs91qRTQ-BRksCNwMmVihcSOhuNx49cAuL2M1gW9Te8Zi6z590S0x02Xnipkm27sWyRK9-tF5ScFM347ccSbdG_SjlHT1fUuwR3pngeArdFG0ABWYUejrwX_qosRoU61MDIOGmFqIHfaFnSSyhAP5Rh0ewb6M2dcIE7U_2Ep0mIhlxMaU61gCKkFZrAqgDEQ_zBItUvFyvNm7qox-SaqsqTJmhi8rVOk119JEz0gJHtf3RM9IAKNvA",\n\t\t          "unit": {\n\t\t            "unitId": "amzn1.ask.unit.AEIRFWKIPA5SVFEVMW5XVGL5ET6CCJ7AJ5NMCTRUFXD3MIHESUD2GM5BOPDGCXDKMCA3KW65LPNTJO7SWMMOK3FUIMQYVDDKLMZV22PJMF7AYYACAS77FWH6AX6SGCFGPM"\n\t\t          }\n\t\t        }\n\t\t      },\n\t\t      "request": {\n\t\t        "type": "IntentRequest",\n\t\t        "requestId": "amzn1.echo-api.request.e0275bd3-af29-4722-add8-94f3fb7c00d4",\n\t\t        "timestamp": "2021-01-18T13:38:53Z",\n\t\t        "locale": "en-US",\n\t\t        "intent":\n\t\t        {\n\t\t          "name":"RecommendationIntent",\n\t\t          "confirmationStatus":"NONE",\n\t\t          "slots":{\n\t\t            "I_Am":{\n\t\t              "name":"I_Am",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "bloodTolerance":{\n\t\t              "name":"bloodTolerance",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "I_Want":{\n\t\t              "name":"I_Want",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "personality":{\n\t\t              "name":"personality",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            }\n\t\t          }\n\t\t        },\n\t\t        "dialogState": "STARTED"\n\t\t      }\n\t\t    }\n\t\t  }\n    },\n    {\n    \t"message": {\n\t\t    "outputSpeech":\n\t\t    {\n\t\t      "type": "PlainText",\n\t\t      "text": "Here\'s your fact: A year on Mercury is just 88 days long."\n\t\t    },\n\t\t    "shouldEndSession": false,\n\t\t    "timestamp": 1611014050053,\n\t\t    "request": {\n\t\t      "version": "1.0",\n\t\t      "session": {\n\t\t        "new": false,\n\t\t        "sessionId": "amzn1.echo-api.session.ec389df4-8963-4e1a-b7db-daf029249990",\n\t\t        "application": {\n\t\t          "applicationId": "amzn1.ask.skill.1c491832-7b2e-4247-8300-a5f6f8041df3"\n\t\t        },\n\t\t        "user": {\n\t\t          "userId": "amzn1.ask.account.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t        }\n\t\t      },\n\t\t      "context": {\n\t\t        "Extensions": {\n\t\t          "available": {}\n\t\t        },\n\t\t        "System": {\n\t\t          "application": {\n\t\t            "applicationId": "amzn1.ask.skill.1c491832-7b2e-4247-8300-a5f6f8041df3"\n\t\t          },\n\t\t          "user": {\n\t\t            "userId": "amzn1.ask.account.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t          },\n\t\t          "person": {\n\t\t            "personId": "amzn1.ask.person.AGNXEZOAZXB4GG44YZZTDHYCKGUYNH3GTBMY3L6K5FOHGFTR3V3A7ZKJ2EYAIPILK3E44XYRLIF4QW7RRHQVQJK66LYQU7CL2CB23E6WVTN2WQYLQKQSCEW3HRLU3MHR3E5ZGPLCSSDKUH34SO53IJ75IDYCNZNQV3UOZOF4IF52HRUUD2K7NU3NHAYRY5ZTAITAASDJACHZ5JA"\n\t\t          },\n\t\t          "device": {\n\t\t            "deviceId": "amzn1.ask.device.AE3SAOAZ23RI24BCEO54JULKAGKRHXQHO7MINX5QX3NWNS7LBEC4J4XHPHWCWIL7PJJFVKC6NLV7JE26AKWVDKKBGMK42ZHU5KMAPY5QRY6AGGG5PRQOQMQNAFNOEO6UGCVPJDRHECGWAOFYCUCJFP6ERA7VI6KGDAN6HMSCA3QUVHZEMGPEC",\n\t\t            "supportedInterfaces": {}\n\t\t          },\n\t\t          "apiEndpoint": "https://api.amazonalexa.com",\n\t\t          "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjIxYzczMzgyLTQ0YTMtNDMzYS04NWFjLTgwNGExN2UzYTNmMCIsImV4cCI6MTYxMDg0MzMzOSwiaWF0IjoxNjEwODQzMDM5LCJuYmYiOjE2MTA4NDMwMzksInByaXZhdGVDbGFpbXMiOnsiY29udGV4dCI6IkFBQUFBQUFBQUFBQTVqdWRqamt0Sjd5Q2JIdHJOSXhUS2dFQUFBQUFBQUIvb2JGUzQySG10SFUzeTRXZ05RRjBLVmM2MWE2OVc0ZU5VSGVrMEhMR0J0YTRvK1QwS2pjdkZvbXNpSTNJNmQzanB1NVEyeThhSmhnYjRnZ3pkbGVkY3NBN3pqZSszR01FYnIvSVVyRTJqOFEzVWpmb1huczNjYUlwTTVjWjFaQXY3OGR5QnJmK05ET1dDVUNPZ1ozeDkxY0tQN0V1dFlmLzNnZU5hQ21kVTIvNE9SZEQ1OHZwZ0pJdENwQnpZZ3lnc1o3elZBVEtQRlJWMThIMzhHekkxMmNDMXhxL2NMSWRncGNPeTBONFFRTFZlS3pVQzlQUmpnNEdOOVlWa3JaOVlDTnpMN0paY0RWd0VUa1JXVmlIQ1ZqWWR4UmtUcXpYM2djQWpJUnJMdWYyemg2c3dFWWZ0b2ZBZzBGVFZCUjdheGtpQkRsdE1aMjRYeGFiUkgrTDYyZW1xRWdicE5WSWRVa0xYV1R2NWFnRjNkUXJtVnN1eGNNMm4xdWNiQXRLVHFSQWR0TnhNamRRIiwiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUUzU0FPQVoyM1JJMjRCQ0VPNTRKVUxLQUdLUkhYUUhPN01JTlg1UVgzTldOUzdMQkVDNEo0WEhQSFdDV0lMN1BKSkZWS0M2TkxWN0pFMjZBS1dWREtLQkdNSzQyWkhVNUtNQVBZNVFSWTZBR0dHNVBSUU9RTVFOQUZOT0VPNlVHQ1ZQSkRSSEVDR1dBT0ZZQ1VDSkZQNkVSQTdWSTZLR0RBTjZITVNDQTNRVVZIWkVNR1BFQyIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFIVElFTjNEVlVFQkpVNjRPVko2QTZCWjZBUkJEWUZSRDJWRVZPR0JSTkxNUktMV1gzWEhMVkdHM1pOVVRZVUxOVVlBMlNMSzJSM1AzSkJFSU01RkFWSE1MMlZOS1hLTlNYWFpUTjRYVllVUDU2N1JOTEwzSkc2S1hPWUlXR1M2VDVLSUZCQlJRWElXNzY2T1VBWkFCTUNHWlUySjJMRVE2VjNYSElXTUpTT1pBWU1NTU1NTkhFRVVHNkY3WVNVN1U1WFZPVlRCUkhYWDdTWSJ9fQ.K_1l7hD9qcYo500qaW_wyQwhzrD73eICZ_S-F4Kf4pkYoPNz_qPV62fplQA4J3uNMTAg-KZRjSDbgLu2XWhnjMO4kNod5U4aTs91qRTQ-BRksCNwMmVihcSOhuNx49cAuL2M1gW9Te8Zi6z590S0x02Xnipkm27sWyRK9-tF5ScFM347ccSbdG_SjlHT1fUuwR3pngeArdFG0ABWYUejrwX_qosRoU61MDIOGmFqIHfaFnSSyhAP5Rh0ewb6M2dcIE7U_2Ep0mIhlxMaU61gCKkFZrAqgDEQ_zBItUvFyvNm7qox-SaqsqTJmhi8rVOk119JEz0gJHtf3RM9IAKNvA",\n\t\t          "unit": {\n\t\t            "unitId": "amzn1.ask.unit.AEIRFWKIPA5SVFEVMW5XVGL5ET6CCJ7AJ5NMCTRUFXD3MIHESUD2GM5BOPDGCXDKMCA3KW65LPNTJO7SWMMOK3FUIMQYVDDKLMZV22PJMF7AYYACAS77FWH6AX6SGCFGPM"\n\t\t          }\n\t\t        }\n\t\t      },\n\t\t      "request": {\n\t\t        "type": "IntentRequest",\n\t\t        "requestId": "amzn1.echo-api.request.e0275bd3-af29-4722-add8-94f3fb7c00d4",\n\t\t        "timestamp": "2021-01-18T13:38:53Z",\n\t\t        "locale": "en-US",\n\t\t        "intent":\n\t\t        {\n\t\t          "name":"RecommendationIntent",\n\t\t          "confirmationStatus":"NONE",\n\t\t          "slots":{\n\t\t            "I_Am":{\n\t\t              "name":"I_Am",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "bloodTolerance":{\n\t\t              "name":"bloodTolerance",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "I_Want":{\n\t\t              "name":"I_Want",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            },\n\t\t            "personality":{\n\t\t              "name":"personality",\n\t\t              "confirmationStatus":"NONE",\n\t\t              "source":"USER"\n\t\t            }\n\t\t          }\n\t\t        },\n\t\t        "dialogState": "STARTED"\n\t\t      }\n\t\t    }\n\t\t  }\n    }\n  ]\n}\n'})})]})}function V(t={}){const{wrapper:n}={...(0,s.ah)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},3905:(t,n,e)=>{e.d(n,{ah:()=>c});var a=e(67294);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,a,s=function(t,n){if(null==t)return{};var e,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(s[e]=t[e]);return s}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var l=a.createContext({}),c=function(t){var n=a.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},N={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),V=c(e),p=s,S=V["".concat(l,".").concat(p)]||V[p]||N[p]||o;return e?a.createElement(S,i(i({ref:n},d),{},{components:e})):a.createElement(S,i({ref:n},d))}));d.displayName="MDXCreateElement"},36451:(t,n,e)=>{e.d(n,{Z:()=>o});e(67294);var a=e(85893);const s="https://god.gw.postman.com/run-collection/23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226%26entityType%3Dcollection%26workspaceId%3Db14a14fd-1a0b-4fb3-8730-02214bec0158";function o(){return(0,a.jsx)("a",{href:s,target:"_blank",rel:"noreferrer","aria-label":"Run in Postman",children:(0,a.jsx)("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman",width:128,height:32})})}}}]);
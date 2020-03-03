    export default {
	    MAX_ATTACHMENT_SIZE: 5000000,
	    STRIPE_KEY: "pk_test_SAyaLeXNUrTJfzvw452yv7aW00j8cjdeML",
        s3: {
            REGION: "ap-southeast-1",
            BUCKET: "yuanyh-mb"
        },
        apiGateway: {
            REGION: "ap-southeast-1",
            URL: "https://79kijk6u9h.execute-api.ap-southeast-1.amazonaws.com/prod"
        },
        cognito: {
            REGION: "ap-southeast-1",
            USER_POOL_ID: "ap-southeast-1_BSY4JIsiL",
            APP_CLIENT_ID: "75nctd9nn1t7u3c5kojn58m1hj",
            IDENTITY_POOL_ID: "ap-southeast-1:a94fda66-8bf9-47a0-9720-abf8918a8436"
        }
    };

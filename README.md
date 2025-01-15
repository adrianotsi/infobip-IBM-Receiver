# infobip-IBM-Receiver

This project integrates Infobip and IBM Watson services to receive and process messages via a webhook.


## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/adrianotsi/infobip-IBM-Receiver
    cd infobip-IBM-Receiver
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a .env file in the root directory and add the following environment variables:
    ```env
    INFOBIP_BASE_URL=<your-infobip-base-url>
    INFOBIP_AUTHORIZATION=<your-infobip-authorization>
    SEND_NUMBER=<your-send-number>
    WATSON_API_KEY=<your-watson-api-key>
    WATSON_INSTANCE_URL=<your-watson-instance-url>
    WATSON_ASSISTANT_ID=<your-watson-assistant-id>
    ```

## Running the Project

To run the project locally, use the following command:
```sh
npm run dev
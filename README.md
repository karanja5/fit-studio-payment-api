# FitStudio Payment API

This repository contains the payment API for FitStudio, a Shoe Shopping Application with an AR Try-On feature. 
The API is designed to handle payment processing using the Safaricom M-PESA platform through the Daraja API.

## Overview

The FitStudio Payment API allows for secure transaction processing and is responsible for initiating the STK push requests to facilitate user payments. 
It manages the transaction flow, from token generation to payment confirmation, ensuring a seamless user experience within the FitStudio application.

## Features

- Token generation for authenticating with the M-PESA API.
- Implementation of STK push for triggering M-PESA transactions.
- Secure handling of user payment details.
- Callback endpoint for payment confirmation.

## Technologies Used

- Node.js - for the server environment.
- Axios - for handling HTTP requests.
- Express - for setting up the server routes.
- Docker - for containerizing the application.

## Getting Started

To get started with the FitStudio Payment API, you will need to have Node.js and Docker installed on your system.

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/karanja5/fit-studio-payment-api.git
    ```

2. Navigate to the repository directory:

    ```sh
    cd fit-studio-payment-api
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file and populate it with the necessary M-PESA API credentials:

    ```env
    SECRET_KEY=YourSecretKey
    CONSUMER_KEY=YourConsumerKey
    SHORT_CODE=YourShortCode
    PASS_KEY=YourPassKey
    ```

5. Build the Docker container:

    ```sh
    docker build -t fit-studio-payment-api .
    ```

6. Run the container:

    ```sh
    docker run -p 5001:5001 fit-studio-payment-api
    ```

The server should now be running and listening for payment requests on port 5001.

## Usage

To initiate a payment request, send a POST request to the `/postStk` endpoint with the user's contact number and the amount to be charged.

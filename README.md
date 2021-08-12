
# RedoQ-Test-API
Three API's are as follows:-

👉Register API:
    
    request->customer_name,
             customer_mobile,
             customer_email,
             customer_password,
             customer_address_locality,
             customer_address_pincode,
             customer_address_policestation,
             customer_address_district,
             customer_address_state.
    response->OK (if mobile and email are 
                  unique and mobile,email,
                  password format are correct)

👉Login API

    request->customer_mobile,and
            customer_password

    response->customer_user_id(encrypted
            user id with encrypted database id)
            customer_name

👉GetUserDat API

    request->customer_user_id

    response->customer_name,
              customer_mobile,
              customer_email,
              customer_address_locality,
              customer_address_pincode,
              customer_address_policestation,
              customer_address_district,
              customer_address_state.



## Installation

Following are the step-wise installations required 

Install node with npm

```bash
  npm i node
```

Install express with npm

```bash
  npm i express
```
Install nodemon with npm

```bash
  npm i nodemon
```
Install mysql2 with npm

```bash
  npm i mysql2
```
Install bluebird with npm

```bash
  npm i crypto-js
```
Install crypto-js with npm

```bash
  npm i mysql2
```
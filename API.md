**Users GET**
----
  _Get all information about every user_

* **URL**

  _/api/users_

* **Method:**

  `GET`
  
*  **URL Params**

   None 

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `[{"_id":"58c2560e05f574b7fdb872e5","email":"adam.gomes@gmail.com","name":"adamgomes","__v":0},{"_id":"58c25a60cdb4ab598d0b9a4e","email":"adam.gomesa@gmail.com","name":"adamgomesa","__v":0},{"_id":"58c2e55ea3212c0d4de2c310","email":"joseph.xie@yahoo.com","name":"josephxie","__v":0}}]`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "status" : 401 }`


* **Notes:**

  You need a token in order to make a successful request
  
**Users POST**
----
  _insert a user into USER database_

* **URL**

  _/api/users_

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `name=[STRING]`
   `email=[STRING]`
   `password=[STRING]`

   **Optional:**
 
   `salt=[STRING]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ message: 'User created!' }`
 
* **Error Response:**

  * **Code:** UNKNOWN
    **Content:** `{ error: 'User was not created' }`


* **Notes:**
  You need a token in order to make a successful request
  
-----------------

**Specific User PUT**
----
  _insert a user into USER database_

* **URL**

  _/api/users/:email_

* **Method:**

  `PUT`
  
*  **URL Params**

   **Optional:**
   `name=[STRING]`
   `email=[STRING]`
   `password=[STRING]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ message: 'User updated!' }`
 
* **Error Response:**

  * **Code:** UNKNOWN
    **Content:** `{error: 'Could not Update user'}`
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

  _/api/users/:id_

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
----------------
**Events GET by tag**
----
  _Get all events containing a list of tags_

* **URL**

  _/api/events/:groupId/:tags_

* **Method:**

  `GET`
  
*  **URL Params**

   `groupId=STRING`
   `tags=STRING`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `[
  {
    "_id": "58d04d77a8627214b75b40c3",
    "groupId": "58cff5694041cc3ace06425c",
    "date": "2017-03-20T21:45:27.000Z",
    "location": "domrwhrt",
    "description": "There is no deck",
    "name": "Test",
    "__v": 0,
    "tags": [
      "friendly",
      "fun"
    ],
    "eventAdmins": [
      null
    ]
  }
]`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "message" }`


* **Notes:**

  TAGS should be in the form "tag1,tag2,tag3"
  
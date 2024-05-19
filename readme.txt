npm create vite@latest

Then

 cd frontend
 npm install
 npm run dev

http://localhost:5173/


postgre user
user - postgres
pass - admin


Sample requests
POST
http://localhost:8080/api/auth/signup
ReqBody
{
    "username" : "nav",
    "email" : "navindalmia2003@yahoo.co.in",
    "password" : "12345678",
    "role" : ["mod","user"]
}
-----
SignIn
POST
http://localhost:8080/api/auth/signin
Req Body
{
    "username" : "nav", 
    "password" : "12345678"
    }
    
    
    Res Body
    
    {
        "id": 1,
        "username": "nav",
        "email": "navindalmia2003@yahoo.co.in",
        "roles": [
            "ROLE_USER",
            "ROLE_MODERATOR"
        ],
        "tokenType": "Bearer",
        "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXYiLCJpYXQiOjE3MTYxMzczNzYsImV4cCI6MTcxNjIyMzc3Nn0.z03fDhdWEzmcrUq898-CHbCC05LMvqFPNpuYaHN-yb8"
}
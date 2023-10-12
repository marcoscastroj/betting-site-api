# betting-site-api
Betting site api with NodeJS(express) and MongoDB

## Installation
1. **Clone this Repository**
2. **Install dependencies**
   ```bash
   npm install express body-parser mongoose bcrypt jsonwebtoken
   ```
3. **Configure MongoDB:**
   - Ensure you have a MongoDB server running
   - Update the connection string in 'index.js' to point your database

4. **Start the server:**
    ```bash
    node index.js or nodemon index.js
    ```
    The API will be available at 'http://localhost:3000'.

## Routes
<h2>Users</h2>

- **Register a new user**:
```bash
POST /user/register
```
Request body:
```bash
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}
```

-**User login**:
```bash
POST /user/login
```
Request body:
```bash
{
  "email": "user@example.com",
  "password": "password"
}
```
<h2>Bets</h2>

-**Get all bets**:
```bash
GET /bet
```

-**Create a new bet:**
```bash
POST /bet
```
Request body:
```bash
{
  "user": "User Name",
  "value": 50,
  "odds": 2.5
}
```

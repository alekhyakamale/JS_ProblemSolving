const SuperLogger = moduleName => logLevel => message => `2026 - [${moduleName}] - [${logLevel}]: ${message}`;

const authLog = SuperLogger("Authentication");
const dbLog = SuperLogger("Database");

// 2. Lock in the log levels for that module
const authError = authLog("ERROR");
const authInfo = authLog("INFO");
const dbQuery = dbLog("QUERY");

// 3. Log the actual messages
console.log(authError("Password hashing failed!")); 
// Expected output: "2026 - [Authentication] - [ERROR]: Password hashing failed!"

console.log(authInfo("User logged in successfully."));
// Expected output: "2026 - [Authentication] - [INFO]: User logged in successfully."

console.log(dbQuery("SELECT * FROM users;"));
// Expected output: "2026 - [Database] - [QUERY]: SELECT * FROM users;"
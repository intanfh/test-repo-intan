const newman = require("newman");

newman.run({
    collection: "C:/Users/Asus/Downloads/postman/ApiBooks4.postman_collection.json",
    environment: "C:/Users/Asus/Downloads/postman/Books.postman_environment.json",
    reporters: ["cli", "htmlextra"]
});
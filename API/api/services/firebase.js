import admin from "firebase-admin";
import serviceAccount from "../../credentials/kosovo-travel-blog-firebase-adminsdk-bbmt0-2442954123.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;
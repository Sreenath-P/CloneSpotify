import { Router } from "express";
import * as user from "./request-handlers/user-handler.js";
// import * as products from "./request-handlers/products-handler.js";
import { Auth } from "./middlewares/auth.js";
// import { Auth } from "./middlewares/auth.js";

const router = Router();


router.route("/register").post(user.register);
router.route("/login").post(user.login);

router.route("/getusername").get(Auth,user.getUsername);
// router.route("/profile").get(Auth, user.profile);

// router.route("/addProducts").post(Auth,products.addProduct)
// router.route("/getProducts").get(products.getProducts)

// router.route("/addCart").post(Auth,products.addCart)
// router.route("/getCart").get(Auth,products.getCart)

export default router;
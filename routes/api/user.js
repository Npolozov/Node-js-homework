const express = require("express");

const ctrl = require("../../controlers/user");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.patch(
  "/subscription",

  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;

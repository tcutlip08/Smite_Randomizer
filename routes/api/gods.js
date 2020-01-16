const router = require("express").Router();
const godsController = require("../../controllers/godsController");

router.route("/random").get(godsController.findOne);

router.route("/:class/random").get(godsController.findOneByClass);

router
  .route("/:class")
  .get(godsController.findAllByClass)
  .put(godsController.update)
  .delete(godsController.remove);

router
  .route("/")
  .get(godsController.findAll)
  .post(godsController.create);

module.exports = router;

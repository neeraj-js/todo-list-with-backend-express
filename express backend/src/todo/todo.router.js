const router = require("express").Router();
const {
  getitems,
  additems,
  deleteitem,
  edititem,
} = require("./todo.controller");

router.route("/tododetails").get(getitems);
router.route("/addtodo").post(additems);
router.route("/deletetodo/:id").delete(deleteitem);
router.route("/edittodo/:id").put(edititem);

module.exports = { router };

const {
  getItemdetails,
  addItemdetails,
  deleteItemdetails,
  editItemdetails,
} = require("./todo.service");

const getitems = async (req, res, next) => {
  const tododata = await getItemdetails();
  res.json({ data: tododata });
};

const additems = async (req, res, next) => {
  const item = req.body.name;
  const adddata = await addItemdetails(item);
  res.json("sucessfully added");
};

const deleteitem = async (req, res, next) => {
  const id = req.params.id;
  const deletedata = await deleteItemdetails(id);
  res.json("successfully deleted");
};
const edititem = async (req, res, next) => {
  const id = req.params.id;
  const item = req.body.name;
  const editdata = await editItemdetails(id, item);
  res.json("sucessfully edited");
};

module.exports = { getitems, additems, deleteitem, edititem };

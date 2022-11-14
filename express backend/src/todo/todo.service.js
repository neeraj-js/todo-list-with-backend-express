const knexInstance = require("../database/connection");

const getItemdetails = async (noteId) => {
  const result = await knexInstance("todo").select("*"); // select('*').where('id',noteId)
  return result;
};

const addItemdetails = async (item) => {
  const add = await knexInstance("todo").insert({ itemname: item });
  return add;
};

const deleteItemdetails = async (id) => {
  const del = await knexInstance("todo").where("id", id).del();
};
const editItemdetails = async (id, item) => {
  const edit = await knexInstance("todo")
    .where("id", id)
    .update({ itemname: item });
};

module.exports = {
  getItemdetails,
  addItemdetails,
  deleteItemdetails,
  editItemdetails,
};

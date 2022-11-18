import React, { useContext } from "react";
import Edittab from "./edittab";
import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import { Context } from "../App";
function AddItemList() {
  const { setflag, flag, items, setItems, changefound, setChangefound } =
    useContext(Context);

  const addItemToList = async (item) => {
    console.log(localStorage.getItem("userid"));
    const res = await axios.post("http://localhost:5000/todo/create-todo", {
      tododescription: item,
      userid: +localStorage.getItem("userid"),
    });
  };

  const handleSubmit = async (event) => {
    console.log("hi");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = data.get("newItem");

    await addItemToList(item);
    setChangefound(!changefound);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" marginTop={5}>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <InputLabel>Add new Item</InputLabel>
              <TextField name="newItem" type="text" />
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default AddItemList;

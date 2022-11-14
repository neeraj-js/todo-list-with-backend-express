import React, { useContext } from "react";
import Edittab from "./edittab";
import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { Context } from "../App";
function AddItemList() {
  const { setflag, flag, items, setItems, changefound, setChangefound } =
    useContext(Context);

  const addItemToList = async (item) => {
    const res = await axios.post("http://localhost:5000/addtodo", {
      name: item,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = data.get("newItem");

    addItemToList(item);
    setChangefound(!changefound);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" marginTop={5}>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <InputLabel>Add new Item</InputLabel>
            <TextField name="newItem" type="text" />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}

export default AddItemList;

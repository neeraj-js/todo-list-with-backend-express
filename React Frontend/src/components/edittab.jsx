import React, { useContext } from "react";
import { Context } from "../App";
import axios from "axios";

import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";

function Edittab(props) {
  console.log(props);
  const { setflag, flag, items, setItems, changefound, setChangefound } =
    useContext(Context);

  const handleEdit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = data.get("newItem");
    console.log(item);
    const res = await axios.put(
      `http://localhost:5000/edittodo/${props.uniquekey}`,
      { name: item }
    );
    setflag(false);
    setChangefound(!changefound);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" marginTop={5}>
          <Stack
            component="form"
            onSubmit={handleEdit}
            direction="row"
            alignItems="center"
            spacing={3}
            value={props.olditem}
          >
            <InputLabel>Edit Item</InputLabel>
            <TextField name="newItem" type="text" />
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}

export default Edittab;

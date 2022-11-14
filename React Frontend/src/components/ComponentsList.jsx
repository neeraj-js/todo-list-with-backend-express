import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { Container, Stack } from "@mui/material";
import ItemCard from "./ComponentItem";
import { Context } from "../App";
import Edittab from "./edittab";

function ComponentList() {
  const { setflag, flag, items, setItems, changefound, setChangefound } =
    useContext(Context);
  const [uniqueKey, setUniqueKey] = useState();

  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await gettododata();
      setdata(response.data.data);
    }
    fetchdata();
  }, [changefound]);

  const gettododata = async () => {
    return await axios.get("http://localhost:5000/tododetails");
  };

  const editItem = (key) => {
    setflag(true);
    setUniqueKey(key);
  };

  return (
    <>
      <Container maxWidth="lg">
        {flag && <Edittab uniquekey={uniqueKey} />}
        <Stack direction="column" spacing={2}>
          <h2>To-Do</h2>
          {data.map((item, index) => (
            <ItemCard
              key={index}
              itemNumber={index + 1}
              uniqueKey={item.id}
              item={item.itemname}
              editItem={editItem}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default ComponentList;

import React from "react";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  Header,
  Label,
  Select,
  Textarea,
  Input,
  Button,
} from "./FormAddPoststyled";
import DART_IMAGE from "../img/4.png";
import LEILA_IMAGE from "../img/5.png";
import OWEN_IMAGE from "../img/6.png";

const FormAddPost = () => {
  const [selectAuthor, setselectAuthor] = React.useState("");
  const [inputText, setyInputText] = React.useState("");
  const [inputLink, setInputLink] = React.useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(action);
  };

  let currentFoto = "";
  if (selectAuthor === "Leia Organa") {
    currentFoto = LEILA_IMAGE;
  }
  if (selectAuthor === "Darth Vader") {
    currentFoto = DART_IMAGE;
  }
  if (selectAuthor === "Owen Lars") {
    currentFoto = OWEN_IMAGE;
  }

  const action = {
    type: "addNewPost",
    payload: {
      inputText,
      inputLink,
      selectAuthor,
      currentFoto,
    },
  };

  return (
    <Wrapper>
      <Header>Create new post</Header>
      <Label>Author:</Label>
      <Select
        id="select"
        value={selectAuthor}
        onChange={(e) => {
          setselectAuthor(e.target.value);
        }}
      >
        <option defaultValue></option>
        <option>Leia Organa</option>
        <option>Darth Vader</option>
        <option>Owen Lars</option>
      </Select>
      <Label>Text:</Label>
      <Textarea
        value={inputText}
        onChange={(e) => {
          setyInputText(e.target.value);
        }}
      />
      <Label>URL address of picture:</Label>
      <Input
        type="text"
        placeholder="http//..."
        value={inputLink}
        onChange={(e) => {
          setInputLink(e.target.value);
        }}
      />
      <Button onClick={handleClick}>Add</Button>
    </Wrapper>
  );
};

export default FormAddPost;

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

const FormAddPost = () => {
  const [selectAuthor, setselectAuthor] = React.useState("");
  const [inputText, setyInputText] = React.useState("");
  const [inputLink, setInputLink] = React.useState("");

  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(action);
  };

  const action = {
    type: "addNewPost",
    payload: {
      inputText,
      inputLink,
      selectAuthor,
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
      <Button onClick={handlerClick}>Add</Button>
    </Wrapper>
  );
};

export default FormAddPost;

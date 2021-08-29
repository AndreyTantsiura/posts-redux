import DART_IMAGE from "../img/4.png";
import LEILA_IMAGE from "../img/5.png";
import OWEN_IMAGE from "../img/6.png";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const LUKE_IMAGE =
  "https://media.nauticamilanonline.com/product/busto-luke-skywalker-star-wars-episode-viii-18cm-800x800.jpg";
const RISE_SKYWALKER =
  "https://media.tenor.com/images/ef05556fe6351303a924db6a05e5a4f4/tenor.png";

const initialState = {
  posts: [
    {
      photo: ANAKIN_IMAGE,
      name: "Anakin Skywalker",
      image: RAY_IMAGE,
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    },
    {
      photo: LUKE_IMAGE,
      name: "Luke Skywalker",
      image: RISE_SKYWALKER,
      content: "WTF?",
    },
  ],
};



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addNewPost": {
      return {
        ...state,
        posts: [
          {
            photo: "",
            name: action.payload.selectAuthor,
            image: action.payload.inputLink,
            content: action.payload.inputText,
          },
          ...state.posts,
        ],
      };
    }
    default:
      return state;
  }
}

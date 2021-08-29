import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1em;
  padding: 2em 0;
  width: 40em;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px #8d949e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 80%;
  margin: 0;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #8d949e;
`;

export const Label = styled.div`
  width: 80%;
  margin: 0;
  text-align: start;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #8d949e;
`;

export const Select = styled.select`
  width: 80%;
  height: 3em;
  box-sizing: border-box;
  padding: 0 1em;
  background-color: #ebedf0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000022;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 5em;
  box-sizing: border-box;
  padding: 0 1em;
  background-color: #ebedf0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000022;
`;

export const Input = styled.input`
  width: 80%;
  height: 3em;
  box-sizing: border-box;
  padding: 0 1em;
  background-color: #ebedf0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000022;
  margin-bottom: 2em;
`;

export const Button = styled.button`
  width: 10em;
  height: 3em;
  box-sizing: border-box;
  padding: 0 1em;
  background-color: #ebedf0;
  border: none;
  border-radius: 5px;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000022;
  margin-left: 58%;
  cursor: pointer;
  box-shadow: 0 1px 2px #8d949e;
`;

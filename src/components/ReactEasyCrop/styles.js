import styled from "styled-components";

export const Input = styled.input`

background: transparent;
top: 30rem;

  height: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 10px 0;
  

  width: 100%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: blue;
    margin-top: -4px;
    cursor: pointer;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:hover::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  
  &::-ms-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: blue;
    margin-top: -4px;
    cursor: pointer;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:hover::-ms-thumb {
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: blue;
    margin-top: -4px;
    cursor: pointer;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:hover::-moz-range-thumb {
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    background: #6573c3;
    border: none;
    border-radius: 3px;
  }

  &::-moz-range-track {
    width: 100%
    height: 2px;
    background: #6573c3;
    border: none;
    border-radius: 3px;
  }

  &::-ms-track {
    width: 100%
    height: 2px;
    background: #6573c3;
    border: none;
    border-radius: 3px;
  }

  /* &:focus::-webkit-slider-runnable-track {
    background: #ccc;
  } */
`;

export const CropperContainer = styled.div`
  position: relative;
  width: auto;
  height: 50vh;
  display: flex;
`;

export const ExternalContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 3.5rem;
  h1 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: right;
  }
`;

export const Image = styled.img`
  height: 500px;
`;

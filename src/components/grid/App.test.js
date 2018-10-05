import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App component', () => {
  test("render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  test("contains a Header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("header")).toHaveLength(1);
  });
});

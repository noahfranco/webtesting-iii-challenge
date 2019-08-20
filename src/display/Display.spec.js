// Test away!
import React from "react"; 
import Display from "./Display.js"; 
import renderer from "react-test-renderer"; 
import { render } from "@testing-library/react";

describe('<Display />', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Display />); 
  
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe("displaying the initial state", () => {
      it("defaults to Unlocked", () => {
          const { getByText } = render(<Display />); 
          expect(getByText(/unlocked/i)).toBeTruthy(); 
      })
      it("defaults to open", () => {
          const { getByText } = render(<Display />); 
          expect(getByText(/open/i)).toBeTruthy(); 
      })
  })
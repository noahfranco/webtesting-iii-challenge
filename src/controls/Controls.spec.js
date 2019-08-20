// Test away!
import React from "react"; 
import renderer from "react-test-renderer"; 
import Controls from "./Controls.js"; 
import { render } from "react-testing-library"; 

describe("Button Defaluts to unlocked and open" , () => {
    it("Defaluts to unlocked", () => {
       const { getByText }  = render(<Controls />); 
       expect(getByText(/close gate/i)).toBeTruthy();     
    });
    it("Defaluts to unlocked", () => {
        const { getByText } = render(<Controls />); 
        expect(getByText(/lock gate/i)).toBeTruthy(); 
    })
});

describe('<Controls />', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Controls />); 
  
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
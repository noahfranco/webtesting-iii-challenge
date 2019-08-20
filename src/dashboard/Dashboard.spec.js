// Test away
import React from "react";
import Dashboard from "./Dashboard.js"; 
import renderer from "react-test-renderer";

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />); 
  
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
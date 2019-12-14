import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import {AddProject} from "./AddProject";
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

import sinon from 'sinon';
it("should create an entry in component state", () => {
    const component = renderer.create(
        <AddProject/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    const component1 = shallow(<AddProject />);
    const form = component1.find('input');
    const legend = <legend>Project Information</legend>;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(component1.contains(legend)).toBe(true)
});

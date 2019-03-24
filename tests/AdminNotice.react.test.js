import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import { AdminNotice } from "../lib/index.js";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Admin notice component is rendered', () => {
	test('renders', () => {
		const wrapper = shallow(<AdminNotice/>);

		expect(wrapper.exists()).toBe(true);
	});

	test('error class is rendered', () => {
		const wrapper = shallow(<AdminNotice type="error"/>);

		expect(wrapper.find('.notice')).toHaveLength(1);
		expect(wrapper.find('.notice-error')).toHaveLength(1);
		expect(wrapper.find('.inline')).toHaveLength(1);
	});

	test('info class is rendered', () => {
		const wrapper = shallow(<AdminNotice type="info"/>);

		expect(wrapper.find('.notice')).toHaveLength(1);
		expect(wrapper.find('.notice-info')).toHaveLength(1);
		expect(wrapper.find('.inline')).toHaveLength(1);
	});

	test('warning class is rendered', () => {
		const wrapper = shallow(<AdminNotice type="warning"/>);

		expect(wrapper.find('.notice')).toHaveLength(1);
		expect(wrapper.find('.notice-warning')).toHaveLength(1);
		expect(wrapper.find('.inline')).toHaveLength(1);
	});

	test('success class is rendered', () => {
		const wrapper = shallow(<AdminNotice />);

		expect(wrapper.find('.notice')).toHaveLength(1);
		expect(wrapper.find('.notice-success')).toHaveLength(1);
		expect(wrapper.find('.inline')).toHaveLength(1);
	});

	test('dismissible class is rendered', () => {
		const wrapper = shallow(<AdminNotice dismissible={true}/>);

		expect(wrapper.find('.notice')).toHaveLength(1);
		expect(wrapper.find('.notice-success')).toHaveLength(1);
		expect(wrapper.find('.inline')).toHaveLength(1);
		expect(wrapper.find('.is-dismissible')).toHaveLength(1);
	});
});
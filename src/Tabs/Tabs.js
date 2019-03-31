import React, {Component} from 'react';
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";

class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {activeIndex: 0}
	}

	handleTabHeaderClick = (tabIndex) => {
		if (tabIndex !== this.state.activeIndex) {
			this.setState({activeIndex: tabIndex});
		}
	};

	render() {
		return (<React.Fragment>
				<h2 className="nav-tab-wrapper">
					{this.props.tabs.map((tab, index) => (<TabHeader key={tab.name} isActive={index === this.state.activeIndex} tabIndex={index} tab={tab} onTabHeaderClick={this.handleTabHeaderClick}/>))}
				</h2>
				{this.props.tabs.map((tab, index) => (<TabContent key={tab.name} isActive={index === this.state.activeIndex} tabIndex={index} content={tab.content}/>))}
			</React.Fragment>)
	}
}

export default Tabs;

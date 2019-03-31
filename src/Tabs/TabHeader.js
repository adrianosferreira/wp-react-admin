import React, {Component} from 'react';

class TabHeader extends Component {
	render() {
		const tabclass = this.props.isActive ? 'nav-tab nav-tab-active' : 'nav-tab';

		return <div onClick={() => this.props.onTabHeaderClick(this.props.tabIndex)} className={tabclass}>{this.props.tab.title}</div>;
	}
}

export default TabHeader;

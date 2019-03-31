import React, {Component} from 'react';

class TabContent extends Component {
	render() {
		const style = {
			display: this.props.isActive ? 'block' : 'none'
		};

		return (<React.Fragment>
				<div className="wrap" style={style}>
					{this.props.content}
				</div>
			</React.Fragment>);
	}
}

export default TabContent;

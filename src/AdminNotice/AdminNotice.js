import React, {Component} from 'react';

class AdminNotice extends Component {

	constructor(props) {
		super(props);
		this.state = {opacity: 1};
	}

	decreaseOpacity() {
		setTimeout(() => {
			this.setState({opacity: this.state.opacity - 0.1});

			if ( this.state.opacity > 0 ) {
				this.decreaseOpacity();
			}
		}, 50)
	}

	componentDidMount() {
		if ( this.props.disappear ) {
			setTimeout(() => {
				this.decreaseOpacity();
			}, 3000);
		}
	}

	render() {
		let noticeClass = '';

		switch ( this.props.type ) {
			case 'error':
				noticeClass = 'notice notice-error inline';
				break;

			case 'warning':
				noticeClass = 'notice notice-warning inline';
				break;

			case 'info':
				noticeClass = 'notice notice-info inline';
				break;

			default:
				noticeClass = 'notice notice-success inline'
				break;
		}

		if ( this.props.dismissible ) {
			noticeClass += ' is-dismissible';
		}

		const style = {
			opacity: this.state.opacity,
			display: this.state.opacity > 0 ? 'block' : 'none',
		};

		return <div className={noticeClass} style={style}>
			<p>{this.props.message}</p>
		</div>
	}
}

export default AdminNotice;
import React from 'react'
import { IconButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'

class WidgetCloseControl extends React.Component {
	render() {
		return (
			<IconButton onTouchTap={this.props.onTouchTap}>
				<NavigationClose />
			</IconButton>
			);
	}
}

export default WidgetCloseControl
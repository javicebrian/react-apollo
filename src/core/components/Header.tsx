import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

interface HeaderProps {
	appName: string
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

function Header(props: HeaderProps) {
	const classes = useStyles();
	const {appName} = props;

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<IconButton edge="start"
										className={classes.menuButton}
										color="inherit"
										aria-label="menu">
					<MenuIcon/>
				</IconButton>
				<Typography variant="h6"
										color="inherit">
					{appName}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;

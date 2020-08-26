import { useMutation, useQuery } from '@apollo/react-hooks';
import { Box, Button, Card, CardContent, Container, TextField, Theme, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { UPDATE_STATE } from '../graphql/mutations';
import { GET_STATE_VALUE } from '../graphql/queries';

interface FormProps {
	defaultInput: string;
	setDefaultInput: Dispatch<SetStateAction<string>>;
}

const useStyles = makeStyles((theme: Theme) => ({
	cardContainer: {
		paddingBottom: 80,
		paddingTop: 80,
	},
	cardContent: {
		padding: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		minHeight: 400,
	},
	formContent: {
		width: '100%',
	},
	textField: {
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.secondary.main,
			},
		}
	},
	dirtyTextField: {
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.primary.main,
			},
		}
	},
	label: {
		marginTop: '32px',
		textAlign: 'center',
	}
}));


function Form(props: FormProps) {
	const {defaultInput, setDefaultInput} = props;
	const classes = useStyles();
	const {data} = useQuery(GET_STATE_VALUE);
	const [mutate] = useMutation(UPDATE_STATE);
	const [isDirty, setIsDirty] = useState(false);

	const handleChange = (event: any) => {
		setDefaultInput(event.target.value);
		setIsDirty(true);
	};

	const handleSubmit = (event: any) => {

		mutate({
			variables: {
				state: defaultInput
			}
		});
		setIsDirty(false);
		event.preventDefault();
	};

	return (
		<Container
			className={classes.cardContainer}
			maxWidth="sm"
		>
			<Card>
				<CardContent className={classes.cardContent}>
					<Box
						alignItems="center"
						display="flex"
						justifyContent="space-between"
						mb={3}
					>
						<div className={classes.formContent}>
							<form onSubmit={handleSubmit}
										onChange={handleChange}>
								<TextField
									className={isDirty? classes.dirtyTextField : classes.textField}
									fullWidth
									margin="normal"
									value={defaultInput}
									variant="outlined"
								/>
								<Button
									color="secondary"
									fullWidth
									size="large"
									type="submit"
									variant="contained"
								>
									Submit
								</Button>
							</form>
							<Typography
								className={classes.label}
								color="textPrimary"
								gutterBottom
								variant="h2"
							>
								{data.state}
							</Typography>
						</div>
					</Box>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Form;



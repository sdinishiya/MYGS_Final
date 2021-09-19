import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
//import Footer from '../Footer';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
	root: {
		width: '70%',
		marginLeft: 250,
		marginTop: 50,
		align: 'center',

	},
	button: {
		width: '70%',
		marginLeft: 1000,
		marginTop: 50,
		align: 'center',

	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '20%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	icon: {
		verticalAlign: 'bottom',
		height: 20,
		width: 20,
	},
	details: {
		alignItems: 'center',
	},
	column: {
		flexBasis: '20%',
	},
	helper: {
		borderLeft: `3px solid ${theme.palette.divider}`,
		padding: theme.spacing(1, 3),
	},

	link: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));

export default function ForumView() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<h1 >Forum Discussion </h1>
				<br />
				<br />
				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1c-content"
						id="panel1c-header"
					>
						<Typography className={classes.heading}>Mr.Anjun Perera</Typography>
						<Typography className={classes.heading}>When is the GS available?</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<div className={classes.column} />
						<div className={classes.helper}>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
								maximus est, id dignissim quam.
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button size="small" color="primary"> Reply</Button>
						<Button size="small" color="secondary">Report Post</Button>
					</AccordionActions>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1c-content"
						id="panel1c-header"
					>
						<Typography className={classes.heading}>Mr.Anjun Perera</Typography>
						<Typography className={classes.heading}>When is the GS available?</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<div className={classes.column} />
						<div className={classes.helper}>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
								maximus est, id dignissim quam.
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button size="small" color="primary"> Reply</Button>
						<Button size="small" color="secondary">Report Post</Button>
					</AccordionActions>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1c-content"
						id="panel1c-header"
					>
						<Typography className={classes.heading}>Mr.Anjun Perera</Typography>
						<Typography className={classes.heading}>When is the GS available?</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<div className={classes.column} />
						<div className={classes.helper}>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
								maximus est, id dignissim quam.
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button size="small" color="primary"> Reply</Button>
						<Button size="small" color="secondary">Report Post</Button>
					</AccordionActions>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1c-content"
						id="panel1c-header"
					>
						<Typography className={classes.heading}>Mr.Anjun Perera</Typography>
						<Typography className={classes.heading}>When is the GS available?</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<div className={classes.column} />
						<div className={classes.helper}>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
								maximus est, id dignissim quam.
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button size="small" color="primary"> Reply</Button>
						<Button size="small" color="secondary">Report Post</Button>
					</AccordionActions>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1c-content"
						id="panel1c-header"
					>
						<Typography className={classes.heading}>Mr.Anjun Perera</Typography>
						<Typography className={classes.heading}>When is the GS available?</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<div className={classes.column} />
						<div className={classes.helper}>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
								maximus est, id dignissim quam.
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button size="small" color="primary"> Reply</Button>
						<Button size="small" color="secondary">Report Post</Button>
					</AccordionActions>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1c-content"
						id="panel1c-header"
					>
						<Typography className={classes.heading}>Mr.Anjun Perera</Typography>
						<Typography className={classes.heading}>When is the GS available?</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<div className={classes.column} />
						<div className={classes.helper}>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
								maximus est, id dignissim quam.
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button size="small" color="primary"> Reply</Button>
						<Button size="small" color="secondary">Report Post</Button>
					</AccordionActions>
				</Accordion>
				{/* <Footer /> */}
				<div>
					<div className={classes.button}>

						<Button variant="contained" color="primary">
							<Link
								to='/Forum/AddForum'
								className='nav-links'
							>
								Add Forum Discussion
							</Link>

						</Button>

					</div>
				</div>
				<br />
			</div>

		</div>



	);
}
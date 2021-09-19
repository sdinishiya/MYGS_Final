import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 20,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserProjectReviewCard(props) {
  function delete_post(idd){

    axios.put(`http://localhost:3001/delete_project/${idd}`)
      .then(function (response) {
          // handle success
          props.setedit(!(props.edit));
          console.log(response.data);
          alert("Deleted Successfully!!!");
          window.location.href="admin";
      })
      .catch(function (error) {
          // handle error
          alert("error!!!!");
         console.log(error);
      })
      .then(function () {
          // always executed

      });

}


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const options = [
    'EDIT',
    'DELETE',
  ];
  
  const ITEM_HEIGHT = 48;
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (index,key) => {
    setAnchorEl(null);
  };

//   const actionbtn = (index) => {
//     // alert(index);
//     console.log(index.target.innerText);
//     console.log(index.target.value);
//     if  (index.target.innerText=='DELETE'){
//      if( window.confirm("are you sure you want to delete??")){
//         //delete
//         delete_post(index.target.value);
//      }
//     }else if  (index.target.innerText=='EDIT'){
//       window.location.href="/EditProject"+index.target.value;
//       // alert("edit page");
//     }

//     setAnchorEl(null);
//   };

   
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            PR
          </Avatar>
        }
        action={
          <div>
          {/* <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton> */}
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {/* {options.map((option) => (
              <MenuItem key={option} value={props.id} onClick={actionbtn}>
                {option}
              </MenuItem>
            ))} */}
          </Menu>
        </div>
        }
        title={props.title || 'Project Title'
        }
        subheader={props.subheader || 'Project Subheader'
      }
      />
      <CardMedia
        className={classes.media}
          image ={props.image || 'Project Image'
      }
          title={props.hovertitle || 'On Going Project'
        } 
         />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Read More</Typography>
          <Typography paragraph>
        a
          </Typography>
          <Typography paragraph>
          a
          </Typography>
          <Typography paragraph>
          a
          </Typography>
          <Typography>
          a </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}

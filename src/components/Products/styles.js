import { makeStyles } from '@material-ui/core/styles';
// import backgroundImg from '../../assets/bg-img2.jpg';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundImage : `url(${backgroundImg})` ,
    backgroundColor : '#735f7e',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

// theme.palette.background.default
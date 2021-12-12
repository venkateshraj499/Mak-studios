import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";



const useStyles = makeStyles((theme) => ({

  container:{
   textAlign:"center"
  },

  Icon:{
      paddingLeft:"10px",
      color:"#3c4e73 !important",
      fontSize:"25px !important",
      paddingTop:"95px",
      PaddingBottom:"40px",
      [theme.breakpoints.between("0", "1000")]: {
        PaddingBottom:"20px",  
        marginLeft:"auto" ,
        marginRight:"auto",
        paddingLeft:"7px",
        paddingTop:"70px",

      },
  },
  copyright:{
    paddingLeft:"15px", 
    paddingBottom:"80px",
    [theme.breakpoints.between("0", "1000")]: {
      PaddingBottom:"40px",  
      marginLeft:"auto" ,
      marginRight:"auto",
      paddingLeft:"15px", 
      fontSize:"14px"
     
    },
  },
  link:{
    textDecoration:"none"
  }


}));

function FooterContact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    
    
    <a href="https://www.facebook.com/mohan.vijay.1023" className={classes.link} ><FacebookIcon  className={classes.Icon}/> </a>
         
     <a href="https://instagram.com/_mohan_mak_?utm_medium=copy_link" className={classes.link}><InstagramIcon  className={classes.Icon}/> </a>

     <a href="https://www.youtube.com" className={classes.link}><WhatsAppIcon  className={classes.Icon}/> </a>

     <a href="Mohanvhss@gmail.com" className={classes.link}><EmailIcon  className={classes.Icon}/> </a>
         <br></br>

     <Typography variant="body1" className={classes.copyright}> &copy; Copyright 2021</Typography>
      
    
      
    </div>
  );
}

export default FooterContact;

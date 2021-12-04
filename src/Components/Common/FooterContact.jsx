import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';



const useStyles = makeStyles((theme) => ({

  container:{
   textAlign:"center"
  },

  Icon:{
      paddingLeft:"20px",
      color:"#3c4e73 !important",
      fontSize:"45px !important",
      paddingTop:"95px",
      PaddingBottom:"40px"
  },
  copyright:{
    paddingLeft:"25px", 
    paddingBottom:"80px"
  }


}));

function FooterContact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    
    
         <FacebookIcon  className={classes.Icon}/>
         <InstagramIcon  className={classes.Icon}/>
        
         <EmailIcon  className={classes.Icon}/>
         <br></br>

         <Typography variant="body1" className={classes.copyright}> &copy; Copyright 2021</Typography>
      
    
      
    </div>
  );
}

export default FooterContact;

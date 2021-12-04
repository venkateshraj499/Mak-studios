import React from "react";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const useStyles = makeStyles((theme) => ({

  container:{
   textAlign:"center"
  },

  Icon:{
      paddingLeft:"20px",
  },


}));

function FooterContact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
  
    
         <FacebookIcon  className={classes.Icon}/>
         <InstagramIcon  className={classes.Icon}/>
         <WhatsAppIcon  className={classes.Icon}/>
         <EmailIcon  className={classes.Icon}/>
      
    
      
    </div>
  );
}

export default FooterContact;

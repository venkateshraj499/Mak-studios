/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },

  content:{
   width:"80%",
   //margin:"0 auto",
   position:"absolute",
   paddingLeft:"174px",
   marginTop:"-470px"
  },
  heading: {
    fontFamily:
      " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-seri !important",
  },

  subtitle: {
    fontFamily:
      " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-seri !important",
  },
  map: {
    textAlign: "center",
  },
  iframe: {
    border: "none",
  },
  image: {
    marginTop: "-50px",
    width: "100%",
    objectFit: "contain",
   // height:"580px"
  },
  Icon:{
    color:"#32CD30 !important",
    paddingTop:"25px",
    paddingBottom:"12px",
    fontSize: "70px !important"
  },

  boxes:{
    display:"flex",
    width:"60%",
    margin:"0 auto",
   // position:"absolute",
    marginTop:"-200px",
  
  },
  box1:{
    border:"1px solid black transparant",
    width:"350px",
    borderRadius:"6px",
    boxShadow:" 3px 2px 3px 2px grey",
    textAlign:"center",
    background:"white"
   

  },
  box2:{
    border:"1px solid black transparant",
    width:"350px",
    borderRadius:"6px",
    boxShadow:" 3px 2px 3px 2px grey",
    textAlign:"center",
    marginLeft:"136px",
    background:"white"

  },
  box_content:{
    paddingLeft:"25px",
    paddingBottom:"18px",
    paddingRight:"25px",
  },
  phone:{
    paddingBottom:"25px"
  }
  
 
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src="/contact.jpg" alt="no-img" className={classes.image} />


      <div className={classes.content}>
      <Typography variant="h3"  className={classes.heading}>
        GET IN TOUCH
      </Typography>
       
      <Typography  variant="body1" className={classes.subtitle}>
        Want to get in touch? We'd love to hear from you.<br></br>
        Here's how you can reach us....
        </Typography>
      </div>
      {
      // for the  boxes
      }
      <div className={classes.boxes}>

        <div className={classes.box1}>
        
            <WhatsAppIcon  className={classes.Icon}/>
             
             <Typography variant="h6" className={classes.box_content}>
               Interested in Photoshoot??<br></br>
               Simply, pick up the phone to chat with<br></br>
               a member of our team.
               <br></br>
             
             </Typography>
             <Typography variant="h5" className={classes.phone}>+91 1234567890</Typography>
        </div>

        <div className={classes.box2}>

        </div>
      </div>
     
     
      <Typography variant="h6" align="center">Puducherry</Typography>
      <Typography variant="h6" align="center">Muthialpet</Typography>

      <div className={classes.map}>
        <iframe
          id="iframeid"
          width="80%"
          height="300"
          className={classes.iframe}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Muthialpet,%20Pondicherry+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>


      <FooterContact />
    </div>
  );
}

export default Contact;

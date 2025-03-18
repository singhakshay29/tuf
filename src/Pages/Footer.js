import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X"; // This is from Material-UI for the Twitter (X) logo
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#343434",
        color: "#fff",
        display:"flex",
        flexDirection:"column",
        marginLeft:"5px",
         marginRight:"5px",
         borderRadius:"10px",
         minHeight:"500px",
         justifyContent:"space-between"
      }}>
      <Box
        sx={{
          backgroundColor: "#343434",
          borderRadius: "12px",
          padding: "30px",
        }}>
        {/* Top Section */}
        <Box sx={{display:'flex',flexDirection:"column",gap:2}}>
            
        <img src={logo} alt="logo" className="navbar-logo" />
        <Typography variant='body1'  fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',width:"25rem" }}>
          USDT Marketplace is the brand operated by GSX Solutions Pvt Ltd based
          in Delhi, India.
        </Typography>
        </Box>

        <hr style={{ border: "0.5px solid #444", margin: "20px 0" }} />

        <Grid container spacing={4} justifyContent="space-between">
      
          <Grid item xs={12} sm={3} >
            <Typography variant='h6' fontFamily='Figtree' fontWeight='bold'>
              Address
            </Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',mt:2 }}>
              DLF Towers, Moti Nagar, Karampura Industrial Area, Karam Pura,
              Delhi, 110015, India
            </Typography>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant='h6' fontFamily='Figtree' fontWeight='bold'>
              Info
            </Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',mt:2}}>About</Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',mt:1}}>Blog</Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',mt:1}}>FAQs</Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',mt:1}}>Feedback</Typography>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant='h6' fontFamily='Figtree' fontWeight='bold'>
              Contact us
            </Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF',mt:2}}>+1 891 989-11-91</Typography>
            <Typography variant='body2' fontFamily='Figtree' sx={{ opacity: 0.8,color:'#FFFFFF'}}>support@usdtmarketplace.com</Typography>
          </Grid>
          <Grid item xs={12} sm={2} gap={8} >
              <IconButton sx={{ backgroundColor: "#444", color: "#fff" }}>
                <TelegramIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#444", color: "#fff" }}>
                <XIcon />
              </IconButton>
            </Grid>
        </Grid>
      </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding:"10px 25px",
          }}>
            <Box sx={{display:"flex",justifyContent:"space-between",minWidth:"500px"}}>   
          <Typography variant='body2' sx={{ opacity: 0.7 }}>
            © 2023 — Copyright
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant='body2' sx={{ opacity: 0.7 }}>
              Terms
            </Typography>
            <Typography variant='body2' sx={{ opacity: 0.7 }}>
              Privacy
            </Typography>
          </Box>
            </Box>

          {/* Scroll to Top Button */}
          <IconButton
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": { backgroundColor: "#ddd" },
            }}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
    </Box>
  );
};

export default Footer;

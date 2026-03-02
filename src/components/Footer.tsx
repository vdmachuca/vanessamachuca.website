import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/vdmachuca" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/vanessa-machuca/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Created by Vanessa Machuca
        <br/>Original website template by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer" style={{color: '#2E7DB8'}}>Yuji Sato</a>
      </p>    
    </footer>
  );
}

export default Footer;

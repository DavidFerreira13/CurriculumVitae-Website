import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AboutMe from '../Images/Icons/AboutMe.ico'
import Contacts from '../Images/Icons/contacts.ico'
import EducationalHistory from '../Images/Icons/educationalHistory.ico'
import Hobbies from '../Images/Icons/hobbies.ico'
import Portfolio from '../Images/Icons/portfolio.ico'
import ProfessionalExperience from '../Images/Icons/professionalExperience.ico'
import Skills from '../Images/Icons/skills.ico'

export default function MenuOptions(){

    return(
        <React.Fragment>
            <List>
                <ListItem button key="About Me" component={RouterLink} to="/about-me" >
                    <ListItemIcon><img src={AboutMe} alt="About-Me" width="30px" height="auto" /></ListItemIcon>
                    <ListItemText primary="About Me" />
                </ListItem>

                <ListItem button key="Educational History" component={RouterLink} to="/educational-history" >
                    <ListItemIcon><img src={EducationalHistory} alt="About-Me" width="30px" height="auto" /></ListItemIcon>
                    <ListItemText primary="Educational History" />
                </ListItem>

                <ListItem button key="Skills" component={RouterLink} to="/skills" >
                    <ListItemIcon><img src={Skills} alt="About-Me" width="44px" height="auto" /></ListItemIcon>
                    <ListItemText primary="Skills" />
                </ListItem>

                <ListItem button key="Professional Experience" component={RouterLink} to="/professional-experience" >
                    <ListItemIcon><img src={ProfessionalExperience} alt="About-Me" width="30px" height="auto" /></ListItemIcon>
                    <ListItemText primary="Professional Experience" />
                </ListItem>
                 
                <ListItem button key="Portfolio" component={RouterLink} to="/portfolio" >
                    <ListItemIcon><img src={Portfolio} alt="About-Me" width="30px" height="auto" /></ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItem>
            </List>

            <Divider />
            
            <List>
                <ListItem button key="Hobbies" component={RouterLink} to="/hobbies" >
                    <ListItemIcon><img src={Hobbies} alt="About-Me" width="30px" height="auto" /></ListItemIcon>
                    <ListItemText primary="Hobbies" />
                </ListItem>
                <ListItem button key="Contact Information" component={RouterLink} to="/contact-me" >
                    <ListItemIcon><img src={Contacts} alt="About-Me" width="30px" height="auto" /></ListItemIcon>
                    <ListItemText primary="Contact Information" />
                </ListItem>
            </List>
        </React.Fragment>
    )
}
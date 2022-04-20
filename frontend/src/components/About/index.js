import React from 'react'
import { useStyles } from './styles'
import TextField from '@mui/material/TextField';
import Header from './../contain/Header/index';
import Footer from './../contain/Footer/index';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
export default function About() {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <div className={classes.contain}>
                <div className={classes.banner}>
                    <Typography className={classes.smalltitlePage} variant="h6" align="center" >KNOW MORE</Typography>
                    <Typography className={classes.titlePage} variant="h1" align="center" >About us</Typography>

                </div>
                <div className={classes.content}>
                    <Typography className={classes.titleWeb} variant="h1" align="center" >PHONE STORE</Typography>
                    <Typography className={classes.textMember} variant="h6" >Member</Typography>
                    <Grid container spacing={3}>
                        {['Phạm Văn Đat', "Phạm Trường Giang", "Nguyễn Long Kim", "Hoang Vuong"].map((element) => (
                            <Grid item xs={3} key={element}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        {/* <CardMedia
                                            className={classes.media}
                                            image={''}
                                        /> */}
                                        <AccountBoxIcon className={classes.avatar}/>
                                        <CardContent>
                                            <Typography className={classes.title} gutterBottom variant="h5" component="h5" align="center">
                                                {element}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}

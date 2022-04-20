// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={8}>
            <div className="footer__contain">
              <div className="col">
                <span className="footer__link">Introduce about the company </span>
                <span className="footer__link">Privacy Policy</span>
                <span className="footer__link">Check e-invoices</span>
                <span className="footer__link">Look up warranty information</span>
                <span className="footer__link">Purchase FAQ</span>
              </div>
              <div className="col">
                <span className="footer__link">Recruitment</span>
                <span className="footer__link">Promotion information</span>
                <span className="footer__link">Guide to buying online</span>
                <span className="footer__link">Installment purchase guide</span>
                <span className="footer__link">Installment Policy</span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">ADDRESS</h4>

              <div className="footer__contact">
                <PhoneInTalkOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">+123456789</span>
              </div>

              <div className="footer__contact">
                <SpeakerNotesOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">bachkhoa@gmail.com</span>
              </div>

              <div className="footer__contact">
                <BusinessOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">
                  TP Hồ Chí Minh, Việt Nam
                </span>
              </div>
              <div className="footer__contact footer__contact--icons">
                <FacebookIcon style={{ fill: "#2D88FF" }} />
                <TwitterIcon style={{ fill: "#5DA9DD" }} />
                <InstagramIcon style={{ fill: "#F56040" }} />
                <YouTubeIcon style={{ fill: "#FF0000" }} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;

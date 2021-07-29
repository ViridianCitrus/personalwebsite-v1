import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            {/*<section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Contact
                </p>
                 <p
                    className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
             <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                    </div>
                </div>
            </div> */}
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Kevin Wang © 2021</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link github'
                            href='https://github.com/ViridianCitrus'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i class="fab fa-github" />
                        </a>
                        <a
                            class='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/kevinxrwang/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                        <a
                            class='social-icon-link mail'
                            href='mailto:kevin.xiaorui.wang@gmail.com'
                            target='_blank'
                            aria-label='Mail'
                        >
                            <i class="far fa-envelope" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
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

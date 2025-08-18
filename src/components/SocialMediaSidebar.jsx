import React from 'react';
import '../styles/SocialMediaSidebar.css';

const SocialMediaSidebar = () => {
  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/share/15h83AeCpg/',
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/durkkasinfo.tech?igsh=enh3Yzd6eDd4bDEy',
      color: '#e4405f'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/company/durkkasinfotech/',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://x.com/durkkasinfotec?t=4DmNZEVDiFD8sPnWs_xS9w&s=08',
      color: '#1da1f2'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/@durkkasinfotech',
      color: '#ff0000'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/919361535050',
      color: '#25d366'
    }
  ];

  return (
    <div className="social-media-sidebar">
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-item"
          style={{ '--hover-color': social.color }}
        >
          <div className="social-icon">
            <i className={social.icon}></i>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaSidebar;

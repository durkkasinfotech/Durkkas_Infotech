import React, { useState, useEffect } from 'react';

const SocialMediaSidebar = () => {
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(false);

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

  useEffect(() => {
    const checkBackgroundColor = () => {
      const sidebar = document.querySelector('.social-media-sidebar');
      if (!sidebar) return;

      const rect = sidebar.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const elementAtCenter = document.elementFromPoint(centerX, centerY);
      
      if (elementAtCenter) {
        let currentElement = elementAtCenter;
        let hasDarkBackground = false;

        while (currentElement && currentElement !== document.body) {
          if (currentElement.classList && 
              (currentElement.classList.contains('bg-primary') || 
               currentElement.classList.contains('bg-blue') ||
               currentElement.classList.contains('bg-dark'))) {
            hasDarkBackground = true;
            break;
          }
          currentElement = currentElement.parentElement;
        }

        setIsOnDarkBackground(hasDarkBackground);
      }
    };

    let timeoutId;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkBackgroundColor, 10);
    };

    window.addEventListener('scroll', throttledCheck);
    window.addEventListener('resize', throttledCheck);
    checkBackgroundColor();

    return () => {
      window.removeEventListener('scroll', throttledCheck);
      window.removeEventListener('resize', throttledCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      className="social-media-sidebar" 
      style={{
        position: 'fixed',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '8px'
      }}
    >
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: social.color,
            color: '#ffffff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <i className={`${social.icon}`} style={{ fontSize: '18px' }}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaSidebar;
import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();;
    return (
        <div className='p-4'>
            <p className='text-center mb-0'>Copyright &copy; {year}. Developed by <a className='text-decoration-none text-dark fw-bold' href="https://github.com/abdullaalfahad">Abdulla Al Fahad</a></p>
        </div>
    );
};

export default Footer;
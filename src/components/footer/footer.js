import React from "react";
import Link from "../link";
import './footer.css';

import twitter from '../../assets/IconSocial/twitter.png'
import facebook from '../../assets/IconSocial/facebook.png';
import github from '../../assets/IconSocial/GitHub.png';

const Footer = () => {
    return (
        <>
        <div className={'linkSocial'}>
            <Link
                url={'https://github.com/'}
                alt={'github.com'}
                src={github}/>
            <Link
                url={'https://www.facebook.com/'}
                alt={'facebook.com'}
                src={facebook}/>
            <Link
                url={'https://investor.twitterinc.com/home/default.aspx'}
                alt={'twitter.com'}
                src={twitter}/>
        </div>
            <div className={'footer'}></div>
        </>
    )
}

export default Footer;
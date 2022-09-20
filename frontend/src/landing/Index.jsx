import React from 'react';
import { Hero } from './Hero';
import { Streamers } from './Streamers';
import { Contact } from './Contact';
import { accountService } from '@/_services';

function Landing() {
    const user = accountService.userValue;
    
    return (
        <div>
            <Hero />
            <Streamers />
            <Contact />
        </div>
    );
}

export { Landing };
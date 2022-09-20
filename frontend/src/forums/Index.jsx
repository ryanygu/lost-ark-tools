import React from 'react';
import { accountService } from '@/_services';

function Forums() {
    const user = accountService.userValue;
    
    return (
      <div className="p-4">
        <div className="container" id="forums">
              <h1>Forums</h1>
              <h3 className="mt-5"><span className="highlight">Work in progress...</span></h3>
        </div>
      </div>
    );
}

export { Forums };
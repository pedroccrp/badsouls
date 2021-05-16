import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';

import './index.scss';

const Header = () => {
  const history = useHistory();

  let content;

  // TODO: Change true to isLogged or something
  if (false) {
    content = (
      <div className='content'>
        <div className='left-side'>
          <Button value='Home' />
          <Button value='Characters' />
          <Button value='Adventures' />
        </div>
        <div className='right-side'>
          <Button value='Logout' />
          <Button value='Account' />
        </div>
      </div>
    );
  } else {
    content = (
      <div className='content'>
        <div className='left-side'>
          <Button value='Home' onClick={e => history.push('/')} />
        </div>
        <div className='right-side'>
          <Button value='Register' onClick={e => history.push('/register')} />
          <Button value='Login' onClick={e => history.push('/login')} />
        </div>
      </div>
    );
  }

  return <div id='header-container'>{content}</div>;
};

export default Header;

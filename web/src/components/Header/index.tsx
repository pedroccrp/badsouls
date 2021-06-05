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
          <Button defaultValue='Home' />
          <Button defaultValue='Characters' />
          <Button defaultValue='Adventures' />
        </div>
        <div className='right-side'>
          <Button defaultValue='Logout' />
          <Button defaultValue='Account' />
        </div>
      </div>
    );
  } else {
    content = (
      <div className='content'>
        <div className='left-side'>
          <Button defaultValue='Home' onClick={e => history.push('/')} />
        </div>
        <div className='right-side'>
          <Button
            defaultValue='Register'
            onClick={e => history.push('/register')}
          />
          <Button defaultValue='Login' onClick={e => history.push('/login')} />
        </div>
      </div>
    );
  }

  return <div id='header-container'>{content}</div>;
};

export default Header;

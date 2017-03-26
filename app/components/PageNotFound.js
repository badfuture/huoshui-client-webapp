import React from 'react';
import {Link} from 'react-router-dom'
import stylePageNotFound from '../styles/custom/PageNotFound.css'

class PageNotFound extends React.Component {
  render(){
    return (
      <div className='not-found'>
        <h1>404</h1>
        <h2>页面被吞了!</h2>
        <p>
          <Link to="/">回到主页</Link>
        </p>
      </div>
    )
  }
}

export default PageNotFound

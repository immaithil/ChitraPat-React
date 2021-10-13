import React from "react";
import Photo from "./photo";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function ChitraPat(props) {
  return (
    <div>
        <Link onClick={props.onNavigate} to='/AddPhoto'  className='add-icon'> </Link>
     
      <div className="photo-grid">
        {props.posts.sort(function(x,y){
          return y.id-x.id;
        }).map((post, idx) => (
          <Photo key={idx} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

ChitraPat.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default ChitraPat;

import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileExperience = props => {
  const { company, title, from, to, current, description } = props.experience;

  return (
    <div>
      <h3 class="text-dark">{company}</h3>
      <p><Moment format='DD/MM/YYY'>{from}</Moment> - {current ? 'Now' : <Moment format='DD/MM/YYY'>{to}</Moment>}</p>
      <p><strong>Position: </strong>{title}</p>
      <p>
        <strong>Description: </strong>{description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ProfileExperience;
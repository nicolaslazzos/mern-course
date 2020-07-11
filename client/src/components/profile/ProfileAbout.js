import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = props => {
  const { bio, skills, user: { name } } = props.profile;

  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <React.Fragment>
          <h2 class="text-primary">{name.trim().split(' ')[0]} Bio</h2>
          <p>{bio}</p>
          <div class="line"></div>
        </React.Fragment>
      )}
      <h2 class="text-primary">Skill Set</h2>
      <div class="skills">
        {skills.map((skill, index) => <div class="p-1" key={index}><i class="fa fa-check"></i>{` ${skill}`}</div>)}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout;
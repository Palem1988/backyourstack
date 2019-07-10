import React, { Fragment } from 'react';

const SaveProfile = ({ onClickSaveProfile, savedFileUrls }) => {
  return (
    <Fragment>
      <style jsx>
        {`
          .saveProfileWrapper {
            width: 100%;
            margin: 20px 0;
          }
          .savedFileUrlContainer label {
            font-size: 15px;
            font-weight: 600;
          }
          .savedFileUrlContainer input {
            width: 94%;
            height: 10px;
            padding: 10px;
          }
          .saveProfileBtn {
            cursor: pointer;
          }
        `}
      </style>
      <div className="saveProfileWrapper">
        {savedFileUrls && (
          <div key={savedFileUrls.key} className="savedFileUrlContainer">
            <label>Saved File Url</label>
            <input type="url" value={savedFileUrls.Location} />
          </div>
        )}
        {!savedFileUrls && (
          <button
            className="bigButton saveProfileBtn"
            onClick={onClickSaveProfile}
          >
            Save profile
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default SaveProfile;
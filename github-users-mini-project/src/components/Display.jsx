/* eslint-disable react/prop-types */
import '../styles/display.css';

const Display = ({ searchedName, isLoading }) => {
  if (searchedName === null) {
    return null;
  } else if (isLoading === true) {
    return <div className="display-container">Loading...</div>;
  } else if (searchedName === 'not-found') {
    return <div className="display-container">User not found.</div>;
  }

  return (
    <div className="display-container">
      <div className="display-info-box">
        <div className="picAndName">
          <img
            className="pic"
            src={searchedName.avatar_url}
            alt="Profile Pic"
          />
          <h1 className="category">
            Username:<span className="move-right">{searchedName.login}</span>
          </h1>
        </div>
        <div className="info">
          <h3 className="category">
            Location:{' '}
            <span className="move-right">{searchedName.location}</span>
          </h3>
          <h3 className="category">
            Public repositories:{' '}
            <span className="move-right">{searchedName.public_repos}</span>
          </h3>
          <h3 className="category">
            Following:{' '}
            <span className="move-right">{searchedName.following}</span>
          </h3>
          <h3 className="category">
            Followers:{' '}
            <span className="move-right">{searchedName.followers}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Display;

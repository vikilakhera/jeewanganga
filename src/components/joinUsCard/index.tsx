import './joinUsCard.css';

function JoinUsCard(props: any) {
  const { heading, text } = props;

  return (
    <div className="jucWrapper">
      <div className="jucContent">
        <h2 className="jucHeading">
          {heading}
        </h2>
        <p className="jucText">
          {text}
        </p>
        <div className='jucJoinButtonWrapper'>
          <button className='jucJoinButton'>
            Join Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinUsCard;
import * as React from 'react';

const ErrorCard: React.FC<Error> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.message}</h2>
      <p>{props.stack}</p>
    </div>
  );
};

export default ErrorCard;

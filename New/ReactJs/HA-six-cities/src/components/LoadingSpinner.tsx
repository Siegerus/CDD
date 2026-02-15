import React from 'react';

type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <div
      style={{
        zIndex: '100',
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '11px 23px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '7px',
        backgroundColor: '#f5f5f5',
        fontSize: '36px',
        fontWeight: '700',
        color: '#4481c3',
      }}>
      Loading...
    </div>
  );
};

export default LoadingSpinner;

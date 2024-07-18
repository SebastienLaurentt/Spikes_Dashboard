import React from 'react';

interface StatueCircleProps {
  status: 'Pending' | 'Cancelled' | 'Ongoing' | 'Waiting' | 'Completed';
}

const StatueCircle: React.FC<StatueCircleProps> = ({ status }) => {
  const getColor = (status: StatueCircleProps['status']): string => {
    switch (status) {
      case 'Pending':
        return '#ECB30A';
      case 'Cancelled':
        return '#EC0A0A';
      case 'Ongoing':
        return '#2AD730';
      case 'Waiting':
        return '#960AEC';
      case 'Completed':
        return '#0085FF';
      default:
        return '#000000'; // couleur par défaut au cas où le statut ne correspondrait à aucune option
    }
  };

  return (
    <span
      className="size-1.5 rounded-full"
      style={{ backgroundColor: getColor(status) }}
    ></span>
  );
};

export default StatueCircle;

import React from 'react';
import { useLocation } from 'react-router-dom';
import CommunityForm from '../../views/CommunityForm';

function CommunityEdit() {
  const location = useLocation();
  const { currentNotice } = location.state || {};

  return <CommunityForm isEditing data={currentNotice?.data} />;
}

export default CommunityEdit;

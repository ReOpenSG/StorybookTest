import { useLocation, useParams } from 'react-router-dom';
import CommunityForm from './CommunityForm';

function CommunityEdit() {
  const location = useLocation();
  const { currentNotice } = location.state || {};

  return <CommunityForm isEditing data={currentNotice?.data} />;
}

export default CommunityEdit;

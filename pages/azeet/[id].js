import React from 'react';
import { useRouter } from 'next/router';

const Azeet = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      User Id :
      {id}
    </div>
  );
};

export default Azeet;

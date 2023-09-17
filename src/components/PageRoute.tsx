import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function PageRoute() {

  const history = useHistory();
  
  useEffect(() => {

     history.push("/api/");
  }, []);

  return (
     <></>
  );
}
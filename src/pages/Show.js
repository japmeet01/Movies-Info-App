import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Api_get } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  useEffect(() => {
    Api_get(`/shows/?${id}embed[]=seasons&embed[]=cast`).then(result => {
      setShow(result);
    });
  }, [id]);

  return <div>Show Page</div>;
};

export default Show;

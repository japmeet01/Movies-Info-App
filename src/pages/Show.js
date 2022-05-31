import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { api_get } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    let isMounted = true;
    api_get(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(result => {
        if (isMounted) {
          setShow(result);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setErrors(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div>Data is being Loaded. Please Wait....</div>;
  }
  if (errors) {
    return <div>Error Occured:{errors}</div>;
  }

  return <div>Show Page</div>;
};

export default Show;

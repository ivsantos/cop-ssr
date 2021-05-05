import React, {useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CatGrid = ({ fetchInitialData, staticContext }) => {
  const [cats, setCats] = useState(() => (__isBrowser__
    ? window.__INITIAL_DATA__
    : staticContext.data));

  const [loading, setLoading] = useState(!cats);
  const fetchNewCats = useRef(!cats);

  const { tag } = useParams();

  useEffect(() => {
    if (fetchNewCats.current === true) {
      setLoading(true);

      fetchInitialData(tag)
        .then((data) => {
          setCats(data);
          setLoading(false);
        });
    } else {
      fetchNewCats.current = true;
    }
  }, [tag]);

  if (loading === true) {
    return <i className="loading">🐱</i>;
  }

  return (
    <div className="grid">
      {cats.map(({id}) => (
        <div className="gridItem" key={id}>
          <img src={`https://cataas.com/cat/${id}`} />
        </div>
      ))}
    </div>
  );
};

export default CatGrid;

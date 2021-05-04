import React, {useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CatGrid = ({ fetchInitialData, staticContext }) => {
  const [cats, setCats] = useState(() => (__isBrowser__
    ? window.__INITIAL_DATA__
    : staticContext.data));
  console.log({ cats });
  console.log({ __isBrowser__ });

  const [loading, setLoading] = useState(!cats);

  const fetchNewCats = useRef(!cats);

  const { tag } = useParams();

  useEffect(() => {
    if (fetchNewCats.current === true) {
      setLoading(true);

      fetchInitialData(tag)
        .then((data) => {
          setTimeout(() => {
            setCats(data);
            setLoading(false);
          }, 1000)
        });
    } else {
      fetchNewCats.current = true;
    }
  }, [tag, fetchNewCats]);

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

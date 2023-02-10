import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';

import { CardProduct } from '../CardProduct';
import styles from './Cards.module.scss';

const { wrapperContainer } = styles;

const Cards = () => {
  const [limit, setLimit] = useState(10);

  const { products, isLoading, hasMore, fetchData } = useContext(ProductCtx);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastProduct = useCallback(
    (node: Element) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLimit((prev) => prev + 10);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  return (
    <div className={wrapperContainer}>
      {products.map((product, index) => {
        if (products.length === index + 1) {
          return (
            <Link to={`books/${index + 1}`}>
              <CardProduct
                key={`${index} ${product.title}`}
                {...product}
                innerRef={lastProduct}
              />
            </Link>
          );
        } else {
          return (
            <Link to={`books/${index + 1}`}>
              <CardProduct key={`${index} ${product.title}`} {...product} />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Cards;

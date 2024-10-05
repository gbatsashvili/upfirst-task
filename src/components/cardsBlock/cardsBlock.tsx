import { useEffect, useState } from "react";
import CardBlockItem from "./cardBlockItem";
import { CardsBlockStyled, RenderDataContainer } from "./cardsBlock.styled";
import Pagination from "../pagination/pagination";

const CardsBlock = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [pagination, setPagination] = useState<{
    currentPage: number;
    limit: number;
    total: number;
  }>({
    currentPage: 1,
    limit: 10,
    total: 0,
  });

  const deleteCardHandler = (id: string) => {
    const newData = [...data];
    const res = newData.filter((item: any) => item.objectID !== id);
    setData(res);
  };

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?tags=front_page&page=${pagination.currentPage}&hitsPerPage=${pagination.limit}`
      );
      const response = await res.json();
      setData(response.hits);
      setPagination({
        ...pagination,
        currentPage: response.page,
        total: response.nbHits,
      });
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [pagination.currentPage]);

  const handlePagination = (page: number): void => {
    setPagination({
      ...pagination,
      currentPage: page,
    });
  };

  const RenderData = (): JSX.Element => {
    if (!loading && !error && data.length === 0) {
      return <div className="errorOrNoData">No Data</div>;
    }
    if (loading)
      return (
        <div className="lds-ripple loading">
          <div></div>
          <div></div>
        </div>
      );

    if (!loading && data && !error) {
      return (
        <div>
          {data.map((item: any) => {
            return (
              <CardBlockItem
                key={item.created_at}
                item={item}
                deleteCardHandler={deleteCardHandler}
              />
            );
          })}
        </div>
      );
    }
    if (!loading && error) {
      return <div className="errorOrNoData">No Data</div>;
    }

    return <></>;
  };

  return (
    <CardsBlockStyled>
      <RenderDataContainer>
        <RenderData />
      </RenderDataContainer>
      <Pagination
        total={pagination.total}
        limit={10}
        currentPage={pagination.currentPage}
        handlePagination={handlePagination}
      />
    </CardsBlockStyled>
  );
};

export default CardsBlock;

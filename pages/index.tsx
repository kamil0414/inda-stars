import axios from 'axios';
import Layout from 'components/Layout';
import { useEffect, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';
import OCards from '../components/organisms/o-cards';
import cardsMock from '../mocks/cards.json';

export default function Index() {
  const [cards, setCards] = useState<any>([]);

  const endpointUrl = '/api/user/123/cards';
  const getData = async () => axios.get(endpointUrl).then((res) => setCards(res.data));

  useEffect(() => {
    const mock = new MockAdapter(axios);
    mock.onGet(endpointUrl).reply(200, cardsMock);
    getData();
  }, []);

  const sortOptions = [
    { value: 'Received (Newest)', key: 'receivedOn' },
    { value: 'Collection name (A-Z)', key: 'collectionName' },
  ];

  return (
    <Layout>
      <OCards
        className="mb-10"
        cards={cards.cards}
        totalCount={cards.totalCount}
        totalLabel="cards in total"
        sortByLabel="Sort by"
        sortOptions={sortOptions}
      />
    </Layout>
  );
}

import { Helmet, HelmetProvider } from 'react-helmet-async';

import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import PhonebookList from 'components/PhonebookList/PhonebookList';
import Filter from 'components/PhonebookFilter/PhonebookFilter';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook📱</title>
        </Helmet>
        <PhonebookForm />
        <h2>Contacts</h2>
        <Filter />
        <PhonebookList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;

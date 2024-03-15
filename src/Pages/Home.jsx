import { TfiAgenda } from 'react-icons/tfi';

const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center',
  },
};

const Home = () => (
  <div style={styles.container}>
    <p>
      <TfiAgenda size="75" fill="#2b35c2" />
    </p>
    <h1 style={styles.title}>Your personal phonebook</h1>
  </div>
);

export default Home;

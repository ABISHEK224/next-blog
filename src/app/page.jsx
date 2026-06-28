import CategoryList from '@/components/CategoryList/CategoryList';
import styles from './homepage.module.css';
import Menu from '@/components/Menu/Menu';
import Featured from '@/components/Featured/Featured';
import CardList from '@/components/Cardlist/CardList';

export default function Home() {
  return <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.cardlist}>
      <CardList/>
      <Menu/>
    </div>
  </div>;
}

import styles from "./index.module.css"
import { useNavigate } from 'react-router-dom';

function Teacher() {

  const navigate = useNavigate();

  function handleGroup() {
    navigate("/group")
  }

  return (
    <div className={styles.home}>
      <h1>Ustoz paneli</h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>ID</th>
              <th>Guruh</th>
              <th>O'quvchilar soni</th>
              <th>Dars Kunlari</th>
              <th>Dars vaqti</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.id}>23456</td>
              <td onClick={handleGroup} className={styles.group}>Beginner 1</td>
              <td>18</td>
              <td>Dushanba, Chorshanba, Juma</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td className={styles.id}>23456</td>
              <td onClick={handleGroup} className={styles.group}>Beginner 1</td>
              <td>18</td>
              <td>Dushanba, Chorshanba, Juma</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td className={styles.id}>23456</td>
              <td onClick={handleGroup} className={styles.group}>Beginner 1</td>
              <td>18</td>
              <td>Dushanba, Chorshanba, Juma</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td className={styles.id}>23456</td>
              <td onClick={handleGroup} className={styles.group}>Beginner 1</td>
              <td>18</td>
              <td>Dushanba, Chorshanba, Juma</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td className={styles.id}>23456</td>
              <td onClick={handleGroup} className={styles.group}>Beginner 1</td>
              <td>18</td>
              <td>Dushanba, Chorshanba, Juma</td>
              <td>14:00</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Teacher

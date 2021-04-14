import {
  Container,
  Header,
  Ornament,
  Patients,
  Patient,
  Chart,
} from './styles';

import bellImg from '../../assets/img/icons/bell.svg';
import userImg from '../../assets/img/user.png';
import user2Img from '../../assets/img/user-2.png';
import user3Img from '../../assets/img/user-3.png';
import user4Img from '../../assets/img/user-4.png';

export function Aside() {
  return (
    <Container>
      <Header>
        <h2>My Profile</h2>
        <a href="#">
          <img src={bellImg} alt="notifications" />
        </a>
      </Header>

      <Ornament>
        <img src={userImg} alt="user" />
        <h2>Wanessa</h2>
      </Ornament>

      <Patients>
        <header>
          <h3>Last Patients</h3>
          <a href="#">View All</a>
        </header>

        <Patient>
          <img src={user2Img} alt="" />
          <div>
            <strong>Arya Wijaya Kusuma</strong>
            <span>Jan 28, 2020 * 9 AM - 11 AM</span>
          </div>
        </Patient>

        <Patient>
          <img src={user3Img} alt="" />
          <div>
            <strong>Sherly Indriani</strong>
            <span>Jan 27, 2020 * 10 AM - 11 AM</span>
          </div>
        </Patient>

        <Patient>
          <img src={user4Img} alt="" />
          <div>
            <strong>Nafiu Efandyar Mauludy</strong>
            <span>Jan 26, 2020 * 7 AM - 9 AM</span>
          </div>
        </Patient>
      </Patients>

      <Chart>
        <h3>Number of patiens</h3>

        <div>
          <p>Chart</p>
        </div>
      </Chart>
    </Container>
  );
}

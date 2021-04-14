import { Container, Nav } from './styles';

import homeImg from '../../assets/img/icons/home.svg';
import calendarImg from '../../assets/img/icons/calendar.svg';
import mailImg from '../../assets/img/icons/mail.svg';
import userImg from '../../assets/img/icons/user.svg';
import settingsImg from '../../assets/img/icons/settings.svg';
import logoutImg from '../../assets/img/icons/logout.svg';

export function NavBar() {
  return (
    <Container>
      <Nav>
        <div>
          <a href="#">
            <img src={homeImg} alt="home" />
          </a>

          <a href="#">
            <img src={calendarImg} alt="home" />
          </a>

          <a href="#">
            <img src={mailImg} alt="home" />
          </a>

          <a href="#">
            <img src={userImg} alt="home" />
          </a>

          <a href="#">
            <img src={settingsImg} alt="home" />
          </a>
        </div>

        <a href="#">
          <img src={logoutImg} alt="home" />
        </a>
      </Nav>
    </Container>
  );
}

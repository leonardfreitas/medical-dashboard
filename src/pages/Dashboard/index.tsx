import {
  Container,
  Header,
  Button,
  Welcome,
  Reports,
  Report,
  NewReport,
  Chart,
} from './styles';

import plusImg from '../../assets/img/icons/plus.svg';
import ornamentImg from '../../assets/img/ornament.png';
import patientImg from '../../assets/img/icons/patient.svg';
import phoneImg from '../../assets/img/icons/phone.svg';
import syringeImg from '../../assets/img/icons/syringe.svg';
import bedImg from '../../assets/img/icons/bed.svg';
import plus2Img from '../../assets/img/icons/plus2.svg';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <div>
          <h1>Dashboard</h1>
          <span>
            <strong>Thursday,</strong> 28 jan 2021
          </span>
        </div>

        <div>
          <a href="#">Appointment History</a>
          <Button>
            <img src={plusImg} alt="plus" />
            Add Patiens
          </Button>
        </div>
      </Header>

      <Welcome>
        <div>
          <h2>
            Welcome, <strong>Dra. Wanessa</strong>
          </h2>
          <span>Have a nice day at work</span>
        </div>
        <img src={ornamentImg} alt="ornament" />
      </Welcome>

      <Reports>
        <header>
          <h2>Report</h2>
          <a href="#">This month</a>
        </header>

        <div>
          <Report color="#6266F4">
            <div>
              <img src={patientImg} alt="user plus" />
            </div>
            <span>Patient</span>
            <h2>1032</h2>
          </Report>

          <Report color="#73DAE8">
            <div>
              <img src={phoneImg} alt="phone" />
            </div>
            <span>Consultation</span>
            <h2>207</h2>
          </Report>

          <Report color="#FF5A82">
            <div>
              <img src={syringeImg} alt="syringe" />
            </div>
            <span>Inject</span>
            <h2>128</h2>
          </Report>

          <Report color="#568FFF">
            <div>
              <img src={bedImg} alt="bed" />
            </div>
            <span>Surgery</span>
            <h2>48</h2>
          </Report>

          <NewReport>
            <img src={plus2Img} alt="plus" />
          </NewReport>
        </div>
      </Reports>

      <Chart></Chart>
    </Container>
  );
}

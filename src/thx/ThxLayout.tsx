import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Typography } from '@alfalab/core-components/typography';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = ({}: { selectedEns: boolean }) => {
  return (
    <>
      <div className={thxSt.container}>
        <div className={thxSt.rocket}>
          <CDNIcon className={thxSt.icon} name="glyph_screwdriver-paint-brush_m" />
        </div>

        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          Не удалось отправить заявку
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Это экспериментальная форма заявки. Попробуйте подать заявку снова.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="https://alfa.me/37s3BR"
          onClick={() => window.gtag('event', 'Buy_no_insurance_4113_click_var2')}
        >
          Подать заявку
        </ButtonMobile>
      </div>
    </>
  );
};

import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { Input } from '@alfalab/core-components/input';
import { List } from '@alfalab/core-components/list';
import { SelectMobile } from '@alfalab/core-components/select/mobile';
import { Switch } from '@alfalab/core-components/switch';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import longread from './assets/longread.jpg';
import rubIcon from './assets/rubIcon.png';
import sber from './assets/sber.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';
import { getWordEnding } from './utils/words';

const OPTIONS = [
  { key: '7 дней', value: 7, content: '7 дней' },
  { key: '30 дней', value: 30, content: '30 дней' },
];
const SAFE_OPTIONS = [
  { title: '20%', value: 20 },
  { title: '10%', value: 10 },
  { title: '5%', value: 5 },
  { title: '2,5%', value: 2.5 },
];

const COMMISSION = 7.56;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(false);
  const [showBs, setShowBs] = useState(false);
  const [price, setPrice] = useState(272.05);
  const [count, setCount] = useState(10);
  const [selectedEns, setSelectedEns] = useState(false);
  const [reqType, setReqTpe] = useState(7);
  const [safeOption, setSafeOption] = useState(20);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const percentageLoss = reqType === 7 ? 0.05 : 0.2;
  const sum = price * count;
  const percantageSafe = safeOption / 100;

  const safeSum = Number((percentageLoss * sum * percantageSafe).toFixed(2));
  const safeValue = Number((safeSum / 2).toFixed(2));

  const total = (selectedEns ? safeValue + sum : sum) + COMMISSION;

  const submit = () => {
    window.gtag('event', 'Buy_insurance_4113_click_var2');

    setLoading(true);
    sendDataToGA({
      quantity: count,
      price,
      term: selectedEns ? reqType : 'Nan',
      percent_down: selectedEns ? safeOption : 'Nan',
      cost: selectedEns ? safeValue : 0,
      id: LS.getItem(LSKeys.UserId, null) ?? 0,
      komiss: COMMISSION,
    }).then(() => {
      setThx(true);
      setLoading(false);
    });
  };

  const onUp = () => {
    setPrice(v => Number((v >= 999 ? 999 : v + 0.01).toFixed(2)));
  };
  const onDown = () => {
    setPrice(v => Number((v <= 0 ? 0 : v - 0.01).toFixed(2)));
  };
  const onUpCount = () => {
    setCount(v => (v >= 990 ? 990 : v + 10));
  };
  const onDownCount = () => {
    setCount(v => (v <= 10 ? 10 : v - 10));
  };

  if (thxShow) {
    return <ThxLayout selectedEns={selectedEns} />;
  }

  return (
    <>
      <img src={longread} className={appSt.imgHb} />

      <div className={appSt.container}>
        <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="semibold">
          Сбербанк
        </Typography.TitleResponsive>

        <div className={appSt.row}>
          <img src={sber} width={48} height={48} />
          <div>
            <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
              Сбербанк
            </Typography.Text>
            <Typography.Text view="primary-medium" color="secondary">
              SBER
            </Typography.Text>
          </div>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="xsmall" font="system" weight="semibold">
          Потенциал роста
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Таргет аналитиков Альфа-Банка: 365 руб. Консенсус-прогноз: 369 руб
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="xsmall" font="system" weight="semibold">
          История торгов
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          С осени 2022 года обыкновенные акции имели устойчивую тенденцию к росту и обновили максимумы с конца 2021 года. С
          середины июля 2024 года динамика котировок близка к Индексу МосБиржи
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="xsmall" font="system" weight="semibold">
          Дивиденды
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Целевой уровень дивидендов - 50% чистой прибыли по МСФО. Выплаты проводятся один раз в год. За 2023 год было
          выплачено 33,3 руб. на акцию.
          <br />В 2025 году доходность может быть выше - 12-14%, это поможет акциям быстро закрыть дивидендный гэп в 2024
          году. Дивидендная доходность - одна из самых высоких в секторе.
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="xsmall" font="system" weight="semibold">
          Устойчивость
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Акции обладают высокой ликвидностью и являются самыми популярными бумагами у частных инвесторов.
          <br />
          Потенциальные риски:
          <br />
          <List tag="ul" marker="•">
            <List.Item>
              <Typography.Text view="primary-medium">
                Снижение качества кредитного портфеля и увеличение просроченной задолжености при ухудшении макроэкономической
                конъюнктуры.
              </Typography.Text>
            </List.Item>
            <List.Item>
              <Typography.Text view="primary-medium">
                Замедление темпов выдачи кредитов при длительном сохранении высоких ставок.
              </Typography.Text>
            </List.Item>
          </List>
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="xsmall" font="system" weight="semibold">
          Бизнес показатели
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Финансовые результаты Сбербанка постоянно улучшаются. В 2025 году менеджмент ожидает рост кредитования физлиц на
          5%, юрлиц - на 9-11% при чистой процентной марже выше 5,5% и росте комиссионных доходов на 7-10%. Цель по
          рентабельности капитала - рекордные для банка 22%.
          <br />
          Согласно прогнозам аналитиков Альфа-Банка, среднегодовой темп роста чистой прибыли до 2026 года составит 9%. По
          итогам 2024 года прогнозируем мультипликатор P/E на уровне ниже 3,5, что предполагает дисконт к среднему уровню
          последних лет 5,0
        </Typography.Text>

        <Typography.Text view="primary-medium" weight="bold">
          Данная информация не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={() => {
            window.gtag('event', 'Buy_main_4113_click_var2');
            setShowBs(true);
          }}
        >
          Купить
        </ButtonMobile>
      </div>

      <BottomSheet
        title={
          <Typography.Text tag="p" view="component" weight="medium" defaultMargins={false}>
            Покупка
          </Typography.Text>
        }
        open={showBs}
        onClose={() => {
          setShowBs(false);
        }}
        titleAlign="center"
        stickyHeader
        hasCloser
        contentClassName={appSt.btmContent}
        actionButton={
          <ButtonMobile block view="primary" className={appSt.btn} onClick={submit} loading={loading}>
            <div className={appSt.btnContainer}>
              <div>
                <Typography.TitleResponsive font="system" tag="h2" view="xsmall" weight="bold">
                  Итого {total.toLocaleString('ru')} ₽
                </Typography.TitleResponsive>
                <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                  {selectedEns ? 'Включая защиту и комиссию' : 'Без защиты'}
                </Typography.Text>
              </div>
              <CDNIcon name="glyph_chevron-right_m" />
            </div>
          </ButtonMobile>
        }
      >
        <div className={appSt.container}>
          <div className={appSt.row}>
            <img src={sber} width={48} height={48} />
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                Сбербанк
              </Typography.Text>
              <Typography.Text view="primary-medium" color="secondary">
                SBER
              </Typography.Text>
            </div>
          </div>

          <div className={appSt.inputBox}>
            <img src={rubIcon} width={48} height={48} />
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Текущий счет
            </Typography.TitleResponsive>
          </div>
          <div style={{ marginLeft: '8px' }}>
            <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
              Покупка акций и комиссия
            </Typography.Text>
            <Typography.Text tag="p" view="secondary-small" defaultMargins={false}>
              Коммисия будет рассчитана по факту сделки на бирже
            </Typography.Text>
          </div>

          <div>
            <div className={appSt.inputContainer}>
              <div className={appSt.inputValue}>
                <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
                  {price}
                </Typography.Text>
                <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
                  ₽
                </Typography.Text>
              </div>

              <div className={appSt.inputActions}>
                <span onClick={onDown} style={{ display: 'inline-flex' }}>
                  <CDNIcon name="glyph_minus_m" className={appSt.inputActionsMinus} />
                </span>
                <div className={appSt.inputActionsHR} />

                <span onClick={onUp} style={{ display: 'inline-flex' }}>
                  <CDNIcon name="glyph_plus_m" />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className={appSt.inputContainer}>
              <div className={appSt.inputValue}>
                <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
                  {count}
                </Typography.Text>
                <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
                  шт
                </Typography.Text>
              </div>

              <div className={appSt.inputActions}>
                <span onClick={onDownCount} style={{ display: 'inline-flex' }}>
                  <CDNIcon name="glyph_minus_m" className={appSt.inputActionsMinus} />
                </span>
                <div className={appSt.inputActionsHR} />

                <span onClick={onUpCount} style={{ display: 'inline-flex' }}>
                  <CDNIcon name="glyph_plus_m" />
                </span>
              </div>
            </div>
            <Typography.Text style={{ marginLeft: '8px' }} view="component-secondary" color="secondary">
              Вы покупаете {count} {getWordEnding(count, ['акцию', 'акции', 'акций'])} Сбербанка
            </Typography.Text>
          </div>

          <Typography.Text style={{ marginLeft: '8px' }} view="component-secondary" color="secondary">
            Комиссия ≈ {COMMISSION.toLocaleString('ru')} ₽
          </Typography.Text>

          <Switch
            block
            reversed
            checked={selectedEns}
            label="Защитить сделку"
            hint="Если стоимость актива упадет и вы зафиксируете позицию в период действия защиты, мы компенсируем убытки согласно выбранным настройкам."
            onChange={() => {
              window.gtag('event', 'insurance_4113_click_var2');
              setSelectedEns(!selectedEns);
            }}
            className={appSt.switchItem}
          />

          <Collapse expanded={selectedEns}>
            <SelectMobile
              options={OPTIONS}
              size={48}
              block
              onChange={p => {
                setReqTpe(p.selected?.value ?? 7);
              }}
              selected={OPTIONS.find(o => o.value === reqType)}
              label="Срок защиты"
              labelView="outer"
              className={appSt.selectStyle}
            />
            <div style={{ marginTop: '1rem' }}>
              <Typography.Text style={{ marginLeft: '8px' }} view="component-secondary" color="secondary">
                Защита сработает, если цена снизится на:
              </Typography.Text>
              <Swiper spaceBetween={12} slidesPerView="auto" style={{ marginTop: '.5rem' }}>
                {SAFE_OPTIONS.map(o => (
                  <SwiperSlide
                    onClick={() => setSafeOption(o.value)}
                    className={appSt.swSlide({ selected: safeOption === o.value })}
                    key={o.value}
                  >
                    {o.title}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Input
                block
                readOnly
                label="Стоимость защиты"
                labelView="outer"
                value={`${safeValue.toLocaleString('ru')} ₽`}
                className={appSt.inputLabelStyle}
              />
            </div>
          </Collapse>
        </div>
      </BottomSheet>
    </>
  );
};

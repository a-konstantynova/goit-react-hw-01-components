import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from './RandomColor';

export default function Statistics({ title, stats }) {
  return (
    <div className={s.container}>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.list}>
          {stats.map(data => (
            <li
              key={data.id}
              className={s.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={s.label}>{data.label}</span>
              <span className={s.percentage}>{data.percentage + '%'}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

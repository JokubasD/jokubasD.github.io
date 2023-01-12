import { Link } from 'react-router-dom';
import Heading5 from '../components/mainComponents/Heading5';
import c from './Crew.module.css';
function Crew3(props) {
  return (
    <div className='container'>
      <Heading5>
        <span className={c.span}>02 </span> Meet your crew
      </Heading5>
      <img
        src='/crew/image-victor-glover.png'
        alt='Victor Glover'
        className={c.crewImage}
      />
      <ul className={c.control}>
        <Link
          to={'/crew/douglas-hurley'}
          className={`${c.disabled} ${c.slider}`}
        />
        <Link
          to={'/crew/mark-shuttleworth'}
          className={`${c.diabled} ${c.slider}`}
        />
        <Link
          to={'/crew/victor-glover'}
          className={`${c.current} ${c.slider}`}
        />
        <Link
          to={'/crew/anousheh-ansari'}
          className={`${c.disabled} ${c.slider}`}
        />
      </ul>
      <h4 className={c.position}>Pilot</h4>
      <h3 className={c.name}>Victor Glover</h3>
      <p className={c.paragraph}>
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.
      </p>
    </div>
  );
}
export default Crew3;

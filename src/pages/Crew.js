import { useParams } from 'react-router-dom';

import CrewTitle from '../components/Main/Crew/CrewTitle';
import CrewSubtitle from '../components/Main/Crew/CrewSubtitle';
import CrewParagraph from '../components/Main/Crew/CrewParagraph';
import CrewImages from '../components/Main/Crew/CrewImages';
import CrewNav from '../components/Main/Crew/CrewNav';
import classes from '../styles/Crew/Crew.module.css';

const Crew = props => {
  const { member } = useParams();
  const { data } = props;
  const members = data.map(item => {
    if (item.role.split(' ').length === 1) {
      return item.role;
    } else {
      return item.role.slice(item.role.indexOf(' ') + 1);
    }
  });

  const paths = members.map(member => member.toLowerCase());

  const currentMemberIndex = members.findIndex(
    role => role.toLowerCase() === member
  );
  const currentData = data[currentMemberIndex];

  return (
    <>
      <div className={classes['text-div']}>
        <CrewSubtitle text={currentData.role} />
        <CrewTitle text={currentData.name} />
        <CrewParagraph text={currentData.bio} />
        <CrewNav members={members} />
      </div>
      <div className={classes['img-div']}>
        <CrewImages currentPath={member} paths={paths} />
      </div>
    </>
  );
};

export default Crew;

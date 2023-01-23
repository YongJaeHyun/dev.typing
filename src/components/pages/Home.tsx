import { useRecoilState } from 'recoil';
import { typingListState } from '../../recoil/recoilStates';

const Home = () => {
  const [typingList, setTypingList] = useRecoilState(typingListState);

  return null;
};

export default Home;

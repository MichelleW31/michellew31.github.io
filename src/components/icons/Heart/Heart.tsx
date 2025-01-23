// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

interface HeartProps {
  color: string;
  setUpLikes: () => void;
}

const Heart = ({ color, setUpLikes }: HeartProps) => {
  return (
    <section>
      <FontAwesomeIcon
        icon={faHeart as IconProp}
        color={color}
        size="lg"
        onClick={() => {
          setUpLikes();
        }}
      />
    </section>
  );
};

export default Heart;

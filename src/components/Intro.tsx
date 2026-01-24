import type { IntroProps } from "../data/types";

const Intro = ({ intro, name }: IntroProps) => {

  return (
    <>{`${intro} ${name}, and I am `}</>
  );
};

export default Intro;

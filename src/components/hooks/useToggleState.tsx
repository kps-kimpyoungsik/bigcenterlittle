import { useState } from 'react';

type useToggleStateProps = {
  showing?: boolean;
};

const useToggleState = (props: useToggleStateProps) => {
  const { showing = false } = props;
  const [isShowing, setIsShowing] = useState(showing);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const open = () => {
    setIsShowing(true);
  };

  const close = () => {
    setIsShowing(false);
  };

  const setShowing = (value: boolean) => {
    setIsShowing(value);
  };

  return {
    isShowing,
    toggle,
    close,
    open,
    setShowing,
  };
};

export default useToggleState;

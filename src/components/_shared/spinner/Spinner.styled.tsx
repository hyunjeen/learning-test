import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const SpinnerStyled = styled(ClipLoader)``;

interface SpinnerProps {
  size?: number;
}
function Spinner(props: SpinnerProps) {
  return <SpinnerStyled size={props.size || 15} />;
}

export default Spinner;

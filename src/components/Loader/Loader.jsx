import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{ padding: '30px' }}>
    <RotatingLines
      visible={true}
      height="80"
      width="80"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

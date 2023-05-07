import { Audio } from  'react-loader-spinner';

import './styles.css';

export const Loader = () => (
    <div className='loader'>
        <Audio
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
        />
    </div>

);
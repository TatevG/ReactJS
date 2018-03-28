import React from 'react';
import '../stylesheets/loading.css'

const Loading = ({ loadingGif }) => (
    <div className='loading'>
        <img src={loadingGif} alt='loading' />
    </div>
);

export default Loading;
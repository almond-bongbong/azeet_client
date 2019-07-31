import axios from 'axios';

export const getBookmarks = () => axios({ method: 'get', url: '/bookmark' });

export default null;

import axios from 'axios';

// CocoaApiのconstructorでbaseURLを設定するとconstructorの実行タイミングの影響でうまく設定できないのでInstanceをexportして使用する。
export default axios.create({ baseURL: process.env.REACT_APP_COCOA_API_SWAGGER });

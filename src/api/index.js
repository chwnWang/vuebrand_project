// 引入ajax模块
import ajax from './ajax'

const prefix = '/api'

// 获取分类数据------------------请求mock数据
export const reqMockCategory = () => ajax('/mock/category');   
//获取首页的数据-----------------请求mock数据
export const reqMockHome = () => ajax('/mock/home'); 
//获取搜索页的数据  
export const reqInitSearch = () => ajax(`${prefix}/xhr/search/init.json`, 'POST');
//根据输入进行搜索
export const reqSearchResult = (keywordPrefix) => ajax(`${prefix}/xhr/search/searchAutoComplete.json`, {keywordPrefix});
//获取食物的tab
export const reqTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`);
// 识物-推荐数据
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`${prefix}/topic/v1/find/recAuto.json`, {page, size, exceptIds})

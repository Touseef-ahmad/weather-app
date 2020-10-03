/**
 * * Funtions in this file are used to extract some data from
 * * openWeatherMap api response
 */

/**
 *
 * @param {array} data the api response data from openWeatherMap
 * @returns {string} cityName name of the city in response data
 */

export const getCityName = data => {
  const cityName = data.city.name;
  return cityName;
};
/**
 *
 * @param {array} data the api response data from openWeatherMap
 * @param {string} date to get the forcast the date
 * @returns {forcast} array contains three hour forcast of that date
 */
export const getForcastByDate = (data, date) => {
  const forcast = data.list.filter(elem => elem.dt_txt.split(' ')[0] === date);
  return forcast;
};

/**
 *
 * @param {array} data the api response data from openWeatherMap
 * @returns {todaysForcast} array contains three hour forcast of current day
 */

export const getTodaysFocast = data => {
  let date = new Date();
  date = date.toISOString().split('T')[0];
  const todaysForcast = getForcastByDate(data, date);
  return todaysForcast;
};

/**
 *
 * @param {array} data the api response data from openWeatherMap
 * @returns {array} dates from api response ["2020-10-02" , "2020-10-01" ,....]
 */
export const getDateList = data => {
  const distinct = (value, index, self) => self.indexOf(value) === index;
  const dates = data.list.map(elem => elem.dt_txt.split(' ')[0]).filter(distinct);
  return dates;
};

/**
 *
 * @param {string} dateText The date to be formated e.g. "2020-10-02 06:00:00"
 * @returns {string} day of the week e.g. "Sunday"
 */
export const getDayFromDate = dateText => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateText);
  return days[date.getDay()];
};

/**
 *
 * @param {string} dateText The date to be formated e.g. "2020-10-02 06:00:00"
 * @returns {string} time formated like this "6 am"
 */
export const formatTime = dateText => {
  let time = dateText.split(' ')[1];
  time = parseInt(time.split(':')[0]);
  return time >= 12
    ? `${time - 12 === 0 ? 12 : time - 12} pm`
    : `${Math.abs(time - 12 === 0 ? 12 : time - 12)} am`;
};

/**
 * FontAwesome icon classnames for given discription of weather
 */
export const ICON_CLASS_NAMES = {
  Clear: 'fa fa-sun',
  Clouds: 'fa fa-cloud-sun',
  Rain: 'fas fa-cloud-rain',
};

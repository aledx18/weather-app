import { Forecast } from '@/lib/interface/types'

// const hour = [
//   {
//     time_epoch: 1705017600,
//     time: '2024-01-12 00:00',
//     temp_c: 5.2,
//     temp_f: 41.4,
//     is_day: 0,
//     condition: {
//       text: 'Partly cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
//       code: 1003
//     },
//     wind_mph: 8.1,
//     wind_kph: 13.0,
//     wind_degree: 20,
//     wind_dir: 'NNE',
//     pressure_mb: 1037.0,
//     pressure_in: 30.63,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 74,
//     cloud: 48,
//     feelslike_c: 2.4,
//     feelslike_f: 36.2,
//     windchill_c: 2.4,
//     windchill_f: 36.2,
//     heatindex_c: 5.2,
//     heatindex_f: 41.4,
//     dewpoint_c: 0.9,
//     dewpoint_f: 33.7,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 12.7,
//     gust_kph: 20.4,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705021200,
//     time: '2024-01-12 01:00',
//     temp_c: 4.0,
//     temp_f: 39.3,
//     is_day: 0,
//     condition: {
//       text: 'Partly cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
//       code: 1003
//     },
//     wind_mph: 7.4,
//     wind_kph: 11.9,
//     wind_degree: 13,
//     wind_dir: 'NNE',
//     pressure_mb: 1037.0,
//     pressure_in: 30.62,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 82,
//     cloud: 44,
//     feelslike_c: 1.1,
//     feelslike_f: 34.0,
//     windchill_c: 1.1,
//     windchill_f: 34.0,
//     heatindex_c: 4.0,
//     heatindex_f: 39.3,
//     dewpoint_c: 1.3,
//     dewpoint_f: 34.4,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 12.2,
//     gust_kph: 19.7,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705024800,
//     time: '2024-01-12 02:00',
//     temp_c: 5.0,
//     temp_f: 41.0,
//     is_day: 0,
//     condition: {
//       text: 'Overcast',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
//       code: 1009
//     },
//     wind_mph: 8.1,
//     wind_kph: 13.0,
//     wind_degree: 30,
//     wind_dir: 'NNE',
//     pressure_mb: 1038.0,
//     pressure_in: 30.65,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 87,
//     cloud: 100,
//     feelslike_c: 0.7,
//     feelslike_f: 33.2,
//     windchill_c: 0.7,
//     windchill_f: 33.2,
//     heatindex_c: 3.6,
//     heatindex_f: 38.4,
//     dewpoint_c: 1.3,
//     dewpoint_f: 34.4,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 11.7,
//     gust_kph: 18.8,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705028400,
//     time: '2024-01-12 03:00',
//     temp_c: 3.3,
//     temp_f: 38.0,
//     is_day: 0,
//     condition: {
//       text: 'Overcast',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
//       code: 1009
//     },
//     wind_mph: 7.6,
//     wind_kph: 12.2,
//     wind_degree: 16,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.6,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 86,
//     cloud: 100,
//     feelslike_c: 0.2,
//     feelslike_f: 32.3,
//     windchill_c: 0.2,
//     windchill_f: 32.3,
//     heatindex_c: 3.3,
//     heatindex_f: 38.0,
//     dewpoint_c: 1.2,
//     dewpoint_f: 34.2,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 12.4,
//     gust_kph: 20.0,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705032000,
//     time: '2024-01-12 04:00',
//     temp_c: 3.8,
//     temp_f: 38.8,
//     is_day: 0,
//     condition: {
//       text: 'Overcast',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
//       code: 1009
//     },
//     wind_mph: 7.6,
//     wind_kph: 12.2,
//     wind_degree: 19,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.6,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 83,
//     cloud: 100,
//     feelslike_c: 0.8,
//     feelslike_f: 33.4,
//     windchill_c: 0.8,
//     windchill_f: 33.4,
//     heatindex_c: 3.8,
//     heatindex_f: 38.8,
//     dewpoint_c: 1.1,
//     dewpoint_f: 34.0,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 11.9,
//     gust_kph: 19.1,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705035600,
//     time: '2024-01-12 05:00',
//     temp_c: 4.7,
//     temp_f: 40.4,
//     is_day: 0,
//     condition: {
//       text: 'Overcast',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
//       code: 1009
//     },
//     wind_mph: 9.6,
//     wind_kph: 15.5,
//     wind_degree: 26,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.59,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 76,
//     cloud: 90,
//     feelslike_c: 1.3,
//     feelslike_f: 34.3,
//     windchill_c: 1.3,
//     windchill_f: 34.3,
//     heatindex_c: 4.7,
//     heatindex_f: 40.4,
//     dewpoint_c: 0.9,
//     dewpoint_f: 33.6,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 14.7,
//     gust_kph: 23.6,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705039200,
//     time: '2024-01-12 06:00',
//     temp_c: 5.0,
//     temp_f: 41.1,
//     is_day: 0,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
//       code: 1006
//     },
//     wind_mph: 10.1,
//     wind_kph: 16.2,
//     wind_degree: 27,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.58,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 74,
//     cloud: 87,
//     feelslike_c: 1.6,
//     feelslike_f: 34.9,
//     windchill_c: 1.6,
//     windchill_f: 34.9,
//     heatindex_c: 5.0,
//     heatindex_f: 41.1,
//     dewpoint_c: 0.8,
//     dewpoint_f: 33.5,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 15.2,
//     gust_kph: 24.5,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705042800,
//     time: '2024-01-12 07:00',
//     temp_c: 5.1,
//     temp_f: 41.2,
//     is_day: 0,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
//       code: 1006
//     },
//     wind_mph: 10.5,
//     wind_kph: 16.9,
//     wind_degree: 26,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.59,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 74,
//     cloud: 86,
//     feelslike_c: 1.6,
//     feelslike_f: 34.9,
//     windchill_c: 1.6,
//     windchill_f: 34.9,
//     heatindex_c: 5.1,
//     heatindex_f: 41.2,
//     dewpoint_c: 0.8,
//     dewpoint_f: 33.4,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 15.8,
//     gust_kph: 25.4,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705046400,
//     time: '2024-01-12 08:00',
//     temp_c: 5.1,
//     temp_f: 41.1,
//     is_day: 0,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
//       code: 1006
//     },
//     wind_mph: 9.2,
//     wind_kph: 14.8,
//     wind_degree: 25,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.59,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 74,
//     cloud: 87,
//     feelslike_c: 1.9,
//     feelslike_f: 35.4,
//     windchill_c: 1.9,
//     windchill_f: 35.4,
//     heatindex_c: 5.1,
//     heatindex_f: 41.1,
//     dewpoint_c: 0.9,
//     dewpoint_f: 33.5,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 14.0,
//     gust_kph: 22.5,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705050000,
//     time: '2024-01-12 09:00',
//     temp_c: 5.3,
//     temp_f: 41.6,
//     is_day: 1,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
//       code: 1006
//     },
//     wind_mph: 10.1,
//     wind_kph: 16.2,
//     wind_degree: 27,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.59,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 72,
//     cloud: 83,
//     feelslike_c: 2.0,
//     feelslike_f: 35.6,
//     windchill_c: 2.0,
//     windchill_f: 35.6,
//     heatindex_c: 5.3,
//     heatindex_f: 41.6,
//     dewpoint_c: 0.8,
//     dewpoint_f: 33.4,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 15.0,
//     gust_kph: 24.2,
//     uv: 2.0
//   },
//   {
//     time_epoch: 1705053600,
//     time: '2024-01-12 10:00',
//     temp_c: 5.6,
//     temp_f: 42.1,
//     is_day: 1,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
//       code: 1006
//     },
//     wind_mph: 9.4,
//     wind_kph: 15.1,
//     wind_degree: 27,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.6,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 71,
//     cloud: 83,
//     feelslike_c: 2.5,
//     feelslike_f: 36.5,
//     windchill_c: 2.5,
//     windchill_f: 36.5,
//     heatindex_c: 5.6,
//     heatindex_f: 42.1,
//     dewpoint_c: 0.8,
//     dewpoint_f: 33.5,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 13.5,
//     gust_kph: 21.7,
//     uv: 2.0
//   },
//   {
//     time_epoch: 1705057200,
//     time: '2024-01-12 11:00',
//     temp_c: 6.1,
//     temp_f: 42.9,
//     is_day: 1,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
//       code: 1006
//     },
//     wind_mph: 7.2,
//     wind_kph: 11.5,
//     wind_degree: 26,
//     wind_dir: 'NNE',
//     pressure_mb: 1036.0,
//     pressure_in: 30.59,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 70,
//     cloud: 77,
//     feelslike_c: 3.6,
//     feelslike_f: 38.6,
//     windchill_c: 3.6,
//     windchill_f: 38.6,
//     heatindex_c: 6.1,
//     heatindex_f: 42.9,
//     dewpoint_c: 1.0,
//     dewpoint_f: 33.9,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 10.0,
//     gust_kph: 16.1,
//     uv: 2.0
//   },
//   {
//     time_epoch: 1705060800,
//     time: '2024-01-12 12:00',
//     temp_c: 6.6,
//     temp_f: 43.8,
//     is_day: 1,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
//       code: 1006
//     },
//     wind_mph: 8.5,
//     wind_kph: 13.7,
//     wind_degree: 28,
//     wind_dir: 'NNE',
//     pressure_mb: 1035.0,
//     pressure_in: 30.57,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 68,
//     cloud: 79,
//     feelslike_c: 3.9,
//     feelslike_f: 39.0,
//     windchill_c: 3.9,
//     windchill_f: 39.0,
//     heatindex_c: 6.6,
//     heatindex_f: 43.8,
//     dewpoint_c: 1.1,
//     dewpoint_f: 33.9,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 11.2,
//     gust_kph: 18.1,
//     uv: 2.0
//   },
//   {
//     time_epoch: 1705064400,
//     time: '2024-01-12 13:00',
//     temp_c: 6.7,
//     temp_f: 44.1,
//     is_day: 1,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
//       code: 1006
//     },
//     wind_mph: 8.1,
//     wind_kph: 13.0,
//     wind_degree: 28,
//     wind_dir: 'NNE',
//     pressure_mb: 1035.0,
//     pressure_in: 30.55,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 68,
//     cloud: 79,
//     feelslike_c: 4.2,
//     feelslike_f: 39.5,
//     windchill_c: 4.2,
//     windchill_f: 39.5,
//     heatindex_c: 6.7,
//     heatindex_f: 44.1,
//     dewpoint_c: 1.2,
//     dewpoint_f: 34.2,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 10.6,
//     gust_kph: 17.0,
//     uv: 2.0
//   },
//   {
//     time_epoch: 1705068000,
//     time: '2024-01-12 14:00',
//     temp_c: 6.8,
//     temp_f: 44.2,
//     is_day: 1,
//     condition: {
//       text: 'Cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
//       code: 1006
//     },
//     wind_mph: 6.9,
//     wind_kph: 11.2,
//     wind_degree: 26,
//     wind_dir: 'NNE',
//     pressure_mb: 1034.0,
//     pressure_in: 30.53,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 67,
//     cloud: 63,
//     feelslike_c: 4.6,
//     feelslike_f: 40.2,
//     windchill_c: 4.6,
//     windchill_f: 40.2,
//     heatindex_c: 6.8,
//     heatindex_f: 44.2,
//     dewpoint_c: 1.2,
//     dewpoint_f: 34.1,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 9.3,
//     gust_kph: 14.9,
//     uv: 2.0
//   },
//   {
//     time_epoch: 1705071600,
//     time: '2024-01-12 15:00',
//     temp_c: 6.5,
//     temp_f: 43.7,
//     is_day: 1,
//     condition: {
//       text: 'Partly cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
//       code: 1003
//     },
//     wind_mph: 5.1,
//     wind_kph: 8.3,
//     wind_degree: 22,
//     wind_dir: 'NNE',
//     pressure_mb: 1033.0,
//     pressure_in: 30.51,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 70,
//     cloud: 39,
//     feelslike_c: 4.8,
//     feelslike_f: 40.7,
//     windchill_c: 4.8,
//     windchill_f: 40.7,
//     heatindex_c: 6.5,
//     heatindex_f: 43.7,
//     dewpoint_c: 1.4,
//     dewpoint_f: 34.5,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 7.3,
//     gust_kph: 11.7,
//     uv: 3.0
//   },
//   {
//     time_epoch: 1705075200,
//     time: '2024-01-12 16:00',
//     temp_c: 5.3,
//     temp_f: 41.6,
//     is_day: 1,
//     condition: {
//       text: 'Partly cloudy',
//       icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
//       code: 1003
//     },
//     wind_mph: 3.6,
//     wind_kph: 5.8,
//     wind_degree: 20,
//     wind_dir: 'NNE',
//     pressure_mb: 1033.0,
//     pressure_in: 30.5,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 76,
//     cloud: 30,
//     feelslike_c: 4.2,
//     feelslike_f: 39.5,
//     windchill_c: 4.2,
//     windchill_f: 39.5,
//     heatindex_c: 5.3,
//     heatindex_f: 41.6,
//     dewpoint_c: 1.5,
//     dewpoint_f: 34.7,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 6.0,
//     gust_kph: 9.6,
//     uv: 3.0
//   },
//   {
//     time_epoch: 1705078800,
//     time: '2024-01-12 17:00',
//     temp_c: 4.6,
//     temp_f: 40.2,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 3.6,
//     wind_kph: 5.8,
//     wind_degree: 22,
//     wind_dir: 'NNE',
//     pressure_mb: 1033.0,
//     pressure_in: 30.49,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 81,
//     cloud: 23,
//     feelslike_c: 3.3,
//     feelslike_f: 38.0,
//     windchill_c: 3.3,
//     windchill_f: 38.0,
//     heatindex_c: 4.6,
//     heatindex_f: 40.2,
//     dewpoint_c: 1.6,
//     dewpoint_f: 34.9,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 6.2,
//     gust_kph: 10.0,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705082400,
//     time: '2024-01-12 18:00',
//     temp_c: 4.0,
//     temp_f: 39.3,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 3.4,
//     wind_kph: 5.4,
//     wind_degree: 25,
//     wind_dir: 'NNE',
//     pressure_mb: 1033.0,
//     pressure_in: 30.49,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 84,
//     cloud: 21,
//     feelslike_c: 2.8,
//     feelslike_f: 37.1,
//     windchill_c: 2.8,
//     windchill_f: 37.1,
//     heatindex_c: 4.0,
//     heatindex_f: 39.3,
//     dewpoint_c: 1.7,
//     dewpoint_f: 35.0,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 5.8,
//     gust_kph: 9.4,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705086000,
//     time: '2024-01-12 19:00',
//     temp_c: 3.6,
//     temp_f: 38.5,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 3.1,
//     wind_kph: 5.0,
//     wind_degree: 33,
//     wind_dir: 'NNE',
//     pressure_mb: 1032.0,
//     pressure_in: 30.49,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 87,
//     cloud: 22,
//     feelslike_c: 2.5,
//     feelslike_f: 36.4,
//     windchill_c: 2.5,
//     windchill_f: 36.4,
//     heatindex_c: 3.6,
//     heatindex_f: 38.5,
//     dewpoint_c: 1.6,
//     dewpoint_f: 34.9,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 5.4,
//     gust_kph: 8.7,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705089600,
//     time: '2024-01-12 20:00',
//     temp_c: 3.2,
//     temp_f: 37.8,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 2.5,
//     wind_kph: 4.0,
//     wind_degree: 40,
//     wind_dir: 'NE',
//     pressure_mb: 1032.0,
//     pressure_in: 30.48,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 88,
//     cloud: 13,
//     feelslike_c: 2.6,
//     feelslike_f: 36.6,
//     windchill_c: 2.6,
//     windchill_f: 36.6,
//     heatindex_c: 3.2,
//     heatindex_f: 37.8,
//     dewpoint_c: 1.5,
//     dewpoint_f: 34.7,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 4.3,
//     gust_kph: 6.9,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705093200,
//     time: '2024-01-12 21:00',
//     temp_c: 2.9,
//     temp_f: 37.3,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 1.8,
//     wind_kph: 2.9,
//     wind_degree: 48,
//     wind_dir: 'NE',
//     pressure_mb: 1032.0,
//     pressure_in: 30.47,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 89,
//     cloud: 13,
//     feelslike_c: 2.9,
//     feelslike_f: 37.3,
//     windchill_c: 2.9,
//     windchill_f: 37.3,
//     heatindex_c: 2.9,
//     heatindex_f: 37.3,
//     dewpoint_c: 1.4,
//     dewpoint_f: 34.5,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 3.2,
//     gust_kph: 5.1,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705096800,
//     time: '2024-01-12 22:00',
//     temp_c: 2.7,
//     temp_f: 36.8,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 0.7,
//     wind_kph: 1.1,
//     wind_degree: 313,
//     wind_dir: 'NW',
//     pressure_mb: 1031.0,
//     pressure_in: 30.46,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 91,
//     cloud: 17,
//     feelslike_c: 2.7,
//     feelslike_f: 36.8,
//     windchill_c: 2.7,
//     windchill_f: 36.8,
//     heatindex_c: 2.7,
//     heatindex_f: 36.8,
//     dewpoint_c: 1.3,
//     dewpoint_f: 34.4,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 1.2,
//     gust_kph: 1.9,
//     uv: 1.0
//   },
//   {
//     time_epoch: 1705100400,
//     time: '2024-01-12 23:00',
//     temp_c: 2.5,
//     temp_f: 36.4,
//     is_day: 0,
//     condition: {
//       text: 'Clear',
//       icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
//       code: 1000
//     },
//     wind_mph: 2.5,
//     wind_kph: 4.0,
//     wind_degree: 257,
//     wind_dir: 'WSW',
//     pressure_mb: 1031.0,
//     pressure_in: 30.45,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     snow_cm: 0.0,
//     humidity: 92,
//     cloud: 22,
//     feelslike_c: 1.7,
//     feelslike_f: 35.0,
//     windchill_c: 1.7,
//     windchill_f: 35.0,
//     heatindex_c: 2.5,
//     heatindex_f: 36.4,
//     dewpoint_c: 1.3,
//     dewpoint_f: 34.3,
//     will_it_rain: 0,
//     chance_of_rain: 0,
//     will_it_snow: 0,
//     chance_of_snow: 0,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     gust_mph: 4.4,
//     gust_kph: 7.1,
//     uv: 1.0
//   }
// ]

export default function Forecastday({
  grad,
  forecast
}: {
  grad: string
  forecast: Forecast
}) {
  const fin = forecast.forecastday[0].hour.filter(
    (elemento: { time: string }) => {
      const hora = parseInt(elemento.time.slice(11, 13))
      const horasPermitidas = [0, 2, 6, 9, 12, 15, 18, 21]
      return horasPermitidas.includes(hora)
    }
  )

  return (
    <>
      {fin.map((elemento, i) => (
        <div
          key={i}
          className='px-8 rounded-xl shadow-sm flex flex-col justify-center items-center border dark:hover:bg-[#27272a] transition-all duration-500'>
          <h2 className='flex items-center'>
            {((parseInt(elemento.time.slice(11, 13), 10) + 11) % 12) + 1}:
            {elemento.time.slice(14, 16)}{' '}
            {parseInt(elemento.time.slice(11, 13), 10) < 12 ? 'am' : 'pm'}
          </h2>
          <div className='items-center flex flex-col'>
            <img
              src={elemento.condition.icon}
              alt='Image'
              width={100}
              height={100}
              className='rounded-md object-cover w-14'
            />
            <h3 className='text-lg font-medium'>
              {grad === 'C' ? (
                <p>
                  {Math.round(elemento.temp_c)}{' '}
                  <span className='text-[#898992]'>°C</span>
                </p>
              ) : (
                <p>
                  {Math.round(elemento.temp_f)}{' '}
                  <span className='text-[#898992]'>°F</span>
                </p>
              )}
            </h3>
          </div>
        </div>
      ))}
    </>
  )
}

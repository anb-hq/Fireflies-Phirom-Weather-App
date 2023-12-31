import { DailyForecast } from './DailyForecast/DailyForecast';

import { CurrentWeather } from './CurrentWeather/CurrentWeather';

import { HourlyForecast } from './HourlyForecast/HourlyForecast';

import './Main.css';

const Main = () => {
	return (
		<main className="main">
			<div className="main__left">
				<CurrentWeather />
				<HourlyForecast />
			</div>
			<DailyForecast />
		</main>
	);
};

export { Main };

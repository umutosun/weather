export interface IWeather{
    name: string;
    weather: { description: string; icon: string }[];
    main: { temp: number };
    dt: number;
}
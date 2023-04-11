import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error)=>{
    console.log(chalk.bgRed("ERROR") + ' ' + error);
}
const printSuccess = (message)=>{
    console.log(chalk.bgGreen("SUCCESS") + ' ' + message);
}
const printHelp = ()=>{
    console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -h [API_KEY] for saving token
    `);
}

const prinWeather = (res,icon)=>{
    console.log(dedent`
        ${chalk.bgYellowBright('WEATHER')} City weather ${res.name}
        ${icon} ${res.weather[0].description}
        Temprature: ${res.main.temp} (feels like ${res.main.feels_like})
        Humidty: ${res.main.humidity}%
        Temperature: ${res.wind.speed} m/s
    `);
}

export {printError, printSuccess,printHelp,prinWeather}
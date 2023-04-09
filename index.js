import getArgs from "./helpers/args.js"
import { getWeather } from "./services/api.service.js";
import {printError,printSuccess,printHelp} from "./services/log.service.js"
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js";

const saveToken = async token =>{
    if (!token.length) {
        printError("Doesn't exist")
        return 
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token,token)
        printSuccess('Token was saved')
    } catch (error) {
        printSuccess(error.message)
    }
}

const startCLI = ()=>{
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather('tashkent')
}
startCLI()
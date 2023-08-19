import {
  logger,
  consoleTransport,
  fileAsyncTransport,
} from "react-native-logs";

// import { Analytics } from "lib_actions/analytics";

const Toast = __DEV__
  ? require("react-native-simple-toast").default
  : undefined;
// import RNFS from "react-native-fs";

let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
class Logger {
  static logger = null;

  constructor() {
    if (!this.logger) {
      this.setupLogger();
    }
  }
  setupLogger = () => {
    let today = new Date();
    const defaultConfig = {
      severity: "debug",
      transport: (props) => {
        consoleTransport(props);
        // fileAsyncTransport(props);
      },
      transportOptions: {
        // FS: RNFS,
        colors: "ansi",
        fileLogName: `logs_${date}-${month}-${year}`,
      },
      levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
      },
    };
    //TODO: Debug
    this.logger = logger.createLogger(defaultConfig);
  };

  log = (msg) => {
    this.logger.info(msg);
  };
  error = (err) => {
    // AKAnalytics.error(err);
    this.logger.error(err);
    Toast?.show(err);
  };
  parseError = (err, msg = "") => {
    // AKAnalytics.parseError(err);
    let { code, message } = err;
    if (!code) {
      message = err;
    }
    this.error(`Error: ${code} | ${message} | ${msg}`);
  };
  warn = (warn) => {
    this.logger.warn(warn);
  };
}

export default new Logger();

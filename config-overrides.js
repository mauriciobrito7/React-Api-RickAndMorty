const {
    defaultInjectConfig,
    rewireWorkboxInject
} = require("react-app-rewire-workbox"); // importar el require
const path = require("path");

module.exports = function override(config, env) {
    if (env === "production") {
        console.log("Generating Service Worker");
        // generando service worker
        const workboxConfig = {
            ...defaultInjectConfig,
            swSrc: path.join(__dirname, "src", "service-worker.js") // nos dice los archivos que tenemos que precargar y lo coloca en el archivo service-worker.js
        };
        config = rewireWorkboxInject(workboxConfig)(config, env);
    }

    return config;
};
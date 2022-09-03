const normalizePort = (port) => {
    const parsedPort = parseInt(port, 10);

    if (isNaN(parsedPort)) {
        return port;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return 3000;
};

const getOsEnv = (key) => {
    if (typeof process.env[key] === 'undefined') {
        throw new Error(`Environment variable ${key} is not set.`);
    }

    return process.env[key];
};

module.exports = {
    normalizePort,
    getOsEnv,
};

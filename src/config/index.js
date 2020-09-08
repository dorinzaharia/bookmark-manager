const apiHostname = process.env.REACT_APP_HOSTNAME;

if(!apiHostname) {
    throw new Error('REACT_APP_HOSTNAME is not set.')
}

module.exports = {
    apiHostname
};


 
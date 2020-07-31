// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require('path');
const extensionUnZipped = path.join(__dirname, '../../IgnoreXFramesPlugin');

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    on('before:browser:launch', (browser = {}, args) => {
        // args.args.push(`--load-extension=${extension}`);

        if (!!args.args) {
            args.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
            args.extensions.push(extensionUnZipped);
        }
        console.log(args.extensions)
        return args;
    });
}


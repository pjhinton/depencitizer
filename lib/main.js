var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

pageMod.PageMod({
    include: '*.in.gov',
    contentScriptFile: [
        self.data.url('jquery-2.1.3.min.js'),
        self.data.url('depencitizer.js')
    ],
    contentScriptWhen: "start"
});

"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home.component");
var messages_component_1 = require("./messages/messages.component");
var not_found_component_1 = require("./not-found.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map
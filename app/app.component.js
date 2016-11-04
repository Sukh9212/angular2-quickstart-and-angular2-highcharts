import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.options = {
            chart: {
                type: 'column',
                margin: 75,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50
                }
            },
            plotOptions1: {
                column: {
                    depth: 25
                }
            },
            series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
        };
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "\n        <h1>My First <a href=\"https://github.com/gevgeny/angular2-highcharts\" target=\"_blank\">Angular2-Highcharts</a> App</h1>\n        <chart [options]=\"options\"></chart>\n    "
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map
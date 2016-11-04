/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'angular2-highcharts/dist/HighchartsService';
import * as import11 from '../node_modules/angular2-highcharts/dist/ChartComponent.ngfactory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from 'angular2-highcharts/dist/ChartComponent';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.AppComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AppComponent_0_4:Wrapper_AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'my-app',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new Wrapper_AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AppComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import9.ComponentFactory<import0.AppComponent> = new import9.ComponentFactory<import0.AppComponent>('my-app',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _HighchartsService_7_4:import10.HighchartsService;
  _ChartComponent_7_5:import11.Wrapper_ChartComponent;
  _query_ChartSeriesComponent_7_0:import12.QueryList<any>;
  _query_ChartXAxisComponent_7_1:import12.QueryList<any>;
  _query_ChartYAxisComponent_7_2:import12.QueryList<any>;
  _text_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'My First ',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'a',new import4.InlineArray4(4,'href','https://github.com/gevgeny/angular2-highcharts','target','_blank'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Angular2-Highcharts',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,' App',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_7 = import4.createRenderElement(this.renderer,parentRenderNode,'chart',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_7 = new import3.AppElement(7,(null as any),this,this._el_7);
    var compView_7:any = import11.viewFactory_ChartComponent0(this.viewUtils,this.injector(7),this._appEl_7);
    this._HighchartsService_7_4 = new import10.HighchartsService();
    this._ChartComponent_7_5 = new import11.Wrapper_ChartComponent(new import13.ElementRef(this._el_7),this._HighchartsService_7_4);
    this._query_ChartSeriesComponent_7_0 = new import12.QueryList<any>();
    this._query_ChartXAxisComponent_7_1 = new import12.QueryList<any>();
    this._query_ChartYAxisComponent_7_2 = new import12.QueryList<any>();
    this._appEl_7.initComponent(this._ChartComponent_7_5.context,([] as any[]),compView_7);
    this._query_ChartSeriesComponent_7_0.reset(([] as any[]));
    this._ChartComponent_7_5.context.series = this._query_ChartSeriesComponent_7_0.first;
    this._query_ChartXAxisComponent_7_1.reset(([] as any[]));
    this._ChartComponent_7_5.context.xAxis = this._query_ChartXAxisComponent_7_1.first;
    this._query_ChartYAxisComponent_7_2.reset(([] as any[]));
    this._ChartComponent_7_5.context.yAxis = this._query_ChartYAxisComponent_7_2.first;
    compView_7.create(this._ChartComponent_7_5.context,([] as any[]),(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.HighchartsService) && (7 === requestNodeIndex))) { return this._HighchartsService_7_4; }
    if (((token === import14.ChartComponent) && (7 === requestNodeIndex))) { return this._ChartComponent_7_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this.context.options;
    this._ChartComponent_7_5.check_options(currVal_7_0_0,throwOnChange,false);
    this._ChartComponent_7_5.detectChangesInInputProps(this,this._el_7,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._ChartComponent_7_5.detectChangesInHostProps(this,this._el_7,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._ChartComponent_7_5.context.ngAfterViewInit(); } }
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}
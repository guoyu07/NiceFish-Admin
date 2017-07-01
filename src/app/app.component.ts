import { Component, HostListener, ElementRef, Renderer, Renderer2, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/merge';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;

	constructor(
		public elementRef: ElementRef,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		public toastr: ToastsManager,
		public vcr: ViewContainerRef,
		public viewContainerRef: ViewContainerRef, 
		public renderer: Renderer2
	) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	ngOnInit() {
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
			console.log("全局监听点击事件>" + event);
		});
		
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');
		const browserLang = this.translate.getBrowserLang();
		console.log("检测到的浏览器语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}
}
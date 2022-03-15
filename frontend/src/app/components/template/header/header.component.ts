import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private headerService: HeaderService) { }

	ngOnInit(): void {
	}

	get title(): string {
		const title = this.headerService.headerData.title;

		return title ? title : '';
	}

	get icon(): string {
		const icon = this.headerService.headerData.icon;

		return icon ? icon : '';
	}

	get routeUrl(): string {
		const routeUrl = this.headerService.headerData.routeUrl;

		return routeUrl ? routeUrl : '';
	}

}

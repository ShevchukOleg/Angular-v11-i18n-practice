import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { languageType } from '../variables/languagesType';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  public languagesList: {
    [propName: string]: string
  } = {
      en: 'English',
      fr: 'Franch',
      uk: 'Ukrainian',
      ru: 'Russian'
    };
  private clickObservable: Observable<any> = fromEvent(document, 'click');
  public siteLocale: string = '';
  public currentLanguage: string = languageType.EN;
  public chooseLanguage = false;
  private unsubscribe$ = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
    // Location.pathname - міститьперший '/' після хосту з пдальшим URL
    this.siteLocale = window.location.pathname.split('/')[1];
    this.currentLanguage = this.languagesList[this.siteLocale]
    console.log(this.currentLanguage)
    this.clickObservable.pipe(
      map((event: MouseEvent) => event.target as HTMLElement),
      takeUntil(this.unsubscribe$)
    ).subscribe(
      (target: HTMLElement) => {
        if (target.closest('.languages')) {
          return;
        } else if (!!this.chooseLanguage) {
          this.toggleNavMenu()
        }
      }
    )
  }

  public toggleNavMenu() {
    this.chooseLanguage = !this.chooseLanguage;
  }



}

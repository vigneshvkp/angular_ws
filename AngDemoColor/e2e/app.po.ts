import { browser, by, element } from 'protractor';

export class AngDemoColorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

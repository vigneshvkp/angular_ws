import { AngDemoColorPage } from './app.po';

describe('ang-demo-color App', () => {
  let page: AngDemoColorPage;

  beforeEach(() => {
    page = new AngDemoColorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

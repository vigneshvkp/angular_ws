import { FirstfirecrudPage } from './app.po';

describe('firstfirecrud App', () => {
  let page: FirstfirecrudPage;

  beforeEach(() => {
    page = new FirstfirecrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

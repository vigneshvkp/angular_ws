import { THIPage } from './app.po';

describe('thi App', () => {
  let page: THIPage;

  beforeEach(() => {
    page = new THIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

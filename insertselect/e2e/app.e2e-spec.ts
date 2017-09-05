import { InsertselectPage } from './app.po';

describe('insertselect App', () => {
  let page: InsertselectPage;

  beforeEach(() => {
    page = new InsertselectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

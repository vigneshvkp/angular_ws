import { MySampleCrudWithBootPage } from './app.po';

describe('my-sample-crud-with-boot App', () => {
  let page: MySampleCrudWithBootPage;

  beforeEach(() => {
    page = new MySampleCrudWithBootPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

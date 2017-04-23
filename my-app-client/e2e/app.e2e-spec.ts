import { MyAppClientPage } from './app.po';

describe('my-app-client App', () => {
  let page: MyAppClientPage;

  beforeEach(() => {
    page = new MyAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

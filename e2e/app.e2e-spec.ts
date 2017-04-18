import { SupseanalivPage } from './app.po';

describe('supseanaliv App', () => {
  let page: SupseanalivPage;

  beforeEach(() => {
    page = new SupseanalivPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

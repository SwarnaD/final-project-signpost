import { SignpostPage } from './app.po';

describe('signpost App', () => {
  let page: SignpostPage;

  beforeEach(() => {
    page = new SignpostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

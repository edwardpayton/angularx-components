import { AngularxComponentsPage } from './app.po';

describe('angularx-components App', () => {
  let page: AngularxComponentsPage;

  beforeEach(() => {
    page = new AngularxComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

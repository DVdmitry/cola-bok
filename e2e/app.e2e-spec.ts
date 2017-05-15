import { VeloclubPage } from './app.po';

describe('veloclub App', function() {
  let page: VeloclubPage;

  beforeEach(() => {
    page = new VeloclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

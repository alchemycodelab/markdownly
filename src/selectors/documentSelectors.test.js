import { getTabName, getHistoryArray, getCurrentIndex, getLandingPage  } from './documentSelectors';

describe('save markdown selectors', ()=> {
  const state = {
    tabName: 'dog',
    history: 'cat',
    currentIndex: 1,
    landingPage: false
  };
  it('getCurrentTab gets the right state', ()=> {
    expect(getTabName(state)).toEqual('dog');
  });
  it('gethistoryArray gets the right state', ()=> {
    expect(getHistoryArray(state)).toEqual('cat');
  });
  it('getCurrentIndex gets the right state', ()=> {
    expect(getCurrentIndex(state)).toEqual(1);
  });
  it('getCurrentTab gets the right state', ()=> {
    expect(getLandingPage(state)).toEqual(false);
  });
});

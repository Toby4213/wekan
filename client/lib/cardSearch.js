import Cards from '../../models/cards';
import SessionData from '../../models/usersessiondata';

export class CardSearchPagedComponent extends BlazeComponent {
  onCreated() {
    this.searching = new ReactiveVar(false);
    this.hasResults = new ReactiveVar(false);
    this.hasQueryErrors = new ReactiveVar(false);
    this.query = new ReactiveVar('');
    this.resultsHeading = new ReactiveVar('');
    this.searchLink = new ReactiveVar(null);
    this.results = new ReactiveVar([]);
    this.hasNextPage = new ReactiveVar(false);
    this.hasPreviousPage = new ReactiveVar(false);
    this.resultsCount = 0;
    this.totalHits = 0;
    this.queryErrors = null;
    this.resultsPerPage = 25;
    this.sessionId = SessionData.getSessionId();
    this.subscriptionHandle = null;
    this.serverError = new ReactiveVar(false);

    const that = this;
    this.subscriptionCallbacks = {
      onReady() {
        that.getResults();
        that.searching.set(false);
        that.hasResults.set(true);
        that.serverError.set(false);
      },
      onError(error) {
        that.searching.set(false);
        that.hasResults.set(false);
        that.serverError.set(true);
        console.log('Error.reason:', error.reason);
        console.log('Error.message:', error.message);
        console.log('Error.stack:', error.stack);
      },
    };
  }

  resetSearch() {
    this.searching.set(false);
    this.results.set([]);
    this.hasResults.set(false);
    this.hasQueryErrors.set(false);
    this.resultsHeading.set('');
    this.serverError.set(false);
    this.resultsCount = 0;
    this.totalHits = 0;
    this.queryErrors = null;
  }

  getSessionData(sessionId) {
    return SessionData.findOne({
      sessionId: sessionId ? sessionId : SessionData.getSessionId(),
    });
  }

  getResults() {
    // eslint-disable-next-line no-console
    // console.log('getting results');
    const sessionData = this.getSessionData();
    // eslint-disable-next-line no-console
    // console.log('selector:', sessionData.getSelector());
    console.log('session data:', sessionData);
    const cards = [];
    sessionData.cards.forEach(cardId => {
      cards.push(Cards.findOne({ _id: cardId }));
    });
    this.queryErrors = sessionData.errors;
    if (this.queryErrors.length) {
      // console.log('queryErrors:', this.queryErrorMessages());
      this.hasQueryErrors.set(true);
      return null;
    }

    if (cards) {
      this.totalHits = sessionData.totalHits;
      this.resultsCount = cards.length;
      this.resultsStart = sessionData.lastHit - this.resultsCount + 1;
      this.resultsEnd = sessionData.lastHit;
      this.resultsHeading.set(this.getResultsHeading());
      this.results.set(cards);
      this.hasNextPage.set(sessionData.lastHit < sessionData.totalHits);
      this.hasPreviousPage.set(
        sessionData.lastHit - sessionData.resultsCount > 0,
      );
      return cards;
    }

    this.resultsCount = 0;
    return null;
  }

  stopSubscription() {
    if (this.subscriptionHandle) {
      this.subscriptionHandle.stop();
    }
  }

  runGlobalSearch(queryParams) {
    this.searching.set(true);
    this.stopSubscription();
    this.subscriptionHandle = Meteor.subscribe(
      'globalSearch',
      this.sessionId,
      queryParams.params,
      queryParams.text,
      this.subscriptionCallbacks,
    );
  }

  queryErrorMessages() {
    const messages = [];

    this.queryErrors.forEach(err => {
      let value = err.color ? TAPi18n.__(`color-${err.value}`) : err.value;
      if (!value) {
        value = err.value;
      }
      messages.push(TAPi18n.__(err.tag, value));
    });

    return messages;
  }

  nextPage() {
    this.searching.set(true);
    this.stopSubscription();
    this.subscriptionHandle = Meteor.subscribe(
      'nextPage',
      this.sessionId,
      this.subscriptionCallbacks,
    );
  }

  previousPage() {
    this.searching.set(true);
    this.stopSubscription();
    this.subscriptionHandle = Meteor.subscribe(
      'previousPage',
      this.sessionId,
      this.subscriptionCallbacks,
    );
  }

  getResultsHeading() {
    if (this.resultsCount === 0) {
      return TAPi18n.__('no-cards-found');
    } else if (this.resultsCount === 1) {
      return TAPi18n.__('one-card-found');
    } else if (this.resultsCount === this.totalHits) {
      return TAPi18n.__('n-cards-found', this.resultsCount);
    }

    return TAPi18n.__('n-n-of-n-cards-found', {
      start: this.resultsStart,
      end: this.resultsEnd,
      total: this.totalHits,
    });
  }

  getSearchHref() {
    const baseUrl = window.location.href.replace(/([?#].*$|\s*$)/, '');
    return `${baseUrl}?q=${encodeURIComponent(this.query.get())}`;
  }

  events() {
    return [
      {
        'click .js-next-page'(evt) {
          evt.preventDefault();
          this.nextPage();
        },
        'click .js-previous-page'(evt) {
          evt.preventDefault();
          this.previousPage();
        },
      },
    ];
  }
}

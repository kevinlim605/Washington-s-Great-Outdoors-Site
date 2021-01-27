import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Directory from './Directory';
import ActivityInfo from './ActivityInfo';
import Favorites from './Favorites';
import Contact from './Contact';
import {
  fetchActivities,
  fetchHiking,
  fetchBiking,
  fetchKayaking,
  fetchFishing,
  fetchCamping,
  fetchClimbing,
} from '../redux/ActionCreator';

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    hiking: state.hiking,
    biking: state.biking,
    kayaking: state.kayaking,
    fishing: state.fishing,
    camping: state.camping,
    climbing: state.climbing,
  };
};

const mapDispatchToProps = {
  fetchActivities: () => fetchActivities(),
  fetchHiking: () => fetchHiking(),
  fetchBiking: () => fetchBiking(),
  fetchKayaking: () => fetchKayaking(),
  fetchFishing: () => fetchFishing(),
  fetchCamping: () => fetchCamping(),
  fetchClimbing: () => fetchClimbing(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchActivities();
    this.props.fetchHiking();
    this.props.fetchBiking();
    this.props.fetchKayaking();
    this.props.fetchFishing();
    this.props.fetchCamping();
    this.props.fetchClimbing();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="main">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/directory">
              <Directory activities={this.props.activities.activities} />
            </Route>
            <Route path="/directory/hiking">
              <ActivityInfo activity={this.props.hiking.hiking} />
            </Route>
            <Route path="/directory/biking">
              <ActivityInfo activity={this.props.biking.biking} />
            </Route>
            <Route path="/directory/kayaking">
              <ActivityInfo activity={this.props.kayaking.kayaking} />
            </Route>
            <Route path="/directory/fishing">
              <ActivityInfo activity={this.props.fishing.fishing} />
            </Route>
            <Route path="/directory/camping">
              <ActivityInfo activity={this.props.camping.camping} />
            </Route>
            <Route path="/directory/climbing">
              <ActivityInfo activity={this.props.climbing.climbing} />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

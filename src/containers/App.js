// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import { Grid, Container, Loader, Header, Input, Message } from 'semantic-ui-react';
import Cake from '../components/Cake';
import List from '../components/List';
// Actions
import { addCakes, updateCake, removeCakeById } from '../actions/cakes';

const CAKES_URI = 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json';


class App extends Component {

  state = {
    loading: true,
    networkError: false,
    searchQuery: '',
  }

  async componentDidMount() {
    try {
      const response = await fetch(CAKES_URI);
      if (!response.ok) {
        throw new Error('API fetch failed');
      }
      const cakes = await response.json();
      this.props.addCakes(cakes);
      // eslint-disable-next-line
      this.setState({ loading: false });
    } catch (error) {
      // eslint-disable-next-line
      this.setState({
        loading: false,
        networkError: true,
      });
    }
  }

  handleSearchChange = (event, data) => {
    this.setState({ searchQuery: data.value });
  }

  matchSearch = (cakes) => {
    const { searchQuery } = this.state;
    const query = searchQuery.toLowerCase();
    return cakes.filter((cake) => {
      const cakeStr = Object.values(cake).toString().toLowerCase();
      return cakeStr.search(query) !== -1;
    });
  }

  render() {
    const { loading, searchQuery, networkError } = this.state;
    const { cakes, update, remove } = this.props;
    return (
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column
              mobile={14}
              tablet={14}
              computer={12}
            >
              <Message
                warning
                hidden={!networkError}
                className="md-top-buffer"
              >
                <Message.Header>Network problem!</Message.Header>
                <p>We were unable to retrieve fresh cakes from our server, refresh the page</p>
              </Message>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="middle">
            <Grid.Column
              mobile={7}
              tablet={7}
              computer={6}
            >
              <Header>Cakes</Header>
            </Grid.Column>
            <Grid.Column
              mobile={7}
              tablet={7}
              computer={6}
            >
              <Input
                icon={{ name: 'search', circular: true, link: true }}
                placeholder="Search..."
                onChange={this.handleSearchChange}
                value={searchQuery}
                style={{ float: 'right' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              mobile={14}
              tablet={14}
              computer={12}
            >
              <Loader active={loading} />
              <List
                items={this.matchSearch(cakes)}
                RowComponent={Cake}
                onRowEdit={cake => update(cake)}
                onRowRemove={cake => remove(cake.id)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

App.propTypes = {
  cakes: PropTypes.array.isRequired,
  addCakes: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ cakes: state.cakes });

const mapDispatchToProps = dispatch => ({
  addCakes: cakes => dispatch(addCakes(cakes)),
  update: cake => dispatch(updateCake(cake)),
  remove: id => dispatch(removeCakeById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

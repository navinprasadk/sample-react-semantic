import React from 'react'
import { Input, Grid } from 'semantic-ui-react'

const Search = () => (
  <Grid centered>
  <Grid.Column mobile={16} tablet={8} computer={4}>
  <Input icon='search' placeholder='Explore the movie' id="searchInputBox"/>
  </Grid.Column>
  </Grid>
)
export default Search

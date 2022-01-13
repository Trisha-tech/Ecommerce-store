import React, { useState, useEffect } from 'react'
import { makeStyles, InputBase, List, ListItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
    marginLeft: 10,
    width: '38%',
    display: "flex"
  },
  searchIcon: {
    padding: 5,
    marginLeft: 'auto',
    display: 'flex',
    color: "blue"
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%"
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%',
  },
  list: {
    position: 'absolute',
    color: '#000',
    background: '#FFFFFF',
    marginTop: 36
  }
}))

const SearchBar = () => {
  const classes = useStyles();

  const [text, setText] = useState();
  const [open, setOpen] = useState(true)

  const getText = (text) => {
    setText(text);
    setOpen(false)
  }

  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <div className={classes.search}>

      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => getText(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {
        text &&
        <List className={classes.list} hidden={open}>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </List>
      }
    </div>
  )
}

export default SearchBar;
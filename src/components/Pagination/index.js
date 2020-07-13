import React from 'react'
import PropTypes from 'prop-types'
import pagination from '../../utils/pagination'

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import { Pagination as PaginationComponent, Item, Button } from './styles'

const Pagination = ({ total, activePage, onClick }) => (
  <PaginationComponent>
    <Item onClick={() => (activePage > 1 ? onClick(activePage - 1) : '')}>
      <Button disabled={activePage === 1}>
        <FiChevronsLeft />
      </Button>
    </Item>

    {pagination({ total, activePage }).map((page, index) => (
      <Item key={index} onClick={() => (page === '...' ? '' : onClick(page))}>
        <Button active={page === activePage ? 'true' : 'false'}>{page}</Button>
      </Item>
    ))}

    <Item onClick={() => (activePage < total ? onClick(activePage + 1) : '')}>
      <Button disabled={activePage === total}>
        <FiChevronsRight />
      </Button>
    </Item>
  </PaginationComponent>
)

Pagination.defaultProps = {
  activePage: 1,
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  onClick: PropTypes.func,
}

export default Pagination

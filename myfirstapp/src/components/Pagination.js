import React, { Component } from 'react';
import ReactPaginate from react-Paginate;
import axios from "axios";

<ReactPaginate
previousLabel={"prev"}
nextLabel={"next"}
breakLabel={"..."}
pageCount={this.state.pageCount}
marginPagesDisplay={2}
pageRangeDisplay={5}
onPageChange={this.handlePageClick}
containerClassName={"pagination"}
subContainerClassName={"pages pagination"}
activeClassName={"active"}/>


export default pagination;
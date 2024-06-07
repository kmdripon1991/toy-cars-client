import React from "react";
// import { Table } from '@table-library/react-table-library/table';
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { usePagination } from "@table-library/react-table-library/pagination";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToyCars = useLoaderData();
  console.log(allToyCars);
  
  const data = { nodes: allToyCars };
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });
  function onPaginationChange(action, state) {
    console.log(action, state);
  }
  return (
    <div className="container mx-auto px-4">
      <Table data={data} pagination={pagination}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Seller</HeaderCell>
                <HeaderCell>Toy Name</HeaderCell>
                <HeaderCell>Sub-category</HeaderCell>
                <HeaderCell>Price</HeaderCell>
                <HeaderCell>Available Quantity</HeaderCell>
                <HeaderCell>View Details</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row className="space-y-5" key={item._id} item={item}>
                  <Cell>{item.seller_name}</Cell>
                  <Cell>{item.toy_name}</Cell>
                  <Cell>{item.toy_sub_category}</Cell>
                  <Cell>{item.price}</Cell>
                  <Cell>{item.available_quantity}</Cell>
                  <Cell>
                    <Link to={`/toy/${item._id}`}>
                      <button className="btn btn-sm">View Details</button>
                    </Link>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>

        <span className="space-x-3">
          Page:{" "}
          {pagination.state.getPages(data.nodes).map((_, index) => (
            <button
              key={index}
              type="button"
              style={{
                fontWeight: pagination.state.page === index ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default AllToys;

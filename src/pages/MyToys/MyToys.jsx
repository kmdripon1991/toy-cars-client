import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import "react-tabs/style/react-tabs.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user.email);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`https://glitter-tidy-gondola.glitch.me/cars/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  //   console.log(myToys);
  const data = { nodes: myToys };

  const handleDeleteToy = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://glitter-tidy-gondola.glitch.me/cars/my-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      const remaining = myToys.filter(item=>item._id!==id)
      setMyToys(remaining)
    });
  };
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-center text-2xl font-bold">My toys</h1>
      <div className="p-5">
        <Table data={data}>
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
                    <Cell className="inline-flex">
                      <Link className="mr-3" to={`/toy/${item._id}`}>
                        <button className="btn btn-sm">
                          <FaPen />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteToy(item._id)}
                        className="btn btn-sm"
                      >
                        <FaTrash />
                      </button>
                    </Cell>
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </div>
    </div>
  );
};

export default MyToys;

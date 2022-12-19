import React from "react";

const ServicesTable = ({ order,index }) => {
  const { name, email, serviceName, price } = order;
  return (
    <tr>
      <th>{index +1 }</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{price}</td>
      <td>unpain</td>
    </tr>
  );
};

export default ServicesTable;

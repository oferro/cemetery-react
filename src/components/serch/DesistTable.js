import React from "react";
import { Container, Table } from "react-bootstrap";

const DesistTable = (desistList) => {
  // console.log("table sorce: ",typeof desistList, " length : ",Object.values(desistList).length, Object.values(desistList));

  let dstTable = [];
  dstTable = Array.from(Object.values(desistList));
  dstTable.length ? (dstTable = dstTable[0]) : (dstTable = ["", ""]);
  console.log("dstTable = : ", dstTable);

  const renderDesist = (dst) => {
    const urlSerchById = "http://localhost:3001/desist/serch/" + dst.id;
    console.log("renderDesist row :", dst);
    return (
      <tr key={dst.id}>
        <td>
          <a href={urlSerchById}>{dst.forename}</a>
        </td>
        <td>{dst.sorname}</td>
      </tr>
    );
  };

  return (
    <Container>
      <Table className="responsive striped bordered hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{dstTable.map(renderDesist)}</tbody>
      </Table>
    </Container>
  );
};

export default DesistTable;

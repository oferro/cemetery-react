import React from "react";
import { Container, Table } from "react-bootstrap";
import TabID from "../tabs/TabID";

const DesistTable = (desistList) => {
  // console.log("table sorce: ",typeof desistList, " length : ",Object.values(desistList).length, Object.values(desistList));

  let dstTable = desistList;
  dstTable = Array.from(Object.values(desistList));
  dstTable.length ? (dstTable = dstTable[0]) : (dstTable = ["", ""]);
  console.log("dstTable = : ", dstTable);

  const renderDesist = (dst) => {
    // const urlSerchById = dst.id;
    console.log("renderDesist row :", dst);
    let desistSrc = "http://localhost:3001/desist/"+dst.id;
    return (
      <tr key={dst.id}>
        <td>
          <a href={desistSrc}>
          {dst.forename}
          </a>
        </td>
        <td>{dst.sorname}</td>
      </tr>
    );
  };

  return (
    <Container>
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
    <TabID id={dstTable[0].id} />
    </Container>
  );
};

export default DesistTable;

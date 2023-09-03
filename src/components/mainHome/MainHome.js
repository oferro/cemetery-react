import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import MemoryDayCarusel from "../memoryDayCarusel/MemoryDayCarusel";
import Serch from "../serch/Serch";
import DesistTable from "../serch/DesistTable";
import FDApi from "../../fdAPI/FDApi";

const MainHome = () => {
  const [serchValue, setSerchValue] = useState("");
  const [desistList, setDesistList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [noData, setNoData] = useState(""); // fetch status === 400 Not Found

  useEffect(() => {
    // setDesistList([]);
    async function getDesistList() {
      FDApi.fetchSerchData(serchValue)
        .then(
          (dstFiltered) => setDesistList(dstFiltered),
          setLoading(false),
          console.log(
            serchValue,
            " typeof : ",
            typeof desistList,
            "desistList",
            desistList
          )
        )
        .catch(console.log);
    }

    if (serchValue.length) {
      getDesistList();
      (desistList.length ? setNoData("Not Found") : setNoData(""))
    } else {
      setDesistList([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serchValue]);

  return (
    <>
      <header className="App-header">
        <p>בית עלמין - כפר מימון</p>
      </header>
      <div>
        <Row>
          <Col xs={3}>
            <MemoryDayCarusel />
          </Col>
          <Col xs={9}>
            <Container className="fs-5">
              <p>
                כפר מימון הינו מושב דתי השוכן בצפון מערב הנגב. המושב עלה על
                הקרקע בשנת 1959 והוקם על ידי גרעין של תנועת בני עקיבא. טקס
                העלייה נערך בט"ו באב התשי"ט (אוגוסט 59). מדובר למעשה במושב
                הראשון בישראל שהוקם על ידי גרעין התנועה הדתית-לאומית, בני עקיבא.
              </p>
              <p>
                בית העלמין הוכרז לאחר מקרה טרגי שבו נהרג חבר הגרעין. בית העלמין
                הוקם בשטחי הישוב. בתוך הפרדסים שהיו על השטחים המשותפים של חברי
                המושב.
              </p>
              <p className="fs-6">
                אחת מחוויות הילדות המפחידות, היתה ללכת לבית העלמין ב
                <strong>"פרדס"</strong>.
              </p>
              <Serch callback={(serchValue) => setSerchValue(serchValue)} />
              {/* Checking for loading state before rendering the data */}
              {loading ? (
                <p>Loading...</p>
              ) : !desistList.length ? (
                <p>{noData}</p>
              ) : (
                <DesistTable desistList={desistList} />
              )}
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainHome;

import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Accordion } from "react-bootstrap";
import CustomAccordianItem from "./components/CustomAccordianItem";

function App() {
  const [state, setState] = useState({
    items: [
      {
        name: "Transportation",
        optionList: ["option 1", "option 2"],
        checkStateList: [false, false],
        cost: [420, 421],
      },
      {
        name: "Accomodation",
        optionList: ["option 1", "option 2"],
        checkStateList: [false, false],
        cost: [420, 421],
      },
      {
        name: "Rental",
        optionList: ["option 1", "option 2"],
        checkStateList: [false, false],
        cost: [420, 421],
      },
      {
        name: "Passes",
        optionList: ["real content", "option 2"],
        checkStateList: [false, false],
        cost: [420, 421],
      },
    ],
  });

  const updateCheckState = (e) => {
    const newItems = [...state.items];
    newItems[e.target.id[0]].checkStateList = [false, false];
    if (e.target.checked){
      newItems[e.target.id[0]].checkStateList[e.target.id[2]] = true;
    }

    setState((state) => ({
      ...state,
      items: newItems,
    }));
  };

  const AccordianItems = state.items.map((item, index) => (
    <CustomAccordianItem
      key={index}
      header={item.name}
      eventKey={index}
      options={item.optionList}
      checkState={item.checkStateList}
      optionIndex={index}
      updateCheckState={updateCheckState}
    />
  ));

  const TableBody = state.items.map((item, index) => (
    <tbody key={index}>
      {item.checkStateList.map((checkState, checkIndex) => {
        return checkState ? (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.optionList[checkIndex]}</td>
            <td>{item.cost[checkIndex]}</td>
          </tr>
        ) : null;
      })}
    </tbody>
  ));
  
  let sum = 0

  state.items.forEach((item) => {
    item.checkStateList.forEach((checkState,index) => {
      if(checkState){
        sum += item.cost[index]
      }
    });
  });

  return (
    <>
      <Accordion>{AccordianItems}</Accordion>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Selection</th>
            <th>Option Selected</th>
            <th>Cost</th>
          </tr>
        </thead>
        {TableBody}
      </Table>
      <h1>TOTAL {sum}</h1>
    </>
  );
}

export default App;

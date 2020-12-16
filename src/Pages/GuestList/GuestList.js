import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./GuestList.css";

import Card from "./Components/Card.js";
import AddCard from "./Components/AddCard.js";
import { ApiGetCardData, ApiGetOverAllGuests } from "../../API/GuestList";
import CategoryModal from "./Components/CategoryModal";
import NewCardModal from "./Components/NewCardModal.js";
import { spinner } from "../../Utils/BootstrapComponents";
import { mapStateToProps, mapDispathToProps } from "./State/GuestListState";

function GuestList(props) {
  useEffect(() => {
    cardData();
    overAllGeusts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardData = () => {
    ApiGetCardData()
      .then((res) => {
        if (res.state === "successes") {
          props.addCards(res.res.tableRows);
        } else {
          alert("server error");
        }
      })
      .then(() => props.spinnerOf())
      .catch(() => alert("server error"));
  };

  const overAllGeusts = async () => {
    const res = await ApiGetOverAllGuests();
    await props.updateOverallGuests(res.res.overallGuests);
  };

  const showCards = () => {
    const chunk = 3;
    let final = [];
    for (let i = 0, j = props.cardData.length; i < j; i += chunk) {
      let temparraylist = props.cardData.slice(i, i + chunk);
      final.push(
        <div className="d-flex justify-content-center row-holder" key={i}>
          {temparraylist.map((card) => createCard(card))}
        </div>
      );
    }
    return final;
  };

  const createCard = (cardData) => {
    if (cardData.title === "ADD_PLUSE_CARD") {
      return (
        <AddCard
          key={cardData.id}
          newCardModal={props.createNewCardModalTrue}
        />
      );
    }
    return <Card cardData={cardData} key={cardData.id} />;
  };

  return (
    <div className="guestList">
      <NewCardModal
        modalFalse={props.createCardModalFalse}
        addCards={props.addCards}
      />
      <CategoryModal
        cardData={cardData}
        modal={props.modal}
        modalFalse={props.modalFalse}
        categoryId={props.categoryId}
        categoryName={props.categoryName}
      />
      <div className="d-flex justify-content-center">
        <h1>מוזמנים - {props.overAllGeusts}</h1>
      </div>
      <div className="guest-list-spinner">{spinner(props.showSpinner)}</div>
      <div className="categoryHolder">{showCards()}</div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(GuestList);

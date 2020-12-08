import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addCards,
  modalFalse,
  createNewCardModalTrue,
  createCardModalFalse,
  spinnerOf,
} from "../../State/Actions/guestActions";

import { spinner } from "../../Utils/BootstrapComponents";

import { getCardDataGET } from "../../Utils/ApiRequest";
import NewCardModal from "./SubComponents/NewCardModal.js";
import CategoryModal from "./SubComponents/CategoryModal";
import AddCard from "./SubComponents/AddCard.js";
import Card from "./SubComponents/Card.js";
import "./GuestList.css";

function GuestList(props) {
  useEffect(() => {
    cardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardData = () => {
    getCardDataGET()
      .then((res) => res.json())
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
        <h1>מוזמנים</h1>
      </div>
      <div className="guest-list-spinner">{spinner(props.showSpinner)}</div>
      <div className="categoryHolder">{showCards()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cardData: state.cardData,
    modal: state.modal,
    categoryId: state.categoryId,
    categoryName: state.categoryName,
    showSpinner: state.showSpinner,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addCards: (data) => {
      dispatch(addCards(data));
    },
    modalFalse: () => {
      dispatch(modalFalse());
    },
    createNewCardModalTrue: () => {
      dispatch(createNewCardModalTrue());
    },
    createCardModalFalse: () => {
      dispatch(createCardModalFalse());
    },
    spinnerOf: () => {
      dispatch(spinnerOf());
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(GuestList);

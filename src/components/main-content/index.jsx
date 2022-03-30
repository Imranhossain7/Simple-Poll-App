import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ParticipationForm from "./participate-form";
import PollForm from "../poll-form";

class MainContent extends React.Component {
  state = {
    openModal: false,
  };

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    if (Object.keys(this.props.poll).length === 0) {
      return (
        <div>
          <h3> Welcome to the application</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            qui sint, quod doloribus illo ipsum? Alias, earum autem. Quibusdam
            at eligendi quasi provident! Laboriosam unde soluta minus rerum cum
            aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Iusto numquam nemo porro corporis dolor error iste tempora mollitia,
            doloribus dolorem nostrum dignissimos, nobis odio praesentium veniam
            pariatur architecto ducimus id!
          </p>
        </div>
      );
    }

    const { poll, getOpinion, deletePoll, updatePoll } = this.props;

    return (
      <div>
        <h3>{poll.title}</h3>
        <p>{poll.description}</p>
        <br />
        <ParticipationForm
          poll={poll}
          getOpinion={getOpinion}
          toggleModal={this.toggleModal}
          deletePoll={deletePoll}
        />
        <Modal
          isOpen={this.state.openModal}
          toggle={this.toggleModal}
          unmountOnClose={true}
        >
          <ModalHeader toggle={this.toggleModal}>Update Poll</ModalHeader>
          <ModalBody>
            <PollForm
              poll={poll}
              isUpdate={true}
              submit={updatePoll}
              buttonValue="Update Poll"
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MainContent;

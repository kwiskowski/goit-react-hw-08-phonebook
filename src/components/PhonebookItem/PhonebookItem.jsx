// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import { deleteContact } from 'components/redux/operations';
// import css from './PhonebookItem.module.css';

// function PhonebookItem({ contact }) {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(contact.id));
//   };

//   return (
//     <li className={css.contactListItem}>
//       <span className={css.contactName}>{contact.name}</span>
//       <span className={css.contactNumber}>{contact.number}</span>
//       <button className={css.contactButton} onClick={handleDelete}>
//         Delete
//       </button>
//     </li>
//   );
// }
// PhonebookItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

// export default PhonebookItem;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact, editContatc } from 'components/redux/operations';
import { Modal, Input, Button, message, Popconfirm } from 'antd';
import css from './PhonebookItem.module.css';

function PhonebookItem({ contact }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const confirm = e => {
    handleDelete(e.target.value);
    message.success('Click on Yes');
  };
  const cancel = e => {
    console.log(e);
    message.error('Click on No');
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContatc({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  return (
    <li className={css.contactListItem}>
      <span className={css.contactName}>{contact.name}</span>
      <span className={css.contactNumber} href={`tel:${contact.number}`}>
        {contact.number}
      </span>
      <button className={css.contactButton} onClick={handleEdit}></button>
      <Popconfirm
        title="Delete the contact"
        description="Are you sure to delete this contact?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <button className={css.contactButton} danger></button>
      </Popconfirm>

      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div className="modal-content">
          <label>New Name:</label>
          <Input
            type="text"
            value={newName}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>New Number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number format could be: +1 555 1234567 or 555 1234567."
            required
          />
        </div>
      </Modal>
    </li>
  );
}

PhonebookItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default PhonebookItem;

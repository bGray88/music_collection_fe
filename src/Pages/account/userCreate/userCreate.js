import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { userCreateApi } from '../../../api/users/usersApi';
import Message from '../../../components/ui/message/message';
import Loading from '../../../components/ui/loading/loading';

import './userCreate.css'

const UserCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setUserEmail]     = useState('');
  const [password, setPassword]   = useState('');
  const [isLoading, setLoading] = useState(false);
  const [createMessage, setCreateMessage] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [createResult, setCreateResult]       = useState({});

  const navigate = useNavigate();

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  }
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }
  const passwordConfirmChangeHandler = (event) => {
    setPasswordConfirm(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setCreateResult({});

    const userData = {
      first_name: firstName,
      last_name:  lastName,
      email:      email,
      password:   password,
      password_confirmation: passwordConfirm
    }

    setCreateResult(userCreateApi(userData, setCreateResult, setLoading));
    setFirstName('');
    setLastName('');
    setUserEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  useEffect(() => {
    if (createResult !== {} && createResult.hasOwnProperty('success')) {
      setCreateMessage(createResult.success);
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } else if (createResult !== {} && createResult.hasOwnProperty('errors')) {
      setCreateMessage(createResult.errors);
      setTimeout(() => {
        navigate('/sign-up');
      }, 2000);
    }
  }, [createResult, navigate])

  if (isLoading) {
    return (
      <div className='create-loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return(
      <div className="user-create">
        {createResult && (
          <Message message={createMessage} />
        )}
        <h1>New User Form</h1>
        <form className='user-create_form' onSubmit={submitHandler}>
          <label>First Name</label>
          <div>
            <input type="text" value={firstName} onChange={firstNameChangeHandler} />
          </div>
          <label>Last Name</label>
          <div>
            <input type="text" value={lastName} onChange={lastNameChangeHandler} />
          </div>
          <label>Email</label>
          <div>
            <input type="text" value={email} onChange={emailChangeHandler} />
          </div>
          <label>Password</label>
          <div>
            <input type="password" value={password} onChange={passwordChangeHandler}/>
          </div>
          <label>Confirm Password</label>
          <div>
            <input type="password" value={passwordConfirm} onChange={passwordConfirmChangeHandler}/>
          </div>
          <div>
            <button type="submit"
              className="btn btn-success"
            >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserCreate;
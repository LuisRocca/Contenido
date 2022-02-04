import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const Group = () => {

    const {dane} = useParams()
  const dispatch = useDispatch();
  const {service} = useSelector(state => state)
  console.log(dane,"estes ")

  return <div></div>;
};

export default Group;

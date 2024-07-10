import axios from 'axios';

const sendEmail = async (data) => {
  return axios({
    method: 'post',
    url: '/api/send-email',
    data,
  });
};

export default sendEmail;

import axios from 'axios';

export const submitContactForm = (
  name: string,
  organization: string,
  email: string,
  intrests: string[]
) => {
  return axios
    .get(
      'https://script.google.com/macros/s/AKfycbzwoTXS1qE4uKGdgDuq0V3O96eP-DlntcqmPQUoWRvpnX6Zs1L-/exec',
      { params: { name, organization, email } }
    )
    .then(response => response.status === 200)
    .catch(error => {
      return false;
    });
};

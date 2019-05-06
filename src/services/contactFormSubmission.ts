import axios from 'axios';

export const submitContactForm = (
  name: string,
  organization: string,
  email: string,
  interests: string,
) => {
  console.log(interests);
  return axios
    .get(
      'https://script.google.com/macros/s/AKfycbzwoTXS1qE4uKGdgDuq0V3O96eP-DlntcqmPQUoWRvpnX6Zs1L-/exec',
      { params: { name, organization, email, interests } },
    )
    .then((response) => response.status === 200)
    .catch((error) => {
      return false;
    });
};

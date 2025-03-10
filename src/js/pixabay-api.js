import axios from 'axios';

export function getAllImages(massege) {
  const baseURL = 'https://pixabay.com/api/';

  const params = {
    key: '49101285-dc6548589a888be5ea0d6fe27',
    q: `${massege}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(baseURL, { params }).then(res => res.data.hits);
}
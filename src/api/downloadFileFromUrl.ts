import axios from 'axios';

export const downloadFileFromUrl = (url: string, fileName: string) => {
  axios({
    url: url,
    method: 'GET',
    responseType: 'blob',
  }).then((response: any) => {
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const fileLink = document.createElement('a');

    fileLink.href = fileURL;
    fileLink.setAttribute('download', `${fileName}.zip`);
    document.body.appendChild(fileLink);
    fileLink.click();
  });
};

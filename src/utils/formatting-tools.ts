export const dateFormatter = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
};

export const imagePathFormatter = (slug: string, imgName: string) => {
  const newPath = `/images/posts/${slug}/${imgName}`;

  return newPath;
};

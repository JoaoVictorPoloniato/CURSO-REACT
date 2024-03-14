export const loadPosts = async () => {
  try {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (!postsResponse.ok || !photosResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    const [posts, photos] = await Promise.all([postsResponse.json(), photosResponse.json()]);

    const postsAndPhotos = posts.map((post, index) => {
      return { ...post, cover: photos[index].url };
    });

    return postsAndPhotos;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
};

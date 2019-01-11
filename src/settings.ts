export const settings = {
  prismicEndpoint: 'https://eyra-test.prismic.io/api/v2',
  backendURL: 'www.test.com'
};

export const getSettings = async () => {
  try {
    const result = await fetch('env.json');
    const env = await result.json();
    Object.assign(settings, env);
    return settings;
  } catch (e) {
    console.log('could not get settings, using defaults');
    return settings;
  }
 }




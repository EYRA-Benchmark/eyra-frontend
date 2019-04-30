export default (props: any) => {
  console.log('error', props);
  return <div>OOPS ERROR {JSON.stringify(props)}</div>;
};

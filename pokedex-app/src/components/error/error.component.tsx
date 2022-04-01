const Error = (props: { heading: string, message: string }) => {
  const { heading, message } = props;

  return (
    <article className="error">
      <div className="error__wrapper">
        <h1 className="error__heading error__heading--main">{heading}</h1>
        <h2 className="error__heading error__heading--sub">{message}</h2>
      </div>
    </article>
  )
}

export default Error;

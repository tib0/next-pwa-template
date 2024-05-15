function Error({ statusCode }: any) {
  return (
    <p>
      {statusCode
        ? `Une erreur ${statusCode} est survenue sur le serveur`
        : "Une erreur est survenue sur le client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

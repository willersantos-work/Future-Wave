import { NextPageContext } from 'next';

function Error ({ statusCode }: { statusCode: string }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const resStatusCode = res ? res.statusCode : null;
  const errStatusCode = err ? err.statusCode : null;

  if (resStatusCode) {
    return { statusCode: resStatusCode };
  }

  if (errStatusCode) {
    return { statusCode: errStatusCode };
  }

  return { statusCode: 404 };
};

export default Error;
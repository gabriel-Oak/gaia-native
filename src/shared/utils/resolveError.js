const resolveError = (e) => {
  const { response } = e;

  if (response && response.status === 503) {
    e.message = 'Estamos fora do ar, tente de novo mais tarde';
  } else if (response && response.data && response.data.message) {
    e.message = response.data.message;
  } else {
    e.message = 'Ocorreu algum erro interno';
  }

  return e;
}

export default resolveError;
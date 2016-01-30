const req = require.context(
  'bundles',
  true,
    /^\.\/[a-z]+\/actions\/([a-z]+)\.js$/i
);

const bundleInits = req
      .keys()
      .map(key => req(key).init)
      .filter(bundleInit => !!bundleInit);

export default function init() {
  return async (dispatch) => Promise.all(
    bundleInits.map(bundleInit => dispatch(bundleInit()))
  );
}

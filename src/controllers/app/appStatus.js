const AppStatus = (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Server is up and running.',
  });
};

module.exports = AppStatus;

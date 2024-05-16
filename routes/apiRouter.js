const apiRouter = require("express").Router();
const gamesRouter = require("./games");

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter; 